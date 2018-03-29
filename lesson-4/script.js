var summ,
	title,
	time = 0,
	price,
	askEmployer;

var mainList = {
	summ: summ,
	shopTitle: title,
	shopGoods: [],
	employers: {
		name: []
	},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods(){
	 	  for (var i = 0; i < 3; i++){
		var answer = prompt('Какой тип товаров будем продавать?', '');

			if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer !== '' && answer.length < 50 && answer.search(/\d/) === -1){
				console.log('Все верно');
				mainList.shopGoods[i] = answer;
				
			}
			else{
				console.log('Вы ввели некорректные данные!', '');
				break;
			}
	};
	console.log(mainList.shopGoods);
 	},
 	workTime: function workTime(time){
		if(time < 0){
		console.log('Такого не может быть!');
		}
		else if(time>8 && time<20){
			console.log('Время работать!');
			mainList.open = true;
		}
		else if(time<24){
			console.log('Уже слишком поздно!');
		}
		else{
			console.log('В сутках 24 часа!');
		}
	},
	calcSummForDay: function calcSummForDay(summ){
		return summ/30;
	},
	calcDiscount: function calcDiscount(price){
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

	},
	askEmployersName: function askEmployersName(){

		for(let i = 0; i < 4; i++){
			askEmployer = prompt('Имя сотрудника');
			mainList.employers.name[i] = (i+1) + ' - ' + askEmployer;
		}
		console.log (mainList.employers.name);
	},
	chooseShopItems: function chooseShopItems(){
		let items = '';
		do{
			items = prompt('Перечислите через запятую ваши товары', '');
		
		} while( items === null ||  items.search(/\d/) !== -1  ||  items === '')

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите еще', ''));
		mainList.shopItems.sort();
		console.log(mainList.shopItems);


		mainList.shopItems.forEach(function(item, i, items){
			console.log('У нас вы можете купить: ' + mainList.goodsNumeration(i) +' - '+ item);
		});

		
		
	},
	goodsNumeration: function goodsNumeration(i){
		return (i+1);
	}

};


 mainList.chooseShopItems();
 console.log(mainList);

 for (key in mainList){
 	console.log('Наш магазин включает в себя: ' + key);
 }






