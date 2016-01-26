

// anchor movement from href="#name" to id="name"
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Banner parallax
// $(function(){
//   if ($(window).width() >= 768){
//     $(function(){
//       $(window).scroll(function(){
//         var background = $('.banner');
//         var yPos = -($(window).scrollTop() / 2);
//         var coords = 'center '+ yPos + 'px';
//         background.css('background-position', coords);
//       });
//     });
//   }
//   else {
//     null
//   }
// });

// $(document).ready(function(){

//   var mainMenu = $('.hnav-menu .hs-menu-wrapper');

//   // Add a Close Icon
//   mainMenu.prepend('<i class="fa fa-times"></i>');

//   // Toggle View of Mobile Nav
//   $('.hnav, .hnav-menu .fa-times').click(function(){
//      $('body').toggleClass("mobile-nav");
//   });

//   // Set Main Menu to Have Full Height
//   function setHeight(){
//     var height = $(window).height();
//     mainMenu.height(height);
//   }
//   setHeight();
//   $(window).resize(setHeight);

// });

/***************** Waypoints ******************/

$(document).ready(function() {
    $('.active-branch').waypoint(function() {
        $('.active-branch').addClass('animated slideInleft');
    }, {
		offset: '75%'
	});
    $('.wp1').waypoint(function() {
        $('.motivate-header').addClass('animated slideInUp');
	}, {
		offset: '75%'
	});
    $('.wpwork').waypoint(function() {
        $('.motivate-header').addClass('animated fadeIn');
    }, {
		offset: '75%'
	});
    $('.wplead').waypoint(function() {
        $('.wplead').addClass('animated fadeInUp');
    }, {
    	offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInLeft');
	}, {
		offset: '90%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
	}, {
		offset: '80%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInLeft');
	}, {
		offset: '70%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '80%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInLeft');
	}, {
		offset: '70%'
	});
    $('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInUp');
	}, {
		offset: '80%'
	});
    $('.wp8').waypoint(function() {
    	$('.wp8').addClass('animated fadeInLeft');
	}, {
		offset: '70%'
	});
    $('.wp9').waypoint(function() {
    	$('.wp9').addClass('animated fadeInUp');
	}, {
		offset: '80%'
	});
    $('.wp10').waypoint(function() {
        $('.wp10').addClass('animated fadeInLeft');
	}, {
		offset: '70%'
	});
    $('.wp11').waypoint(function() {
        $('.wp11').addClass('animated fadeInUp');
	}, {
		offset: '80%'
	});
    $('.wp12').waypoint(function() {
        $('.wp12').addClass('animated fadeInLeft');
	}, {
		offset: '70%'
	});
    $('.wp13').waypoint(function() {
        $('.wp13').addClass('animated fadeInUp');
	}, {
		offset: '80%'
	});

});


/***************** Nav Transformicon ******************/


	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});
    
    

/***************** flex init ******************/
  
 //      $('.flexslider').flexslider({
 //    	animation: "slide",
 //        prevText: "",          
 //        nextText: ""
	// });
  



