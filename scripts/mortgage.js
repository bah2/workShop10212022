"use scripts";

// scripts for mortgage calculator
var ltpid;
var ipyid;
var mortgageid;
var mrtgname;

window.onload = function()
{
    document.getElementById("ipyid").focus();
  document.getElementById("sbt").onclick = getValues;


};

// using "toFixed" to set the precision of the value
function getValues(){
    ltpid = document.getElementById("ltpid").value;
    ipyid = document.getElementById("ipyid").value;
    mortgageid = document.getElementById("mortgageid").value;

    ipyid /= 1200;
    ltpid *= 12;
    rcname = calculatePayment();
    document.getElementById("rcvalue").value = "$" +  rcname.toFixed(2);
};


function calculatePayment()
{
	var payment = mortgageid*(ipyid * Math.pow((1 + ipyid), ltpid))/(Math.pow((1 + ipyid), ltpid) - 1);
	return payment;
}



