;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup', {
          url: '/setup',
          templateUrl: 'app/states/setup/setup.html'
        })
    }
}).call(this);