;(function(){
  'use strict';
  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope){
      $scope.intro = 'Welcome'
    }
}).call(this);