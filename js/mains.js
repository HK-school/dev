require.config({
	paths: {
		jquery: 'jquery'
	},
});

require(['jquery','public/header'], function($,head) {
	screenH = $(window).height(); //������Ļ�ĸ߶�;
	screenW = $(window).height(); //������Ļ�Ŀ��;
});