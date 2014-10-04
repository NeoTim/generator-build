;(function(){
  'use strict';

  angular
    .module('app')
    .config( Setup );

    function Setup($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('setup', {
          url: '/setup',
          templateUrl: 'app/states/setup/setup.html'
        })
        .state('setup.six', {
          url: '/six',
          templateUrl: 'app/states/setup/six/six.html',
          controller: 'SixCtrl'
        })
        .state('setup.seven', {
          url: '/seven',
          templateUrl: 'app/states/setup/seven/seven.html',
          controller: 'SevenCtrl'
        })
        .state('setup.eight', {
          url: '/eight',
          templateUrl: 'app/states/setup/eight/eight.html',
          controller: 'EightCtrl'
        })
        .state('setup.nine', {
          url: '/nine',
          templateUrl: 'app/states/setup/nine/nine.html',
          controller: 'NineCtrl'
        })
        .state('setup.ten', {
          url: '/ten',
          templateUrl: 'app/states/setup/ten/ten.html',
          controller: 'TenCtrl'
        })
    }
}).call(this);