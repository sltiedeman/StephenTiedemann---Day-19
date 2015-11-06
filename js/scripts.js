

$(document).ready(function(){
    new WOW().init();


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


	// $('#nav-bar li a').click(function(){
	// 	$('.active').removeClass('active');
	// 	$(this).addClass('active');

	// });

	$(window).scroll(function(){
		console.log($(this).scrollTop());
		if( $(this).scrollTop() > headerHeight){
			mainNav.addClass(mainNavScroll);
			$('#main').addClass('margin-adjust');
			var inserthtml ='<ul><li class="active"><a href="javascript:void(0)">Home</a></li>';
			inserthtml+='<li><a href="#about-us">About</a</li>';
			inserthtml+='<li><a href="#">Projects</a></li>';
			inserthtml+='<li><a href="#">Contact</a></li>';
			inserthtml+='</ul>';
			$('.navbar-scrolled').html(inserthtml);
			$('.navbar-scrolled').fadeIn(1000);
		}else{
			// $('.navbar-scrolled').fadeOut(1000);
			// $(mainNav).html("");
			mainNav.removeClass(mainNavScroll);
			$('#main').removeClass('margin-adjust');
		}
	});

	insertHTML = "";
	$('#cat').click(function(){
		$('#click-for-description').fadeOut(500);
		$('.stephen-description').css('display', 'none');
		$('.dog-description').css('display', 'none');
		$('.cat-description').fadeIn(1500);
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
		$('#cat').css('opacity', "0.5");
		$('#dog').css('opacity', "0.5");
		$('#stephen').css('opacity', "1.0");

	})
	$('#dog').click(function(){
		$('#click-for-description').fadeOut(500);
		$('.cat-description').css('display', 'none');
		$('.stephen-description').css('display', 'none');
		$('.dog-description').fadeIn(1500);
		$('#cat').css('opacity', "0.5");
		$('#dog').css('opacity', "1.0");
		$('#stephen').css('opacity', "0.5");

	})

	
})