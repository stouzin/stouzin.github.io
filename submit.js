"use strict";

function icon(){
	document.getElementById("phoneLinks").style.display = document.getElementById("phoneLinks").style.display != "block" ? "block": "none";
	//document.getElementById("phoneLinks").style.backgroundColor = 
}

var slideIndex = 0;
var x;


function showTime(){
	var now = new Date();
	window.document.getElementById('time').innerHTML = "Time: "+(now.toLocaleTimeString());
}



function showSlides() {
	  var i;
	  
	  var slides = document.getElementsByClassName("mySlides");
	  var sides = document.getElementsByClassName("side");
	 
	  
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1}
	  for (i = 0; i < sides.length; i++) {
    sides[i].className = sides[i].className.replace(" active", "");
  }

	
	  
	  slides[slideIndex-1].style.display = "block";  
	  sides[slideIndex-1].className += " active";
	  
	  
	 
	  x = setTimeout(showSlides, 4000); // Change image every 4 seconds
	 
	
	  
	  
}

function mouseOver() {

	
	setTimeout(x, 50000000);
}
	
function mouseOut() {

	document.getElementsByClassName("mySlides").showSlides() = start;
}
	
	


			
function DateToday(){
		var date = new Date();
		var thisDay = date.getDate();
		var thisMonth = date.getMonth();
		var thisYear = date.getFullYear();
		var dateString = thisMonth + "/"+ thisDay +"/" + thisYear ;
		return dateString;
	}

	
	function checksTitle(){
		//document.getElementsByName("title").value = "help";
		if(document.getElementById("title").value != ""){
			return true;
		}
		else{
			document.getElementById("title").value = prompt("Enter the title of your submission.", "Harry Potter");
			return false;
		}
	}
	
	function checksText(){
		//document.getElementsByName("title").value = "help";
		if(document.getElementById("entry").value != ""){
			return true;
		}
		else{
			alert("Enter text of your submission: ");
			document.getElementById("entry").focus();
			return false;
		}
	}
	
	function checksDate(){
		//document.getElementsByName("title").value = "help";
		if(document.getElementById("aday").value != ""){
			return true;
		}
		else{
			alert("Enter the date of publication.");
			return false;
		}
	}
	
	function submiss(){
		var radios = document.getElementByName('mood');
		var value = false;
		if(checksTitle()&&checksDate()){
			for (var i = 0; i < radios.length; i++) {
				if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
					value = radios[i].value;       
				}
			}
			radios = document.getElementsByName('genre');
			for (var i = 0; i < radios.length; i++) {
				if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
					value = radios[i].value;       
				}
			}
		}
		else if(value == true){
			alert("Form Submit Successful.");
			return true;
		}
		else{
			alert("You Must Complete All Inputs to Submit.");
			return value;
		}
	}
	
	