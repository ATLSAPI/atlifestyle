var XMLHttpRequestObject=false;
if(window.XMLHttpRequest){
XMLHttpRequestObject=new XMLHttpRequest();
}else 
if(window.ActiveXObject){
XMLHttpObject=new ActiveXObject("Microsoft.XMLHTTP");
}
function getData(dataSource,targetDiv){
if(XMLHttpRequestObject) {
XMLHttpRequestObject.open("GET", dataSource);
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
var datum = XMLHttpRequestObject.responseText;

document.getElementById(targetDiv).innerHTML = datum;
alert(datum);
}
else{
	alert("error connecting")
	}
}
XMLHttpRequestObject.send(null);
}
}
function hideDiv(targtDiv){
document.getElementById(targtDiv).style.visibility = "hidden";
}
function showDiv(targtDiv){
document.getElementById(targtDiv).style.visibility = "visible";
}
function getRows(targtDiv){
var rows = document.getElementById(targtDiv).getElementsByTagName('tr');
var rows_count = rows.length-1;
return rows_count;
}