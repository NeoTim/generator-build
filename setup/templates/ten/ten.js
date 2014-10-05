;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup.ten', {
          url: '/ten',
          templateUrl: 'app/states/setup/ten/ten.html',
          controller: 'TenCtrl'
        })
    }
}).call(this);