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
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('all_meetups', {
        url: '/all_meetups',
        templateUrl: 'app/all_meetups/all_meetups.html',
        controller: 'AllMeetupsController',
        controllerAs: 'vm'
      })
      .state('my_events', {
        url: '/my_events',
        templateUrl: 'app/my_events/my_events.html',
        controller: 'MyEventsController',
        controllerAs: 'vm'
      })

      .state('registration', {
        url: '/registration',
        template: '<h1>Hacky Registration</h1>',
        controller: 'RegistrationController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login?name',
        templateUrl: 'app/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
