;(function(){
  'use strict';
  angular
    .module('app')
    .controller('SixCtrl', SixCtrl);

    function SixCtrl($scope){
      $scope.number = 1;
    }
}).call(this);