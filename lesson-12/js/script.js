$(document).ready(function($) {
	 $('.modal').css('margin-top','-100%');
	 


	$('.main_btna, .main_btn, nav li:eq(1)').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginTop: '100px'
		 },1000);
	});

	$('.close').on('click', function(){
		 $('.overlay').animate({
		 	opacity: 'toggle',
		 	display: 'none'
		 }, 1000);
		 $('.modal').animate({
		    opacity: 'toggle',
		    marginTop: '-100%'
		 	
		 },1000);
	});

});	