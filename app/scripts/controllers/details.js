/**
 * Created by goatie on 25/11/14.
 */
app.controller('detailsCtrl', function($scope, Post) {
  $scope.items = Post.get();
  $scope.limit = 10;
//
});

