;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup.six', {
          url: '/six',
          templateUrl: 'app/states/setup/six/six.html',
          controller: 'SixCtrl'
        })
    }
}).call(this);