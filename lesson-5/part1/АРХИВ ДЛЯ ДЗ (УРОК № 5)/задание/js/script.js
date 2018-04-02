window.addEventListener('DOMContentLoaded', function(){

	let menuItem = document.getElementsByClassName('menu-item'),
	    newMenuItem = document.createElement('li'),
	    newMenuItem2 = document.createElement('li'),
		menu = document.querySelector('.menu'),
		header = document.getElementsByTagName('header'),
		adv = document.querySelector('.adv'),
		col = document.getElementsByClassName('column'),
		title = document.getElementById('title'),
		promptBlock = document.getElementById('prompt'),
		question = prompt('Ваше отношение к техники apple?');

		// МЕНЮ
	// menu.replaceChild(menuItem[2], menuItem[1]);
	newMenuItem.classList.add('menu-item');
	newMenuItem.innerHTML = 'Пятый пункт';
	menu.insertBefore(newMenuItem, menuItem[4]);
	// newMenuItem2.innerHTML = 'Третий пункт';
	// newMenuItem2.classList.add('menu-item');
	// menu.insertBefore(newMenuItem2, menuItem[2]);
	let pointThree = menu.removeChild(menuItem[1]);
	menu.insertBefore(pointThree, menuItem[2]);

		// ФОН
	document.body.style.background = 'url(../img/apple_true.jpg)';

	
		// НАДПИСЬ
	title.innerHTML = title.innerHTML.replace('только ', 'только подлинную ');


		// РЕКЛАМА
	col[1].removeChild(adv);

		// ВОПРОС
	promptBlock.textContent = question;



	
});

