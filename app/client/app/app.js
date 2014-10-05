;(function(){
  'use strict';

  angular
    .module('app', [
      'ui.router'])
    .config( States );

    function States($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/states/main/main.html',
          controller: 'MainCtrl'
        })
    }
}).call(this);