(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebaseObject) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");

    this.data = $firebaseObject(ref);
  }
})();
