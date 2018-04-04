window.addEventListener('DOMContentLoaded', function() {
    let mainBlock = document.getElementsByClassName('main-block')[0];


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
    newButton.style.marginBottom = '20px';
    newButton.style.backgroundColor = 'orange';
    newButton.style.сolor = 'white';
    newButton.style.opacity = '0';
    newButton.innerHTML = 'НАЖМИ НА МЕНЯ!!!';

    let textValue = text.value;

    console.log(typeof text.innerHTML);
    let id = setTimeout(show, 1000);

    function show() {
        newButton.style.opacity++;
        clearInterval(id);
    }


    function change() {

        if (newButton.innerHTML === 'НАЖМИ НА МЕНЯ!!!') {
            newButton.innerHTML = 'Удалить текст';
            step();
        } else {
            newButton.innerHTML = 'НАЖМИ НА МЕНЯ!!!';
            stop();
        }
    }
let timeOut;
    newButton.addEventListener('click', change);

    function step() {
        timeOut = setTimeout(function() {
            requestAnimationFrame(step);
            i++;

            text.style.border = "none";
            text.style.opacity = "1";
            text.style.color = 'orange';
            text.textContent = str.substr(0, i);
        }, 100);

    };

    function stop() {
      clearTimeout(timeOut);
    }
    let str = 'Аюрведа и йога утверждают, что главным источником здоровья нашего организма является здоровый ум. Программа «Антистресс» сначала убирает последствия стресса на физическом уровне, потом помогает избавиться от негативных и навязчивых мыслей';
    let i = 0;
   
    // newButton.addEventListener('click',change);




    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target.className === 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});