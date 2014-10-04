;(function(){
  'use strict';
  angular
    .module('app')
    .controller('TwoCtrl', TwoCtrl);

    function TwoCtrl($scope){
      $scope.number = 1;
    }
}).call(this);