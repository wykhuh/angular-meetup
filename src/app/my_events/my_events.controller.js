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

    function createUsername(email) {
      // Firebase doesn't allow some characters to be used as keys
      return email.replace(/[\.#\$\[\]@]/g,'')
    }

    if(authData) {
      this.remove = function(meetup) {
        ref.child('userMeetup').child(username).child(meetup.$id).remove()
      }

      var username = createUsername(authData.password.email);
      meetups = $firebaseArray(ref.child('userMeetup').child(username));
      // console.log(meetups)

      ref.child('userMeetup').child(username).once('value', function(snapshot) {
        // The callback succeeded; do something with the final result.
        console.log(snapshot.val());
        for(var item in snapshot.val()) {
          console.log(snapshot.val()[item].id)

          $http.get('https://api.meetup.com/'+snapshot.val()[item].id+'/events').then(function(res){
            if(res.data.length) {
              console.log(res.data.length)
              res.data.forEach(function(item){
                vm.events.push(item)
                console.log(item)
              })


            }
          })
        }

      }, function(error) {
        // The callback failed.
        console.error(error);
      });




    } else {
      this.meetups = [];
    }
  }
})();
