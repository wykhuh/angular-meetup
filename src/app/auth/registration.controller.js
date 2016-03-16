(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('RegistrationController', RegistrationController);

  /** @ngInject */
  function RegistrationController() {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");

    // TODO: add a form instead of hard coding user data

    ref.createUser({
      email    : "waiyin@gophilosophie.com",
      password : "password"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });

  }
})();
