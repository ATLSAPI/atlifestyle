/**
 * Created by goatie on 19/11/14.
 */
(function() {
    var app = angular.module('smartApp', []);

    app.controller('DataController',['$http','$scope',function($http,$scope){
        var auto = this;
        auto.items = [];

        $scope.getCount = function() {
            var budget = document.getElementById("budget_range").value;
            var budget_array = budget.split(";");
            var budget_max = budget_array[1];
            var budget_min = budget_array[0];
            var budget_range = budget_min+"-"+budget_max


            var running_cost_array = ["Low", "Economy", "Moderate", "High"]
            var running_cost = running_cost_array[document.getElementById("running_cost_range").value];

            var color = getCheckies("color_check");
            color = ((color == "")?"nothing":getCheckies("color_check"));
            //if(color == ""){ color = "nothing"}

            var speed_array = ["Any", "Slow", "Medium", "Fast", "NFS"]
            var speed = speed_array[document.getElementById("speed_range").value];

            var carrying = getRadio("carrying_radio");
            carrying = ((carrying=="")?"nothing":getRadio("carrying_radio"));

            var taking = getRadio("taking_radio");
            taking = ((taking =="")?"nothing":getRadio("taking_radio"));

           console.log(budget + " 8888 " + budget_max + " " + budget_min + " " + running_cost + " " + color + " " + speed + " " + carrying + " " + taking);

            var url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?budget_type=ls&range='+budget_range+'&Colour='+color;
            //alert(url)
            $http.get(url).success(function (data) {
                auto.items = data;
               // alert(auto.items)
                // console.log(data);
            });

        }



    }]);

})();
