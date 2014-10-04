;(function(){
  'use strict';
  angular
    .module('app')
    .controller('OneCtrl', OneCtrl);

    function OneCtrl($scope){
      $scope.number = 1;
    }
}).call(this);