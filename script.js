
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

	// Ellipse  Area = π × a × b
	var el_a = document.getElementById("el_a").value;
	var el_b = document.getElementById("el_b").value;

	// Trapezoid area = (a + b) × h / 2
	var tra_a = document.getElementById("tra_a").value;
	var tra_b = document.getElementById("tra_b").value;
	var tra_h = document.getElementById("tra_h").value;

	// Parallelogram Area = a × h
	var par_b = document.getElementById("par_b").value;
	var par_h = document.getElementById("par_h").value;
	
	document.getElementById("result_circle").value = Math.PI*radius*radius + " sq" ;	
	document.getElementById("result_square").value = seq_len*seq_len + " sq" ;	
	document.getElementById("result_rectangle").value = rec_wid * rec_len + " sq" ;	
	document.getElementById("result_triangle").value = (tri_b* tri_h)/ 2 + " sq" ;	
	document.getElementById("result_parallelogram").value = par_b* par_h + " sq" ;	
	document.getElementById("result_trapezoid").value = (tra_a+tra_b)*tra_h/ 2 + " sq" ;	
	document.getElementById("result_ellipse").value = Math.PI*el_a* el_b + " sq" ;	
}

// convertor Calculator

function convertor_calculator_1() {
	// Method returns the element 
	var fluid_oz = document.getElementById("fluid_oz").value;
	document.getElementById("result").value = fluid_oz/8 + " cup" ;	
}
function convertor_calculator_2() {
	// Method returns the element 
	var Nm = document.getElementById("nm").value;
	document.getElementById("result2").value = Nm/1.356 + " ft-lbs" ;	
}


// liquid convertor Calculator
function convertor_liquid_calculator(){
	var liquid = document.getElementById("liquid").value;
	var weight = document.getElementById("weight").value;
	if(liquid === "Fresh Water")
	{
		// liter = weight / density  Though 1 liter of water equals 1 kg, 1 liter of milk equals 1.03 kg.
		document.getElementById("volume").value = weight  + " liter" ;

	}else if(liquid === "Salt Water"){

		// Though 1 liter of water equals 1 kg, 1 liter of milk equals 1.03 kg.
		document.getElementById("volume").value = weight / 1.03092783505+ " liter" ;

	}else if(liquid === "Milk"){

		document.getElementById("volume").value = weight / 1.03092783505 + " liter" ;

	}else if(liquid === "Honey"){
		
		document.getElementById("volume").value = weight/1.42857142857 + " liter" ;

	}else if(liquid === "Butter"){

		document.getElementById("volume").value = weight / 0.96153846154 + " liter" ;


	}else if(liquid === "Cooking oil"){

		document.getElementById("volume").value = weight /0.87719298246 + " liter" ;

	}else if(liquid === "Olive oil"){

		document.getElementById("volume").value = weight / 0.91743119266+ " liter" ;

	}else if(liquid === "Sunflower oil"){

		document.getElementById("volume").value = weight / 0.96153846154+ " liter" ;

	}else if(liquid === "Vegetable oil"){

		document.getElementById("volume").value =weight / 0.89285714286 + " liter" ;

	}else{
		alert("Enter Valid state");
	}
}
