$(document).ready(function() {
    $("nav ul li").hover(
		function() {
			$(this).addClass("nav-hover");
		},
		function() {
			$(this).removeClass("nav-hover");
		}
	)
});