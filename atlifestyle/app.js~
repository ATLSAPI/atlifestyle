(function() {
  var app = angular.module('autoApp', []);

  app.controller('DataController',['$http','$scope',function($http,$scope){
    var auto = this;
    auto.items = [];
    
    $http.get('http://manasgirdhar-001-site1.mywindowshosting.com/api/search').success(function(data){
      auto.items = data;
      //alert(auto.items)
      // console.log(data);
    });
    var limitStep = 2;
    $scope.showmore = true;
    $scope.showless = false;
    $scope.limit = limitStep;



    $scope.incrementLimit = function() {
    //  alert(jQuery("#list_div").outerHeight())
      $scope.limit += limitStep;
      if($scope.limit<auto.items.length) {
        $scope.showless = true;
        $scope.showmore = true;
      }
      else if($scope.limit >= auto.items.length){
        $scope.showmore = false;
        $scope.showless = true;
      }
      // alert($scope.limit+" , "+$scope.cars.length)
    };

    $scope.decrementLimit = function() {

      $scope.limit -= limitStep;

      if($scope.limit < (limitStep*2)){
        $scope.limit = limitStep;
        $scope.showmore = true;
        $scope.showless = false;
      }else {
        $scope.showless = true;
        $scope.showmore = false;

      }
    };
  }]);

})();
