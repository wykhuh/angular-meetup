(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('MyEventsController', MyEventsController);

  /** @ngInject */
  function MyEventsController($firebaseArray, $http, $resource) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");
    var authData = ref.getAuth();
    var meetups = [];
    var events = [];
    var vm = this;
    vm.events = [];
    vm.loggedIn = false;

    function createUsername(email) {
      // Firebase doesn't allow some characters to be used as keys
      return email.replace(/[\.#\$\[\]@]/g,'')
    }

    if(authData) {
      vm.loggedIn = true;

      this.remove = function(meetup) {
        ref.child('userMeetup').child(username).child(meetup.$id).remove()
      }

      var username = createUsername(authData.password.email);
      meetups = $firebaseArray(ref.child('userMeetup').child(username));

      ref.child('userMeetup').child(username).once('value', function(snapshot) {
        for(var item in snapshot.val()) {
          $http.get('https://api.meetup.com/'+snapshot.val()[item].id+'/events').then(function(res){
            if(res.data.length) {
              res.data.forEach(function(item){
                // TODO: add moment
                item.date = new Date(item.time).toLocaleString();
                vm.events.push(item)
              })
            }
          })
        }
      }, function(error) {
        console.error(error);
      });



    } else {
      this.meetups = [];
    }
  }
})();
