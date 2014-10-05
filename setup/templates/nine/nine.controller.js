;(function(){
  'use strict';
  angular
    .module('app')
    .controller('NineCtrl', NineCtrl);

    function NineCtrl($scope){
      $scope.number = 1;
    }
}).call(this);