require.config({
    paths: {
        jquery: 'jquery'
    },
});

require(['jquery','public/header','page/' + APP_NAME], function($,head,foot,app) {
    screenH = $(window).height(); //整个屏幕的高度;
    screenW = $(window).height(); //整个屏幕的宽度;
});