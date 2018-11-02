$(document).ready(function() {
    $("nav ul a li").hover(
		function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
		}
	)
});