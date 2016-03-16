(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('AllMeetupsController', AllMeetupsController);

  /** @ngInject */
  function AllMeetupsController($firebaseArray) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");


    function createUserMeetup(username, meetup) {
      ref.child('userMeetup').child(username).push({
         title: meetup.title,
         url: meetup.url,
         id: meetup.$id
      })
    }

    function createMeetupUser(username, meetup) {
      ref.child('meetupUser').child(meetup.$id).push({
         user: username
      })
    }

    function createUsername(email) {
      // Firebase doesn't allow some characters to be used as keys
      return email.replace(/[\.#\$\[\]@]/g,'')
    }

    var authData = ref.getAuth();
    this.authData = authData;

    this.meetups = $firebaseArray(ref.child('meetups'));

    // TODO: fix bug. save() sometimes saves one meetup twice
    this.save = function save(meetup) {
      if (authData) {
        var email = authData.password.email;
        var username = createUsername(email)
        createUserMeetup(username, meetup);
        createMeetupUser(username, meetup);
      }
    }

  }
})();
