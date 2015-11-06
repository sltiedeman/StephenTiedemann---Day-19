$(document).ready(function(){
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

	var mainNav = $('#hello');
	var mainNavScroll = 'hello-scrolled';
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
			inserthtml+='<li><a href="javascript:void(0)">About</a</li>';
			inserthtml+='<li><a href="javascript:void(0)">Projects</a></li>';
			inserthtml+='<li><a href="javascript:void(0)">Contact</a></li>';
			inserthtml+='</ul>';
			$('.hello-scrolled').html(inserthtml);
			$('.hello-scrolled').fadeIn(2500);




		}else{
			mainNav.removeClass(mainNavScroll);
			$('#main').removeClass('margin-adjust');
			$('.hello-scrolled').fadeOut(2500);
		}
	});

	
})