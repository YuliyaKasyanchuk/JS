function modal(){
	

    //MODAL
  
  
     let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        popup = document.querySelector('.popup'),
        description = document.getElementsByClassName('description-btn'),
        flag = 2;

        // overlay.style.transform = "translate(-350%)";


    more.addEventListener('click', function() {
        flag = 0;
        console.log(flag)
        overlay.style.display = 'block';
        overlay.classList.remove('scaleUp');
        overlay.classList.remove('fadeOut');
        overlay.classList.remove('scaleDown');
        overlay.classList.add('fade');
        
        document.body.style.overflow = 'hidden';
       




    });
    for (let i = 0; i < description.length; i++) {
        description[i].addEventListener('click', function() {
           
            flag = 1;
            console.log(flag)
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
            overlay.classList.remove('fade');
            overlay.classList.remove('fadeOut');
            overlay.classList.remove('scaleDown');
            overlay.classList.add('scaleUp');

        });

    }

   
    close.addEventListener('click', function() {
         document.body.style.overflow = '';
         console.log(flag)
        if(flag < 1){
            overlay.classList.remove('fade');
            overlay.classList.remove('scaleDown');
            overlay.classList.remove('scaleUp');
            overlay.classList.add('fadeOut');
                setTimeout(function(){
                    overlay.style.display = 'none';
           },2000);

        }
        else{
                overlay.classList.remove('fade');
                overlay.classList.remove('scaleDown');
                overlay.classList.remove('scaleUp');
                overlay.classList.add('scaleDown');
                setTimeout(function(){
                    overlay.style.display = 'none';
           },2000);
        }
      
           });

}

module.exports = modal;