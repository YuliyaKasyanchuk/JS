let open = document.getElementById('open-btn'),
	btnTag = document.getElementsByTagName('button'),
	goods_btn = document.querySelector('.goods-item-btn'),
	budget_btn = document.querySelector('.count-budget-btn'),
	employers = document.querySelectorAll('.hire-employers-item'),
	goodsItem = document.getElementsByClassName('goods-item'),
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	budget = document.querySelector('.count-budget-value'),
	mainInfo = document.getElementsByClassName('main-info'),
	nameValue = document.getElementsByClassName( 'name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employers_btn = document.querySelector('.hire-employers-btn'),
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0];


var summ,
	title,
	price,
	askEmployer;


open.addEventListener('click', () => {
	while(isNaN(summ) || summ ==='' || summ === null || (typeof(summ)) == 'null'){
		summ = +prompt('Ваш бюджет', '' );
 	}
	
	budgetValue.textContent = summ;
	nameValue.textContent = prompt('Название вашего магазина', 'название' ).toUpperCase();
	
});


goods_btn.addEventListener('click', () => {
	let vegetables = 'овощи',
		fruits = 'фрукты';
		
	for (let i = 0; i < goodsItem.length; i++){
		let answer = goodsItem[i].value;

		if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer.length < 50 || answer.search(/\d/) === -1 ){
			console.log('Все верно');
			mainList.shopGoods[i] = answer;
			
			    let disc = 0;
			goodsValue.textContent = mainList.shopGoods;
			if(goodsValue.textContent.match(fruits) && goodsValue.textContent.match(vegetables)){
				discountValue.style.backgroundColor = 'green';
					
			
					mainList.discount = true;
					alert('У вас скидка на ' + fruits + ' и '+ vegetables + ' - 20%');
					disc = price*20/100;
					// console.log('Старая цена ' + price + ' рубл');
					// console.log('Скидка ' + disc + ' рубл');
					// console.log('Новая цена ' + (price-disc)  + ' рубл');

			}
			else if(answer === 'фрукты'  || answer === 'овощи'){
				discountValue.style.backgroundColor = 'green';
					
			
					mainList.discount = true;
					alert('У вас скидка на ' + answer + ' - 20%');
					disc = price*20/100;
					// console.log('Старая цена ' + price + ' рубл');
					// console.log('Скидка ' + disc + ' рубл');
					// console.log('Новая цена ' + (price-disc)  + ' рубл');

				}
			
		}
		else{
			console.log('Вы ввели некорректные данные!', '');
			break;
		}

	}
	
	
	
});


chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if( isNaN(items) &&  items.search(/\d/) !== -1  && items.search(/[^\a-zA-ZА-яА-Я\,]/g) !== -1 ){
		alert('Введите строковые данные через запятую!');
		chooseItem.value = '';
	}
	else{
		
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;

	}

});




timeValue.addEventListener('change', () => {

	let time = timeValue.value;
	if(time < 0){
		console.log('Такого не может быть!');
		mainList.open = false;
		}
		else if(time>8 && time<20){
			console.log('Время работать!');
			mainList.open = true;
		}
		else if( time>=20 && time<24){
			console.log('Уже слишком поздно!');
			mainList.open = false;
		}
		else{
			console.log('В сутках 24 часа!');
			mainList.open = false;
		}
	
	if(mainList.open){
		isopenValue.style.backgroundColor = 'green';
	}
	else{
		isopenValue.style.backgroundColor = 'red';
	}
});

budget_btn.addEventListener('click', () =>{
	budget.value = summ/30;
});

employers_btn.addEventListener('click', () => {
	for(let i = 0; i < employers.length; i++){
			let name = employers[i].value;
			mainList.employers[i] = name;
			employersValue.textContent += mainList.employers[i] + ',';
		}
		
});

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
	goodsNumeration: function goodsNumeration(i){
		return (i+1);
	}

};

	console.log('Наш магазин включает в себя: ');
 	for (key in mainList){

 		console.log(key);
 	}

 
	document.body.style.background = 'url(./img/apple.jpg)';











