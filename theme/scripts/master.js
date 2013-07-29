$(document).ready(function () {

	var $articleArr = $('.article-container > article');
	var articleArrLen = $articleArr.length;
	var articlePerDiv = 3;

	for(var i = 0; i < articleArrLen; i+=articlePerDiv) {
		$articleArr.filter(':eq('+i+'),:lt('+(i+articlePerDiv)+'):gt('+i+')').wrapAll('<div />');
	};

	$('.article-container > div').addClass('article-wrapper');


	$('.article-container .article-wrapper:first').before($('.article-container .article-wrapper:last'));

	// when user clicks the arrow navigation for sliding right
	$('#nav-prev').click(function(){
		
		// get the article width
		var article_width = $('.article-container .article-wrapper').outerWidth();

		// new left indent calculation of the article-container
		var left_indent = parseInt($('.article-container').css('left')) + article_width;

		// sliding effect using jquery animation function
		$('.article-container:not(:animated)').animate(
			
			{'left': left_indent}, 500,
			
			function() {
				// get the first list item and put it to the last item
				$('.article-container .article-wrapper:first').after($('.article-container .article-wrapper:last'));

				// get the left indent to the default -350px
				$('.article-container').css({'left': '-350px'});
			}
		);

	});

	// when user clicks the arrow navigation for sliding left
	$('#nav-next').click(function(){

		// get the article width
		var article_width = $('.article-container .article-wrapper').outerWidth();

		// new right indent calculation of the article container
		var left_indent = parseInt($('.article-container').css('left')) - article_width;

		// sliding effect using jquery animation but this time going right
		$('.article-container:not(:animated)').animate(

			{'left': left_indent}, 500,

			function() {
				$('.article-container .article-wrapper:last').before($('.article-container .article-wrapper:first'));
				$('.article-container').css({'left': '-350px'});
			}
			
		);

	});

	// $('.article-content').each(function(index, value){
	// 	// $('.article-on-hover').show();
	// 	console.log('article' + index);
	// });

	$('.article-content').hover(
	function() {
		$('.article-on-hover').show();
	}, function() {
		$('.article-on-hover').show();
	});

});