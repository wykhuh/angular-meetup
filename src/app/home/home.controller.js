(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray, $http, $state) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");
    var authData = ref.getAuth();
    var vm = this;
    vm.events = [];
    vm.meetups = [];
    vm.authData = false;

    function createUsername(email) {
      // Firebase doesn't allow some characters to be used as keys
      return email.replace(/[\.#\$\[\]@]/g,'')
    }

    if(authData) {
      vm.authData = true;
      this.remove = function(meetup) {
        ref.child('userMeetup').child(username).child(meetup.$id).remove()
      }

      var username = createUsername(authData.password.email);
      // this.meetups = $firebaseArray(ref.child('userMeetup').child(username));



      ref.child('userMeetup').child(username).once('value', function(snapshot) {
        var items = snapshot.val();
        for(var item in items) {
          vm.meetups.push(items[item])


          $http.get('https://api.meetup.com/' + items[item].id + '/events')
          .then(function(res){
            if(res.data.length) {
              res.data.forEach(function(item){
                vm.events.push(item);
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
