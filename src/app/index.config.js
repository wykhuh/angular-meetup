(function() {
  'use strict';

  angular
    .module('yoGulp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
