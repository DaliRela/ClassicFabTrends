	$(document).ready(function () {

// get current URL path and assign 'active' class
		
	  // get current URL path and assign 'active' class

	 $(function($) {
	  let url = window.location.href;
	  $('nav ul li a').each(function() {
		if (this.href === url) {
			$(this).addClass('active');
		  $(this).parents('li').find('a.nav-link').addClass('active');
		}
	  });
	});
		

$(function() {
  var loc = window.location.href; // returns the full URL
  if(/index2.php/.test(loc)) {
    $('.nav-link.home').addClass('active');
  }
});


		
			
	}); // end document ready
