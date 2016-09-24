function calculate()
{
	
	var a= $("#cost").val();
	
	var b= $("#quantity").val();	
	
	if(a=="" && b=="")
		alert("Please enter price and quantity");
	
	else if(!/^\d+$/.test(a))
	{
		alert("Cost should be only in digits");
		document.getElementById("cost").value = "";
		document.getElementById('totalCost').value= "";
	}	
	else if(!/^\d+$/.test(b))
	{
		alert("Please select the correct quantity");
		document.getElementById("quantity").value = "";
		document.getElementById('totalCost').value= "";
	}	
	else if(/^\d+$/.test(a) && /^\d+$/.test(b))
	{
		var c= a*b;	
		document.getElementById('totalCost').value = c;
		
	}
		
	return false;
}
 
