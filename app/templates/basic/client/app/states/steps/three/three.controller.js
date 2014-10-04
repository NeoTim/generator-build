;(function(){
  'use strict';
  angular
    .module('app')
    .controller('ThreeCtrl', ThreeCtrl);

    function ThreeCtrl($scope){
      $scope.number = 1;
    }
}).call(this);