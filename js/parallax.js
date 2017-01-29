$(document).ready(function() {
                  $(window).bind('scroll', function(e) {
                        parallax();
                    });
});

function parallax() {
    var scrollPosition = $(window).scrollTop();
    $('#grid').css('top', (0 - (scrollPosition * .2))+'px' )
}


function scrollBanner() {
  $(document).scroll(function(){
  	var scrollPos = $(this).scrollTop();
  	$('#banner-text').css({
  	  'top' : (scrollPos/3)+'px',
  	  'opacity' : 1-(scrollPos/510)
  	});
  	$('#banner').css({
  	  'background-position' : 'center ' + (-scrollPos/2)+'px'
  	});
  });    
}
scrollBanner();
