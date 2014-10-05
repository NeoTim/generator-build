;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup.nine', {
          url: '/nine',
          templateUrl: 'app/states/setup/nine/nine.html',
          controller: 'NineCtrl'
        })
    }
}).call(this);