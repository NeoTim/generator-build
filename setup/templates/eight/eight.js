;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup.eight', {
          url: '/eight',
          templateUrl: 'app/states/setup/eight/eight.html',
          controller: 'EightCtrl'
        })
    }
}).call(this);