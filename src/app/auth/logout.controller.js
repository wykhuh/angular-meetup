(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('LogoutController', LogoutController );

  /** @ngInject */
  function LogoutController($stateParams, $state) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");
    ref.unauth();
    $state.go('home');
  }
})();
