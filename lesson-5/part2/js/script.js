window.addEventListener('DOMContentLoaded', function(){

	let btn = document.getElementById('open-btn'),
		btnTag = document.getElementsByTagName('button'),
		employers = document.querySelectorAll('.hire-employers-item'),
		goodsItem = document.getElementsByClassName('goods-item'),
		item = document.querySelector('.choose-item'),
		time = document.querySelector('.time-value'),
		budget = document.querySelector('.count-budget-value'),
		mainInfo = document.getElementsByClassName('main-info'),
		leftFiels = document.getElementsByClassName( 'name-value'),
		budgetValue = document.getElementsByClassName('budget-value'),
		goodsValue = document.getElementsByClassName('goods-value'),
		itemsValue = document.getElementsByClassName('items-value'),
		employersValue = document.getElementsByClassName('employers-value'),
		discountValue = document.getElementsByClassName('discount-value'),
		isopenValue = document.getElementsByClassName('isopen-value');


	console.log(btn);
	console.log(btnTag);
	console.log(employers);
	console.log(goodsItem);
	console.log(item);
	console.log(time);
	console.log(budget);
	console.log(leftFiels);
	console.log(budgetValue);
	console.log(goodsValue);
	console.log(itemsValue);
	console.log(employersValue);
	console.log(discountValue);
	console.log(isopenValue);

	document.body.style.background = 'url(./img/apple.jpg)';
	console.log(document.body)
});


