(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController() {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");

    // TODO: replace hard coded login with form

    ref.authWithPassword({
      email    : "waiyin@gophilosophie.com",
      password : "password"
    }, authHandler);


    function authHandler(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);

        ref.onAuth(function(authData) {
          if (authData) {
            ref.child("users").child(authData.uid).set({
              provider: authData.provider,
              email: authData.password.email
            });
          }
        });
      }
    }

  }
})();
