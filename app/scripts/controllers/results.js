(function(){

  app.controller('resultsCtrl', function($scope, Post,$http) {
   $scope.items = Post.getData();
    $scope.records = [];

    for (var i=0;i<$scope.items.length;i++){
      $scope.records.push($scope.items[i]); // response data
    }
    $scope.showLoader = false;
    $scope.url = Post.getUrl();
    console.log($scope.url);

    $scope.limit = 10;
    var pageNumber = 2;

    $scope.loadMore = function() {
      var url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?budget_type=ls&range=' + $scope.url.budgetRange + '&Colour=' + $scope.url.colour + '&page_number=' + pageNumber + '&page_size=10';
      console.log(url);
      $scope.limit += 10;
      $http.get(url).success(function (data) {
        for (var i = 0; i < data.length; i++) {
          $scope.records.push(data[i]);
        }
        pageNumber++;
        $scope.showLoader = false;
      });
    }

    $scope.checkCompareBoxes = function(){
      var boxes = document.getElementsByName("compare_checkbox");
      var no_boxes_checked=0;

      for(var i =0;i<boxes.length;i++){
        if(boxes[i].checked){
          no_boxes_checked++
        }//end of if
      }//end of for


      if(no_boxes_checked>1){//checks if no of boxes checked is more than 2 and disabled the uncheked
        for(var i =0;i<boxes.length;i++){
          if(boxes[i].checked){//filters the checked from unchecked
            boxes[i].disabled = "";
          }
          else{//filters the checked from unchecked
            boxes[i].disabled = "disabled";
          }
        }//end of for
      }
      else if(no_boxes_checked<2){//checks of no of boxes hecked is now lesser than two and enables all checks
        for(var i =0;i<boxes.length;i++){
          boxes[i].disabled = "";
        }//end of for
      }
      if(no_boxes_checked> 1){
        document.getElementById("compare_btn").style.display = "block";
      }
      else{
        document.getElementById("compare_btn").style.display = "none";
      }

    }
  });

  app.directive("directiveWhenScrolled", function() {
    return function (scope, elm, attr) {
      var raw = elm[0];

      elm.bind('scroll', function () {
        if(raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.showLoader = true;
          scope.$apply(attr.directiveWhenScrolled);
        }
      });
    };
  });
})();
