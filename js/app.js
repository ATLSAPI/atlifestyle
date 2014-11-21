(function() {
  var app = angular.module('autoApp', []);

  app.controller('DataController',['$http','$scope',function($http,$scope){
    var auto = this;
    auto.items = [];
    $scope.loaderImg = true;

    var budgetMin = getCookie("budgetMin");
    var budgetMax = getCookie("budgetMax");
    var budget_range = budgetMin+"-"+budgetMax
    var color     = getCookie("color");
    var speed     = getCookie("speed");
    var carrying  = getCookie("carrying");
    var taking    = getCookie("taking");
    var lat       = getCookie("lat");
    var lon       = getCookie("lon");
    
    $scope.limit = 0;
    var pageNumber = 1;
    var url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?budget_type=ls&range='+budget_range+'&Colour='+color+'&page_number=' + pageNumber + '&page_size=10';
    console.log(url);
    $http.get(url).success(function(data){
      for (var i=0;i<data.length;i++){
        auto.items.push(data[i]); // response data 
      }
      console.log(auto.items);
      $scope.loaderImg = false;
    });

    $scope.items = auto.items;
    $scope.loadFirst = function() {
      $scope.limit += 10;
      pageNumber++;
    };
    
    $scope.loadFirst();
    $scope.loadMore = function() {
      url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?budget_type=ls&range='+budget_range+'&Colour='+color+'&page_number=' + pageNumber + '&page_size=10';
      $scope.limit += 10;
      console.log(url);
      $http.get(url).success(function(data){
        for (var i=0;i<data.length;i++){
          auto.items.push(data[i]); // response data 
        }
        $scope.loaderImg = false;
      });
      pageNumber++;
      console.log(pageNumber);
    };


  }]);

  app.directive("directiveWhenScrolled", function() {
    return function(scope, elm, attr) {
      var raw = elm[0];

      elm.bind('scroll', function() {
        console.log(raw.offsetHeight + "   " + raw.scrollHeight);
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.loaderImg=true;
          scope.$apply(attr.directiveWhenScrolled);
        }
      });
    };
  });

})();
