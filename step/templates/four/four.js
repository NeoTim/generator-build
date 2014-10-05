;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.four', {
          url: '/four',
          templateUrl: 'app/states/steps/four/four.html',
          controller: 'FourCtrl'
        })
    }

}).call(this);