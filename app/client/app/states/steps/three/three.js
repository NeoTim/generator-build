;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.three', {
          url: '/three',
          templateUrl: 'app/states/steps/three/three.html',
          controller: 'ThreeCtrl'
        })
    }

}).call(this);