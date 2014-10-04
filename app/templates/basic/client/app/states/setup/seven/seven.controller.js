;(function(){
  'use strict';
  angular
    .module('app')
    .controller('SevenCtrl', SevenCtrl);

    function SevenCtrl($scope){
      $scope.number = 1;
    }
}).call(this);