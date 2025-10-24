let hr = document.getElementById(‘’);
let min = 
let sec = 

function displayTime(){
	let date = new Date();
	
	let hh = date.getHours();
	let mm =
	let ss =

	let hRotation = 30*hh + mm/2;
	let mRotation = 6*mm;
	let sRotation = 6*ss;
	
	hr.style.transform = `rotate(${}deg)`;
	min.style.transform = 
	sec.style.transform = 
}

setInterval();