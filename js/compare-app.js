/**
 * Created by goatie on 19/11/14.
 */
(function() {
    var app = angular.module('smartApp', []);

    app.controller('DataController',['$http','$scope',function($http){
        var auto = this;
        auto.items = [];

        var compare_id1 = getCookie("compare_id1");
        var compare_id2 = getCookie("compare_id2");

            var url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?compare_id1='+compare_id1+'&compare_id2='+compare_id2;
            //alert(url)
            $http.get(url).success(function (data) {
                auto.items = data;
                // alert(auto.items)
                // console.log(data);
            });
    }]);

})();
