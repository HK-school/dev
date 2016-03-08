define(['jquery'], function($) {
    var h = $(window).height(); //整个屏幕的高度;

    window.onscroll = function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 500) {
            $('.go_up').show();
        } else {
            $('.go_up').hide();
        }
    }; //显示go-up

    $('.go_up').click(function(event) {
        
    });
})