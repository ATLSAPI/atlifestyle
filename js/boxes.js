// JavaScript Document
function onClickImageRadio(radio_name,radio_id,img_name){
	//alert();
uncheckAll(radio_name);
document.getElementById(radio_id).checked = "checked";
radio_holder =  document.getElementsByName(radio_name);
img_holder  =  document.getElementsByName(img_name);
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

function onClickImageCheck(check_name,check_id,img_name){
//uncheckAll(check_name);
if(document.getElementById(check_id).checked){
document.getElementById(check_id).checked = "";//unchecking
}
else{
	document.getElementById(check_id).checked = "checked";//checking
}

check_holder =  document.getElementsByName(check_name);
img_holder  =  document.getElementsByName(img_name);
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

function getCheckedValues(namee){
	var all_selected_values="";
	var e =  document.frm.elements.length
	for(var i = 0;i<e;i++){
		if(document.frm.elements[i].name == namee && document.frm.elements[i].checked){
			all_selected_values = all_selected_values+"|"+document.frm.elements[i].value;		
			}
		}
	return all_selected_values;
	}
	
function getCheckies(iSource){//more effective
var ins = document.getElementsByName(iSource)
var i;
var j=0;
var vals= ""//new Array();
for(i=0;i<ins.length;i++)
{
if(ins[i].checked){	
j++;
if(j==1){
	vals=vals+ins[i].value;
	}
	else{
		vals=vals+"|"+ins[i].value;
		}
}
}
return vals;
	}

function getUnCheckies(iSource){//more effective
var ins = document.getElementsByName(iSource)
var i;
var j=0;
var vals= ""//new Array();
for(i=0;i<ins.length;i++)
{
if(!ins[i].checked){	
j++;
if(j==1){
	vals=vals+ins[i].value;
	}
	else{
		vals=vals+"|"+ins[i].value;
		}
}
}
return vals;
	}

function checkAll(iSource){//more effective
var ins = document.getElementsByName(iSource)
var i;
var j=0;
var vals= ""//new Array();
for(i=0;i<ins.length;i++)
{
ins[i].checked="checked"	
}
}

function uncheckAll(iSource){
//more effective
var ins = document.getElementsByName(iSource)
var i;
var j=0;
var vals= ""//new Array();
for(i=0;i<ins.length;i++)
{
ins[i].checked=""	
}
}

function getRadio(iSource){//more effective
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

function getAllInputsFromSmart(){
	
	var budget = document.getElementById("budget_range").value;
	var budget_array = budget.split(";");
	var budget_max = budget_array[1];
	var budget_min = budget_array[0];
	
	var running_cost_array = ["any","Economy", "Moderate", "High"]
	var running_cost = running_cost_array[document.getElementById("running_cost_range").value];
	
	var color = getCheckies("color_check");
	
	var speed_array = ["Any", "Slow", "Medium","Fast","NFS"]
	var speed = speed_array[document.getElementById("speed_range").value];
	
	var carrying = getRadio("carrying_radio");
	
	var taking = getRadio("taking_radio");
	
	alert(budget + " 888 " +budget_max+" "+ budget_min+" "+running_cost+" "+color+" "+speed+" "+ carrying+" "+taking);
	}

function getAllInputsFromQuestion(){
	var environment_array = ["Any","Low", "Medium", "High"]
	var environment = environment_array[document.getElementById("environment_range").value];;
	var using = getRadio("using_radio");
	var age = getRadio("age_radio");
	var transmission = getRadio("transmission_radio");
	var size = getRadio("size_radio");
	
	alert(environment+" "+using+" "+age+" "+transmission+" "+size);
	}

function checkCompareBoxes(){
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

function gtLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sendData);
		//alert(y)
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function sendData(position) {
	var coords = new google.maps.Geocoder();

	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	var budget = document.getElementById("budget_range").value;
	var budget_array = budget.split(";");
	var budgetMax = budget_array[1];
	var budgetMin = budget_array[0];

	var running_cost_array = ["any","Economy", "Moderate", "High"]
	var runningCost = running_cost_array[document.getElementById("running_cost_range").value];

	var color = getCheckies("color_check");

	var speed_array = ["Any", "Slow", "Medium","Fast","NFS"]
	var speed = speed_array[document.getElementById("speed_range").value];

	var carrying = getRadio("carrying_radio");

	var taking = getRadio("taking_radio");

	var smartData = {"Colour":color,"budgetMax":budgetMax, "budgetMin":budgetMin,"runningCost":runningCost,"speed":speed, "carrying":carrying ,"taking":taking , "longitude":lon , "latitude":lat};
	console.log(JSON.stringify(smartData));
	var cookie_names = ["budgetMax","budgetMin","runningCost","speed","carrying","taking","long","lat","color"]
	var cookie_values= [budgetMax,budgetMin,runningCost,speed,carrying,taking,lon,lat,color]

	setArrayOfCookies(cookie_names,cookie_values)
	//alert(JSON.stringify(smartData));
	window.location.href = "results.html";

}

function sendSmartSearchData(){
	gtLocation()
	///alert(y);
	//x.innerHTML = y;
}

function setCookie(cookie_name,value,expiry_days){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expiry_days);
	var cookie_value=escape(value) + ((expiry_days==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie = cookie_name+"="+cookie_value
}

function setArrayOfCookies(cookie_name,value){
for(var i=0;i<cookie_name.length;i++){
	setCookie(cookie_name[i],value[i],2);
}

}

function checkCookie(cookie_name){
	var cookie_name = getCookie();
	if(cookie_name!=null && cookie_name!=""){
		return true;
	}
	else{
		return false;
	}
}

function getCookie(cookie_name){
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

function delCookie(name){
	document.cookie=name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setThemeCookie(cookie_name){
	setCookie("theme",cookie_name,1);
}

function changeTheme(theme_filename) {
	//alert(document.getElementById('theme_linker').href );
	document.getElementById('theme_linker').href ="css/"+theme_filename;
	setThemeCookie(theme_filename);
	//alert(theme_filename)
};

function makePageWait(css_ref){
	var split_ref  = css_ref.split(".");
	if(split_ref[split_ref.length-1] != "css"){
		return false;
	}
	else{
		return true;
	}
}
function onLoadPage(){

	//alert(getCookie("theme"));
	if(checkCookie("theme") == null){

	changeTheme("bootstrap_cerulean");
	}else if (checkCookie("theme") != null) {
		var myTheme = getCookie("theme");
		//alert(myTheme)
		changeTheme(myTheme);
	}
	//var css_presence = makePageWait(document.getElementById("theme_linker").href )
	//if(css_presence == true){
	//	document.getElementById("body_id").style.visibility = "visible";
	//}
	}

