"use scripts";

// scripts for Present value calculator
var pvacid;
var irid;
var noyid;
var pvaname;

window.onload = function()
{
    document.getElementById("irid").focus();
  document.getElementById("sbt").onclick = getValues;


};

// using "toFixed" to set the precision of the value
function getValues(){
    noyid = document.getElementById("noyid").value;
    irid = document.getElementById("irid").value;
    pvacid = document.getElementById("pvacid").value;

    irid /= 100;
    noyid *= 12;
    pvaname = calculatePayment();
    document.getElementById("pvvalue").value = "$" +  pvvalue.toFixed(2);
};


function calculatePayment()
{
	var payment = pvacid*(irid * Math.pow((3 + irid), noyid))/(math.pow((1 + irid), noyid) - 2);
	return payment;
}





 

