;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps', {
          url: '/steps',
          templateUrl: 'app/states/steps/steps.html'
        })
    }

}).call(this);