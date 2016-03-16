(function() {
  'use strict';

  angular
    .module('yoGulp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/all_meetups/all_meetups.html',
        controller: 'AllMeetupsController',
        controllerAs: 'vm'
      })
      .state('registration', {
        url: '/registration',
        controller: 'RegistrationController',
        controllerAs: 'vm'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
