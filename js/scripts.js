

$(document).ready(function(){
	 
 	//initialize wow plugin
    new WOW().init();

    //owl carousel

    $("#owl-carousel").owlCarousel({
 
      autoPlay: 2000, //Set AutoPlay to 2 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      loop: true,
      autoplay: true
 
 	});

    //interval for opening page carousel
	$('.carousel').carousel({
		interval: 5000
	})
	var counter = 0;
	if (counter==0){
		$('#name').fadeIn(1000);
	}
	setTimeout(function(){
		counter++;
	},4000);
	
	//interval for text on carousel
	setInterval(function(){
		if(counter==1){
			$('#name').fadeOut(1000);
			$('#comment').fadeIn(1000);
		}else if(counter==2){
			$('#comment').fadeOut(1000);
			$('#name').fadeIn(1000);
		}
		counter++;
		if(counter==3){
			counter=1;
		} 

	},5000);

	// Nav bar styling starts here-------------

	var mainNav = $('#navbar');
	var mainNavScroll = 'navbar-scrolled';
	var headerHeight = $('#myCarousel').height();

	
	//creates navbar that populates after window has been scrolled
	$(window).scroll(function(){
		if( $(this).scrollTop() > headerHeight){
			mainNav.addClass(mainNavScroll);
			$('#main').addClass('margin-adjust');
			var inserthtml ='<div id="nav-text"><ul><li class="active fade-text"><a href="#">Home</a></li>';
			inserthtml+='<li class="fade-text"><a href="#about-us">About</a</li>';
			inserthtml+='<li class="fade-text"><a href="#">Projects</a></li>';
			inserthtml+='<li class="fade-text"><a href="#contact-me">Contact</a></li>';
			inserthtml+='</ul></div>';
			$('.navbar-scrolled').html(inserthtml);
			$('#navbar a').css('display', 'block');

		}else{
			mainNav.removeClass(mainNavScroll);
			$('#main').removeClass('margin-adjust');
		}
	});

	//For smaller screens a hamburger menu appears
	$('.burger-menu').click(function(){
		$('.sidebar').toggleClass('active');
		$('.burger-menu').toggleClass('active');
	})

	$('.menu-nav').click(function(){
		$('.sidebar').toggleClass('active');
	})

	//Descriptions included in the about section
	insertHTML = "";
	$('#cat').click(function(){
		$('#click-for-description').fadeOut(500);
		$('.stephen-description').css('display', 'none');
		$('.dog-description').css('display', 'none');
		$('.cat-description').fadeIn(1500);
		var height = $('.cat-description').height()+40;
		$('#descriptions').css('height', height);
		$('#cat').css('opacity', "1.0");
		$('#dog').css('opacity', "0.5");
		$('#stephen').css('opacity', "0.5");

	})

	$('#stephen').click(function(){
		// $('.cat-description').fadeOut(500);
		$('#click-for-description').fadeOut(500);
		$('.cat-description').css('display', 'none');
		$('.dog-description').css('display', 'none');
		$('.stephen-description').fadeIn(1500);
		var height = $('.stephen-description').height()+40;
		$('#descriptions').css('height', height);
		$('#cat').css('opacity', "0.5");
		$('#dog').css('opacity', "0.5");
		$('#stephen').css('opacity', "1.0");

	})
	$('#dog').click(function(){
		$('#click-for-description').fadeOut(500);
		$('.cat-description').css('display', 'none');
		$('.stephen-description').css('display', 'none');
		$('.dog-description').fadeIn(1500);
		var height= $('.dog-description').height()+40;
		$('#descriptions').css('height', height);
		$('#cat').css('opacity', "0.5");
		$('#dog').css('opacity', "1.0");
		$('#stephen').css('opacity', "0.5");

	})


	//Calculates page height so that progress bars do not animate 
	//until user reaches the right spot on the page
	var mainNav2 = $('');
	var mainNavScroll2 = 'navbar-scrolled';
	var pageHeight = $('#myCarousel').height() + $('#navbar').height() + $('#main').height();
	pageHeight += ($('#portfolio-wrapper').height())/1.5;

	
	// Code for animating progress bar on scroll----------
	$(window).scroll(function(){
		if( $(this).scrollTop() > pageHeight){
			$('#bar1').css('width', '90%');
			$('#bar2').css('width', '80%');
			$('#bar3').css('width', '75%');
			$('#bar4').css('width', '60%');
			$('#bar5').css('width', '98%');
			$('#num1').numerator( {
				easing: 'linear', // easing options.
				duration: 2000, // the length of the animation.
				delimiter: '',
				rounding: 0, // decimal places.
				toValue: 109 // animate to this value.
			});
			$('#num2').numerator( {
				easing: 'linear', // easing options.
				duration: 2000, // the length of the animation.
				delimiter: '',
				rounding: 0, // decimal places.
				toValue: 38 // animate to this value.
			});	
			$('#num3').numerator( {
				easing: 'linear', // easing options.
				duration: 2000, // the length of the animation.
				delimiter: '',
				rounding: 0, // decimal places.
				toValue: 50 // animate to this value.
			});	
			$('#num4').numerator( {
				easing: 'linear', // easing options.
				duration: 2000, // the length of the animation.
				delimiter: '',
				rounding: 0, // decimal places.
				toValue: diffDays // animate to this value.
			});			
		}
	});
	
	//calculate the number of days I have been alive
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date(1979,10,05);
	var secondDate = new Date();
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

	
	//contact form validation
	//with time would like to possibly update this to use angular
	$('#contact-me-form').submit(function(){
		if(contactMeForm.name.value.length < 4){
	        contactMeForm.message.focus();
	        document.getElementById('name-wrapper').className = 'form-group has-error';
	        document.getElementById("name-error").className = 'help-block';
	        document.getElementById("name-error").innerHTML = "You need at least 4 characters";
	        return false;
	    }else{
	    	document.getElementById("name-error").innerHTML = "";
	    }

	    if(contactMeForm.message.value.length < 10){
	        contactMeForm.message.focus();
	        document.getElementById('message-wrapper').className = 'form-group has-error';
	        document.getElementById("message-error").className = 'help-block';
	        document.getElementById("message-error").innerHTML = "You need at least 10 characters";
	        return false;
	    }else{
	    	document.getElementById("message-error").innerHTML ="";
	    }
	    
	});	
})




