;(function(){
  'use strict';
  angular
    .module('app')
    .controller('EightCtrl', EightCtrl);

    function EightCtrl($scope){
      $scope.number = 1;
    }
}).call(this);