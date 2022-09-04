
// Percentage Calculator

function percentage_1() {
	// Method returns the element of percent id
	var percent = document.getElementById("percent").value;	
	// Method returns the element of num id
	var num = document.getElementById("num").value;
	document.getElementById("value1").value = (num / 100) * percent;
}
function percentage_2() {
	// Method returns the element of num1 id
	var num1 = document.getElementById("num1").value;
	// Method returns the elements of num2 id
	var num2 = document.getElementById("num2").value;
	document.getElementById("value2").value = (num1 * 100) / num2 + "%";
}


// Percentage Increase Calculator

function percentage_3() {
	// Method returns the element of num1 id
	var num1 = document.getElementById("num3a").value;
	// Method returns the element of num2 id
	var num2 = document.getElementById("num3b").value;
	document.getElementById("value3a").value = ((num2 - num1)*100) / num1 + " %" ;	
    document.getElementById("value3b").value = num2 - num1 ;
}

// Area Calculator

function Area_calculator() {
	// Method returns the element id
	var radius = document.getElementById("radius").value;
	var seq_len = document.getElementById("seq_len").value;
	var rec_len = document.getElementById("rec_len").value;
	var rec_wid = document.getElementById("rec_wid").value;
	var tri_b = document.getElementById("tri_b").value;
	var tri_h = document.getElementById("tri_h").value;

	// alert("Area is calling")
	
	document.getElementById("result_circle").value = ((num2 - num1)*100) / num1 + " sq" ;	
	document.getElementById("result_square").value = ((num2 - num1)*100) / num1 + " sq" ;	
	document.getElementById("result_rectangle").value = ((num2 - num1)*100) / num1 + " sq" ;	
	document.getElementById("result_triangle").value = ((num2 - num1)*100) / num1 + " sq" ;	
}