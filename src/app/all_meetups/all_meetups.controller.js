(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('AllMeetupsController', AllMeetupsController);

  /** @ngInject */
  function AllMeetupsController($firebaseArray) {
    var meetupRef = new Firebase("https://wyk-phil.firebaseio.com/meetups");

    this.meetups = $firebaseArray(meetupRef);
  }
})();
