$(function(){
	$('.slider').slick({
		arrows: false,
		fade: true,
		autoplay: 3000,
		dots: true
	});
	
	$('.rest-slider').slick({
		arrows: true,
		prevArrow: $('.rest-prev'),
      	nextArrow: $('.rest-next')
	})
	$('.gallery-slider').slick({
		arrows: true,
		dots: false,
		speed: 300,
		prevArrow: $('.gallery-prev'),
      	nextArrow: $('.gallery-next'),
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
	  ]
	});

	$('.sign-in').click(function(){
		$('.menu').removeClass('active');
		$('.header').css('z-index', '1');
	});

	$('.header-content__btn').click(function(e){
		e.preventDefault();
	  if ($('.checking').hasClass('hidden')) {
	  	$('.checking').removeClass('hidden');
	  	$('.checking').addClass('showed');
	  	$('.checking').slideDown();
	  	$('.slick-dots').css('display', 'none');
	  }else {
	  	$('.checking').addClass('hidden');
	  	$('.checking').removeClass('showed');
	  	$('.checking').slideUp();
	  	$('.slick-dots').css('display', 'block');
	  }
	});
		
	$('.header-btn').on('click', function() {
		$('.menu').addClass('active');
		$('.slick-dots').css('display', 'none');

		 
	});
	$('.close-btn').on('click', function() {
		$('.menu').removeClass('active');
		
		setTimeout(function() {
	$('.slick-dots').css('display', 'block');
	}, 500);
	});
	 
    $('input[name="start-date"]').daterangepicker({
    singleDatePicker: true,
    minYear: 2020,
    maxYear: parseInt(moment().format('YYYY'),10),
    locale: {
      format: 'DD/MM/Y'
    }
	  });
    $('input[name="end-date"]').daterangepicker({
    singleDatePicker: true,
    minYear: 2020,
    maxYear: parseInt(moment().format('YYYY'),10),
     locale: {
      format: 'DD/MM/Y'
    	}
 	});
    

$(window).scroll(function(){
		$('.from-left').each(function(){
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if(elPos < topOfWindow + 700){
				$(this).addClass('fadeInLeft');
			}
		});
		$('.from-right').each(function(){
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if(elPos < topOfWindow + 700){
				$(this).addClass('fadeInRight');
			}
		});
		$('.from-top').each(function(){
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if(elPos < topOfWindow + 700){
				$(this).addClass('fadeInDown');
			}
		});
	});

	if ($(window).width()<1100) {
		$('.from-top').removeClass('animated');
	}
});

