(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");

    this.meetups = $firebaseArray(ref.child('meetups'));
  }
})();
