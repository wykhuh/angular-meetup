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
      this.meetups = $firebaseArray(ref.child('userMeetup').child(username));

      this.events = $firebaseArray(ref.child('userEvent').child(username));

    } else {
      this.meetups = [];
    }
  }
})();
