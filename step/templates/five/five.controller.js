;(function(){
  'use strict';
  angular
    .module('app')
    .controller('FiveCtrl', FiveCtrl);

    function FiveCtrl($scope){
      $scope.number = 1;
    }
}).call(this);