;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


}());


$(".left-slide, .right-slide, .stamp").click(function(){
	// alert();
	$(".left-slide").css("left","-40%")
	$(".right-slide").css("right","-60%")
	$(".strip-env").css("left","-40%")
	$(".stamp").css("left","-50%")
	$(".strip-welcome").css("right","-60%")
	// .stamp
	
	

	$(".team-groom").click(function(){
		$(".intro-section, .weddingtimeline").show()
		$("#cocktail").show()
		$("#mehendi").hide()
		$(".team-groom-message").show()
		$(".team-bride-message").hide()
		$(".display-selected-message").css("top","20px")
		$("#celebrate").trigger("click")

		$(".team-bride").css("pointer-events","none")
		$(".team-bride").css("opacity","0.4")

		setTimeout(()=>{
			$(".display-selected-message").css("top","-100px")
			$("#clickdown").trigger("click")
		},4000)

		
	})


	$(".team-bride").click(function(){
		$(".intro-section, .weddingtimeline").show()
		$("#cocktail").hide()
		$("#mehendi").show()
		$(".team-bride-message").show()
		$(".team-groom-message").hide()
		$(".display-selected-message").css("top","20px")
		$("#celebrate").trigger("click")

		$(".team-groom").css("pointer-events","none")
		$(".team-groom").css("opacity","0.4")

		setTimeout(()=>{
			$(".display-selected-message").css("top","-100px")
			$("#clickdown").trigger("click")
		},4000)

	})



})


$("#celebrate").click(function () {

  for (let i = 0; i < 700; i++) {

    let confetti = $("<div class='confetti'></div>");

    let colors = ["#ff4d4d", "#ffd11a", "#33cc33", "#3399ff", "#ff66cc"];

    confetti.css({
      left: Math.random() * 100 + "vw",

      // 👇 KEY FIX: random starting height (not same line)
      top: (Math.random() * -100) + "vh",

      backgroundColor: colors[Math.floor(Math.random() * colors.length)],

      width: (Math.random() * 8 + 6) + "px",
      height: (Math.random() * 8 + 6) + "px",

      animationDuration: (Math.random() * 4 + 2) + "s",

      // 👇 add delay for more randomness
      animationDelay: (Math.random() * 2) + "s"
    });

    $("#confetti-container").append(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }

});


$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1200); // smooth enough
    }
  });
