window.addEventListener('DOMContentLoaded', function(){
let mainBlock = document.getElementsByClassName('main-block')[0],
	menu = document.getElementsByTagName('nav')[0],
	content = document.getElementsByClassName('content')[0];

// TYPING TEXT
	let newButton = document.createElement('button'),
		text = document.createElement('textarea');
		text.classList.add('text-container');

	mainBlock.appendChild(newButton);
	mainBlock.appendChild(text);
	
	text.style.width = "100%";
	text.style.height = '70px';
	text.style.backgroundColor = 'transparent';
	text.style.color = "orange";
	text.style.opacity = "0";
	newButton.style.width = '200px';
	newButton.style.height = '50px';
	newButton.style.marginTop = '20px';
	newButton.style.marginBottom  = '20px';
	newButton.style.backgroundColor = 'orange';
	newButton.style.сolor = 'white';
	newButton.style.opacity = '0';
	newButton.innerHTML = 'НАЖМИ НА МЕНЯ!!!';
	
	let textValue = text.value;
		
	let id = setTimeout(show, 1000);
	function show(){
		newButton.style.opacity ++;
		clearInterval(id);
	}
  	setTimeout(show, 1000);

  	let str = 'Аюрведа и йога утверждают, что главным источником здоровья нашего организма является здоровый ум. Программа «Антистресс» сначала убирает последствия стресса на физическом уровне, потом помогает избавиться от негативных и навязчивых мыслей';
	let i=0;

	function step() {
		 	
		setTimeout(function(){
		requestAnimationFrame(step);
		i++;
		text.style.border = "none";
		text.style.opacity = "1";
		text.style.color = 'orange';
		text.textContent = str.substr(0,i);
	}, 100);
	
	};

	newButton.addEventListener('click', step);	
		
	// TABS
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className === 'info-header-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target === tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});


	// TIMER

	let deadline = '2018-04-05';

	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60)) );

		return{
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}

	}

	function setClock(id, endtime){
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock(){
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if(t.total <= 0){
					hours.innerHTML = '00';
					minutes.innerHTML = '00';
					seconds.innerHTML = '00';
					clearInterval(timeInterval);
					

				}
			}

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);



	// SCROLL

	menu.addEventListener('click', (event) =>{
		event.preventDefault();
		let target = event.target.getAttribute('href');
	
		for(let i = 0; i<target.length; i++){
			if(target[0] === '#'){
				target[0].replaceWith('');
			}
			target[0] += '';
			console.log(target[i])
		}

	});
	
// 	menu.addEventListener('click', (event) =>{
// 		event.preventDefault();
// 		let target = event.target.getAttribute('href'),
// 			linkNav = document.querySelectorAll('[href^="#"]'),
// 			V = 1;

// 		for(let i=0; i<linkNav.length; i++){
// 			linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
//         e.preventDefault(); //отменяем стандартное поведение
//         var w = window.pageYOffset,  // производим прокрутка прокрутка
//             hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
//         t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
//             start = null;
//         requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
//         function step(time) {
//             if (start === null) start = time;
//             var progress = time - start,
//                 r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
//             window.scrollTo(0,r);
//             if (r != w + t) {
//                 requestAnimationFrame(step)
//             } else {
//                 location.hash = hash  // URL с хэшем
//             }
//         }
//     }, false);
// }
	
			

		
		

	

		// console.log(linkNav.length);

		// function calculatePosition(){
		// 	let targetToscroll = target.getAttribute('href');
		
			
		// }

		// window.scrollBy(0,calculatePosition());
	
});