$(document).ready(function($) {
	$('.modal').css('margin-top','-100%');
	$('.modal').css('margin-left','-100%');
	 


	$('.main_btna, .main_btn, nav li:eq(1)').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginTop: '100px',
		    marginLeft: '25%'
		 },1000);
	});

	$('.close').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle',
		 	display: 'none'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginTop: '-100%',
		     marginLeft: '-100%'
		 	
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
            $('.thanks').fadeIn();
           
          
           
           


			$('.overlay').animate({
			 	opacity: 'toggle',
			 	display: 'none'
			 }, 3000);
			 $('.modal').animate({
			    opacity: 'toggle',
			    marginLeft: '-100%',
			    marginTop: '-100%',
			    height: 'toggle'

			 	
			 },1000);
			
        });
        return false;

    });


$('.overlay').css('display', 'none');

$('.back').on('click', function(){
		  $('.thanks').fadeOut();
	});


     


	
});	