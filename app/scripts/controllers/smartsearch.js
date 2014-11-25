/**
 * Created by goatie on 24/11/14.
 */
app.controller('smartsearchCtrl',function($scope, $http, ngDialog, $location, Post) {
  /**
   * Created by goatie on 24/11/14.
   */
  ///

  ///
  $scope.carCount = "57398"

  $scope.onClickImageRadio = function(radio_name,radio_id,img_name){
    //alert(radio_name);
    //alert();
    $scope.uncheckAll(radio_name);
    document.getElementById(radio_id).checked = "checked";
    var radio_holder =  document.getElementsByName(radio_name);
    var img_holder  =  document.getElementsByName(img_name);
    for(var i = 0;i<img_holder.length;i++){
      if(radio_holder[i].checked){
        //img_holder[i].style.transform = "rotate(0deg)";
        img_holder[i].style.boxShadow = "0px 0px 20px #03F";
        //img_holder[i].style.color="blue";
      }
      else{
        img_holder[i].style.boxShadow = "0px 0px 0px ";
        //img_holder[i].style.transform = "rotate(15deg)";
      }
    }
  }

  $scope.onClickImageCheck = function(check_name,check_id,img_name){
//uncheckAll(check_name);
    if(document.getElementById(check_id).checked){
      document.getElementById(check_id).checked = "";//unchecking
    }
    else{
      document.getElementById(check_id).checked = "checked";//checking
    }

    var check_holder =  document.getElementsByName(check_name);
    var img_holder  =  document.getElementsByName(img_name);
    for(var i = 0;i<img_holder.length;i++){
      if(check_holder[i].checked){
        //img_holder[i].style.transform = "rotate(0deg)";
        img_holder[i].style.boxShadow = "0px 0px 20px #03F";
        //img_holder[i].style.color="blue";
      }
      else{
        img_holder[i].style.boxShadow = "0px 0px 0px ";
        //img_holder[i].style.transform = "rotate(15deg)";
      }
    }

  }

  $scope.getCheckies = function(iSource,concatStr){//more effective
    var ins = document.getElementsByName(iSource)
    //var css_presence = makePageWait(document.getElementById("theme_linker").href )
    //if(css_presence == true){
    //	document.getElementById("body_id").style.visibility = "visible";
    //} i;
    var j=0;
    var vals= "" //new Array();
    for(i=0;i<ins.length;i++)
    {
      if(ins[i].checked){
        j++;
        if(j==1){
          vals=vals+ins[i].value;
        }
        else{
          vals=vals+concatStr+ins[i].value;
        }
      }
    }
    return vals;
  }

  $scope.getRadio = function(iSource){//more effective
    var ins = document.getElementsByName(iSource)
    var i;
    var j=0;
    var vals= ""//new Array();
    for(i=0;i<ins.length;i++)
    {
      if(ins[i].checked){
        vals =  ins[i].value;
      }
    }
    return vals;
  }

  $scope.sendData = function() {

    var budget = document.getElementById("budget_range").value;

    var budget_array = budget.split(";");
    var budgetMax = budget_array[1];
    var budgetMin = budget_array[0];
    var budget_range = budgetMin+"-"+budgetMax

    var running_cost_array = ["any","Economy", "Moderate", "High"]
    var runningCost = running_cost_array[document.getElementById("running_cost_range").value];

    var color = $scope.getCheckies("color_check","&Colour=");

    var speed_array = ["Any", "Slow", "Medium","Fast","NFS"]
    var speed = speed_array[document.getElementById("speed_range").value];

    var carrying = $scope.getRadio("carrying_radio");

    var taking = $scope.getRadio("taking_radio");

    var pageNumber=1;

    var cookie_names = ["budget_range","runningCost","speed","carrying","taking","color"]
    var cookie_values= [budget_range,runningCost,speed,carrying,taking,color]

    $scope.setArrayOfCookies(cookie_names,cookie_values)

    var smartData = {"colour":color,"budgetRange":budget_range,"runningCost":runningCost,"speed":speed, "carrying":carrying ,"taking":taking};
    //alert(JSON.stringify(smartData));
    ngDialog.open({
      template: '<p style="text-align: center">Getting your cars...</p><img style="margin-left: 43%" width="64" height="64" src="images/icon-loading_color_128px.gif">',
      plain: true,
      showClose: false,
      closeByDocument: false,
      closeByEscape: false,
      className: 'ngdialog-theme-default'
    });
    var url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?budget_type=ls&range='+budget_range+'&Colour='+color+'&page_number=' + pageNumber + '&page_size=10';
    Post.setUrl(smartData);
    $http.get(url).success(function(data){
      ngDialog.close();
      Post.setData(data);

      $location.path("/smartsearch/results");
    });

    //var cookie_names = ["budgetMax","budgetMin","runningCost","speed","carrying","taking","long","lat","color"]
    //var cookie_values= [budgetMax,budgetMin,runningCost,speed,carrying,taking,lon,lat,color]
    //
    //setArrayOfCookies(cookie_names,cookie_values)
    ////alert(JSON.stringify(smartData));
    //window.location.href = "results.html";

  }

  $scope.getCount = function() {
    var budget = document.getElementById("budget_range").value;

    var budget_array = budget.split(";");
    var budgetMax = budget_array[1];
    var budgetMin = budget_array[0];
    var budget_range = budgetMin+"-"+budgetMax

    var running_cost_array = ["any","Economy", "Moderate", "High"]
    var runningCost = running_cost_array[document.getElementById("running_cost_range").value];

    var color = $scope.getCheckies("color_check","&Colour=");

    var speed_array = ["Any", "Slow", "Medium","Fast","NFS"]
    var speed = speed_array[document.getElementById("speed_range").value];

    var carrying = $scope.getRadio("carrying_radio");

    var taking = $scope.getRadio("taking_radio");

    var pageNumber=1;

    var url = 'http://manasgirdhar-001-site1.mywindowshosting.com/api/smartsearch?budget_type=ls&range='+budget_range+'&Colour='+color;
    //alert(url)
    $http.get(url).success(function (data) {
      $scope.items = data;
      $scope.carCount = $scope.items[0].TotalResults;
      // alert(auto.items)
      // console.log(data);
    });
  }

  $scope.uncheckAll = function(iSource){
//more effective
    var ins = document.getElementsByName(iSource)
    var i;
    var j=0;
    var vals= ""//new Array();
    for(i=0;i<ins.length;i++)
    {
      ins[i].checked="";
    }
  }

  $scope.setCookie = function(cookie_name,value,expiry_days){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + expiry_days);
    var cookie_value=escape(value) + ((expiry_days==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie = cookie_name+"="+cookie_value
  }

  $scope.setArrayOfCookies = function(cookie_name,value){
    for(var i=0;i<cookie_name.length;i++){
      $scope.setCookie(cookie_name[i],value[i],2);
    }

  }

  $scope.getCookie = function(cookie_name){
    var i,x,y,ARRcookies =document.cookie.split(";")
    for(i=0;i<ARRcookies.length;i++){
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if(x==cookie_name){
        return unescape(y)
      }
    }
  }

});
