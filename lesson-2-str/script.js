window.addEventListener('DOMContentLoaded', function(){

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let currentDay = new Date();
for(let i = 0; i < week.length; i++){
 

	if(week[i] ==='сб' || week[i] === 'вс'){
		document.write('<b>'+ week[i]+'</b>' + '<br>');
	}
	else if( (i+1) === currentDay.getDay()){
		document.write('<em>'+ week[i]+'</em>' + '<br>');
	}
	else{
		document.write(week[i] + '<br>');
	}
	
}

});



let arr = ['1256', '385', '859786', '97355', '789779', '58997', '374565'];
for(let i = 0; i < arr.length; i++){
	if(arr[i][0] === '3' || arr[i][0] === '7'){
		console.log(arr[i]);
	}
	
}

