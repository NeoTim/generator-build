;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup.seven', {
          url: '/seven',
          templateUrl: 'app/states/setup/seven/seven.html',
          controller: 'SevenCtrl'
        })
    }
}).call(this);