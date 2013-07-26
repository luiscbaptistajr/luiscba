$(document).ready(function () {

	var $articleArr = $('.article-container > article');
	var articleArrLen = $articleArr.length;
	var articlePerDiv = 3;

	for(var i = 0; i < articleArrLen; i+=articlePerDiv) {
		$articleArr.filter(':eq('+i+'),:lt('+(i+articlePerDiv)+'):gt('+i+')').wrapAll('<div />');
	};

	$('.article-container > div').addClass('article-wrapper');

	console.log(articleArrLen);
});