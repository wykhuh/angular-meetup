(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");

    var authData = ref.getAuth();

    function createUsername(email) {
      // Firebase doesn't allow some characters to be used as keys
      return email.replace(/[\.#\$\[\]@]/g,'')
    }

    if(authData) {
      this.remove = function(meetup) {
        ref.child('userMeetup').child(username).child(meetup.$id).remove()
      }
      
      var username = createUsername(authData.password.email);
      this.meetups = $firebaseArray(ref.child('userMeetup').child(username));
    } else {
      this.meetups = [];
    }
  }
})();
