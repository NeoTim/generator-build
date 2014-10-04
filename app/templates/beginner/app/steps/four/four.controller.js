;(function(){
  'use strict';
  angular
    .module('app')
    .controller('FourCtrl', FourCtrl);

    function FourCtrl($scope){
      $scope.number = 1;
    }
}).call(this);