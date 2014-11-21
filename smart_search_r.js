/**
 * Created by goatie on 19/11/14.
 */
(function() {
    var app = angular.module('autoApp', []);

    app.controller('DataController',['$http','$scope',function($http,$scope) {
        var auto = this;
        auto.items = [];

        $http.get('http://manasgirdhar-001-site1.mywindowshosting.com/api/search').success(function (data) {
            auto.items = data;
            //alert(auto.items)
            // console.log(data);
        });
    })

})();
