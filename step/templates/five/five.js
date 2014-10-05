;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.five', {
          url: '/five',
          templateUrl: 'app/states/steps/five/five.html',
          controller: 'FiveCtrl'
        })
    }

}).call(this);