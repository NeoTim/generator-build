;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.one', {
          url: '/one',
          templateUrl: 'app/states/steps/one/one.html',
          controller: 'OneCtrl'
        })
    }

}).call(this);