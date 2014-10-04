;(function(){
  'use strict';

  angular
    .module('app')
    .config( States );

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps', {
          url: '/steps',
          templateUrl: 'app/states/steps/steps.html'
        })
        .state('steps.one', {
          url: '/one',
          templateUrl: 'app/states/steps/one/one.html',
          controller: 'OneCtrl'
        })
        .state('steps.two', {
          url: '/two',
          templateUrl: 'app/states/steps/two/two.html',
          controller: 'TwoCtrl'
        })
        .state('steps.three', {
          url: '/three',
          templateUrl: 'app/states/steps/three/three.html',
          controller: 'ThreeCtrl'
        })
        .state('steps.four', {
          url: '/four',
          templateUrl: 'app/states/steps/four/four.html',
          controller: 'FourCtrl'
        })
        .state('steps.five', {
          url: '/five',
          templateUrl: 'app/states/steps/five/five.html',
          controller: 'FiveCtrl'
        })
    }
}).call(this);