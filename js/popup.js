(function($) {

	$(document).ready(function() {
		/*gallery-fancybox*/
		$(function(){
			$('.quickview').click(function () {
				$.fancybox({
				 'width': '80%',
				 'height': '100%',
				 'autoSize': true,
				 'scrolling': 'no',
				  'href' : 'popup.html',
				'type' : 'iframe'
				});
			});
		});
	});

})(jQuery);
