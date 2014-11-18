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
	
	var running_cost_array = ["any","Low", "Medium", "High"]
	var running_cost = running_cost_array[document.getElementById("running_cost_range").value];
	
	var color = getCheckies("color_check");
	
	var speed_array = ["Any", "Slow", "Medium","Faster","NFS"]
	var speed = speed_array[document.getElementById("speed_range").value];
	
	var carrying = getRadio("carrying_radio");
	
	var taking = getRadio("taking_radio");
	
	alert(budget + " " +budget_max+" "+ budget_min+" "+running_cost+" "+color+" "+speed+" "+ carrying+" "+taking);
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
function touchApi(){
	
	url = "http://manasgirdhar-001-site1.mywindowshosting.com/api/search/1";
	
	//url = "http://manasgirdhar-001-site1.mywindowshosting.com";
	//alert(url)
	//getData(url,"return_div");
	jQuery.getJSON(url, function(json) {
    alert(json.data);
	});
	}