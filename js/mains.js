require.config({
	paths: {
		jquery: 'jquery'
	},
});

require(['jquery','public/header'], function($,head) {
	screenH = $(window).height(); //整个屏幕的高度;
	screenW = $(window).height(); //整个屏幕的宽度;
});