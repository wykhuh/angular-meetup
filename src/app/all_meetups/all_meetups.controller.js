(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('AllMeetupsController', AllMeetupsController);

  /** @ngInject */
  function AllMeetupsController($firebaseArray) {
    var ref = new Firebase("https://wyk-phil.firebaseio.com");

    this.meetups = $firebaseArray(ref.child('meetups'));
  }
})();
