;(function(){
  'use struct';
  angular
    .module('app')
    .controller('SideBarCtrl', SideBarCtrl);
    /* @inject */
    function SideBarCtrl($scope, $location, $state) {
      console.log($state)
      $scope.steps = [
        {title: 'Home', state: 'main'},
        {title: 'Step 1', state: 'steps.one'},
        {title: 'Step 2', state: 'steps.two'},
        // {title: 'Step 3', state: 'steps.three'},
        // {title: 'Step 4', state: 'steps.four'},
        // {title: 'Step 5', state: 'steps.five'}
      ];
      $scope.setups = [
        // {title: 'Step 6', state: 'setup.six'},
        // {title: 'Step 7', state: 'setup.seven'},
        // {title: 'Step 8', state: 'setup.eight'},
        // {title: 'Step 9', state: 'setup.nine'},
        // {title: 'Step 10', state:'setup.ten'}
      ];
      $scope.isCollapsed = true;

      $scope.isActive = function(route) {
        return route === $state.current.name
      };
    }

}).call(this);