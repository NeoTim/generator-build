;(function(){
  'use strict';
  angular
    .module('app')
    .controller('TenCtrl', TenCtrl);

    function TenCtrl($scope){
      $scope.number = 1;
    }
}).call(this);