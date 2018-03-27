var summ = +prompt('Ваш бюджет', '1000' );
var title = prompt('Название вашего магазина', 'название' );
var mainList = {
	summ: summ,
	shopTitle: title,
	shopGoods: [],
	employers: {},
	open: true


};

////////////////////////////    FOR         ////////////////
// for (var i = 0; i < 3; i++){
// 	var answer = prompt('Какой тип товаров будем продавать?');

// 	if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer !== '' && answer.length < 50 && answer.search(/\d/) === -1){
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = answer;
// 	}
// 	else{
// 		console.log('Вы ввели некорректные данные!');
// 		break;
// 	}
	
// };

////////////////////////////      WHILE         ////////////////
// var i = 0
// while(i<3){
// 	var answer = prompt('Какой тип товаров будем продавать?');

// 	if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer !== '' && answer.length < 50 && answer.search(/\d/) === -1){
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = answer;
// 	}
// 	else{
// 		console.log('Вы ввели некорректные данные!');
// 		break;
// 	}
// 	i++;
// };

////////////////////////////      DO WHILE         ////////////////
var i = 0
do{
	var answer = prompt('Какой тип товаров будем продавать?');

	if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer !== '' && answer.length < 50 && answer.search(/\d/) === -1){
		console.log('Все верно');
		mainList.shopGoods[i] = answer;
	}
	else{
		console.log('Вы ввели некорректные данные!');
		break;
	}
	i++;
} while(i<3);
 console.log (mainList);
 var summForDay = summ / 30;
 console.log ('Ваш бюджет на день ' + summForDay );
