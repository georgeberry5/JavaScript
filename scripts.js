function time() {
	var day = new Date();	
	var currenthour = day.getHours();
	var currentminute = day.getMinutes();
	var currentsecond = day.getSeconds();
	var ampm = (currenthour >= 12) ? "PM" : "AM";
	var currenttime = currenthour + ":" + currentminute + " " + ampm; 
	document.getElementById("timeout").innerHTML = currenttime;
	
}

function date() {
	var date = new Date();
	var currentdate = date.toDateString();
	document.getElementById("dateout").innerHTML = currentdate;
	setInterval(time, 60000);
}

function rollonto(rightside) {
	rightside.src = "images/rollon.png";
}

function rolloffof(rightside) { 
	rightside.src = "images/rolloff.png";
}

function ctrealtval() {
	var first_name = document.forms["contact"]["first_name"].value;
	var last_name = document.forms["contact"]["last_name"].value;
	var email = document.forms["contact"]["email"].value;
	var message = document.forms["contact"]["message"].value;
	document.getElementById("first_name").style.backgroundColor = ""
	document.getElementById("last_name").style.backgroundColor = ""
	document.getElementById("email").style.backgroundColor = ""
	document.getElementById("message").style.backgroundColor = ""
	if (first_name === "") {
		document.getElementById("first_name").style.backgroundColor = "red"
	}
	if (last_name === "") {
		document.getElementById("last_name").style.backgroundColor = "red"
	}
	if (email === "") {
		document.getElementById("email").style.backgroundColor = "red"
	}
	if (message === "") {
		document.getElementById("message").style.backgroundColor = "red"
	}
}

function ctval() {
	var errormsg = ""
	var first_name = document.forms["contact"]["first_name"].value;
	var last_name = document.forms["contact"]["last_name"].value;
	var email = document.forms["contact"]["email"].value;
	var message = document.forms["contact"]["message"].value;
	if (first_name === "" || last_name === "" || email === "" || message === "")
	{
		errormsg = "Ensure you have entered your First Name, Last Name, Email and a Message"; 
	}
	if (errormsg != "")
	{
		alert(errormsg);
		return false;
	}
	else
	{
		return true;
	}
}

function orderv() {
	var errormsg = "selct:";
	var basenum = document.getElementsByName("base");
	var isbasechecked = false;
	for (var counter = 0; counter < basenum.length; counter++) {
	if(basenum[counter].checked) {
	isbasechecked = true;
	break;
	}
	}
	if (!isbasechecked) 
	{
	errormsg = errormsg + " a base";
	}
	var toppingnum = document.getElementsByName("topping");
	var istoppingchecked = false;
	for (counter = 0; counter < toppingnum.length; counter++) {
	if(toppingnum[counter].checked) {
	istoppingchecked = true;
	break;
		}
	}
	if (!istoppingchecked)
	{
		errormsg = errormsg + " a topping";
	}	
	if (!isbasechecked + !istoppingchecked)
	{
		alert(errormsg);
		return false;
	}
	else
	{
		return true;
	}
}
	

