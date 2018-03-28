var summ,
	title,
	time = 0,
	price,
	askEmployer;
var mainList = {
	summ: summ,
	shopTitle: title,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true


};

 function start(summ){

 	while(isNaN(summ) || summ ==='' || summ === null || (typeof(summ)) == 'null'){
 		summ = +prompt('Ваш бюджет', '1000' );
 	}
	title = prompt('Название вашего магазина', 'название' ).toUpperCase(); 
	console.log(title);
	time = 21;
	return summ;

 }

 function chooseGoods(){
 	  for (var i = 0; i < 3; i++){
	var answer = prompt('Какой тип товаров будем продавать?');

	if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer !== '' && answer.length < 50 && answer.search(/\d/) === -1){
		console.log('Все верно');
		mainList.shopGoods[i] = answer;
		
	}
	else{
		console.log('Вы ввели некорректные данные!');
		break;
	}
		
	};
	console.log(mainList.shopGoods);
 }

function workTime(time){
	if(time < 0){
	console.log('Такого не может быть!');
	}
	else if(time>8 && time<20){
		console.log('Время работать!');
	}
	else if(time<24){
		console.log('Уже слишком поздно!');
	}
	else{
		console.log('В сутках 24 часа!');
	}
}
workTime(18);

function calcSummForDay(summ){
	return summ/30;
}

function calcDiscount(price){
	var disc = 0;
	if(mainList.discount === true){
		disc = price*20/100;
		console.log('Старая цена ' + price + ' рубл');
		console.log('Скидка ' + disc + ' рубл');
		console.log('Новая цена ' + (price-disc)  + ' рубл');
	}
	else{
		console.log('Скидки нет');
	}
	return price;

}

function hireEmployers(){

	for(let i = 0; i < 4; i++){
		askEmployer = prompt('Имя сотрудника');
		mainList.employers[i] = (i+1) + ' - ' + askEmployer;
		console.log (mainList.employers);
		
	}
	return mainList;
	

}
console.log(hireEmployers());

console.log (mainList.employers);
summ = start(summ);
chooseGoods();
console.log('Ваш бюджет на день ' + calcSummForDay(summ));
calcDiscount(200);






