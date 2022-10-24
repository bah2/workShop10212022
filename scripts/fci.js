"use scripts";

// scripts for Present value calculator
var cdid;
var cdinterestid;
var cdtermid;
var cdvaluename;

window.onload = function()
{
    document.getElementById("interestid").focus();
  document.getElementById("sbt").onclick = getValues;


};

// using "toFixed" to set the precision of the value
function getValues(){
    cdtermid = document.getElementById("cdtermid").value;
    cdinterestid = document.getElementById("cdinterestid").value;
    cdid = document.getElementById("cdid").value;

    cdinterestid /= 100;
    cdinterestid *= 12;
    cdname = calculatePayment();
    document.getElementById("pvvalue").value = "$" +  cdvaluename.toFixed(2);
};


function calculatePayment()
{
	var payment = cdid*(cdinterestid * Math.pow((1 + cdinterestid), cdinterestid))/(cdinterestid((1+ cdinterestid), cdtermid) - 1);
	return payment;
}





 

