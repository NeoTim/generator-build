;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.two', {
          url: '/two',
          templateUrl: 'app/states/steps/two/two.html',
          controller: 'TwoCtrl'
        })
    }

}).call(this);