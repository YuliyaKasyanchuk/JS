$(document).ready(function($) {
		    
	 $('.modal').css('margin-left','-100%');
	 $('.modal').css('margin-top','-100%');


	$('.main_btna').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginLeft: '25%',
		    marginTop: '50px',
		    height: 'toggle'
		},
		{
	    duration: 2000, 
	    specialEasing: {
	      opacity: 'linear',
	      height: 'swing'
    	}
  		});

	});

	$('.close').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle',
		 	display: 'none'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginLeft: '-100%',
		    marginTop: '-100%',
		    height: 'toggle'

		 	
		 },1000);
	});


$('.main_btn').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginLeft: '25%',
		    marginTop: '50px',
		    height: 'toggle'
		},
		{
	    duration: 2000, 
	    specialEasing: {
	      opacity: 'swing',
	      height: 'linear'
    	}
  		});
	});


	$('nav li:eq(1)').on('click', function(){
		$('.overlay').animate({
		 	opacity: 'toggle'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginLeft: '25%',
		    marginTop: '50px'
		 },1000);
	});



	// FORM


   $('.form-inline').submit(function() { 
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {

			$('.form-inline').find('input').val('');
			$('.form-inline').find('textarea').val('');
			$('.form-inline').find('checkbox').val('');
			 
            $('.modal').trigger('reset');
           
            	 $('.modal').append('<p class="colored">Спасибо за заявку! Скоро мы с вами свяжемся!!!!</p>');
            $('.colored').css('color', 'red');
          
           function deleteP(){
           	$('.modal').find('.colored').remove();
           }
            setTimeout(deleteP,2000);
           


			$('.overlay').animate({
			 	opacity: 'toggle',
			 	display: 'none'
			 }, 3000);
			 $('.modal').animate({
			    opacity: 'toggle',
			    marginLeft: '-100%',
			    marginTop: '-100%',
			    height: 'toggle'

			 	
			 },4000);
			
        });
        return false;

    });


$('.overlay').css('display', 'none');


     


	
});	