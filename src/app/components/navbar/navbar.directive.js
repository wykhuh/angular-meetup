(function() {
  'use strict';

  angular
    .module('yoGulp')
    .directive('acmeNavbar', acmeNavbar);

    /** @ngInject */
    function acmeNavbar() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {
            loggedIn: '='
        },
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function NavbarController() {
        this.loggedIn = this.loggedIn;
      }
    }

  })();
