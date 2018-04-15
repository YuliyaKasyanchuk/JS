function calc(){
	
// Calc

        let persons = document.getElementsByClassName('counter-block-input')[0],
            restDays = document.getElementsByClassName('counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            counterTotal = document.getElementsByClassName('counter-total')[0],
            personsSum = 0,
            daysSum = 0,
            res = 0,
            total = 0;

            totalValue.innerHTML = '0';

            persons.addEventListener('change', function(){
                personsSum = +this.value;
                total = (daysSum + personsSum)*4000;
                if(restDays.value === ''){
                    totalValue.innerHTML = 0;
                }
                else{
                    totalValue.innerHTML = total;
                    totalValue.style.display = 'none';
                    counterTotal.style.minHeight = '110px';
                }
                 setInterval(type, 500);
                
            });
            restDays.addEventListener('change', function(){
                daysSum = +this.value;
                total = (daysSum + personsSum)*4000;
                if(persons.value === ''){
                    totalValue.innerHTML = 0;
                }
                else{
                    totalValue.innerHTML = total;
                    totalValue.style.display = 'none';
                    counterTotal.style.minHeight = '110px';
                }
               setInterval(type, 500);
            });

            place.addEventListener('change', function(){
                if(restDays.value === '' || persons.value === ''){
                    totalValue.innerHTML = 0;
                }
                else{
                   
                    let a = total;
                    res = a * this.options[this.selectedIndex].value;
                    totalValue.innerHTML = res;

                    totalValue.style.display = 'none';

                    counterTotal.style.minHeight = '110px';
                }
               
                setInterval(type, 1000);


            });
             function type(){
                    totalValue.style.display = 'block';
                    totalValue.style.transition = 'all .5s ease';
                    totalValue.classList.add('fade');
                   
                };




}

module.exports = calc;