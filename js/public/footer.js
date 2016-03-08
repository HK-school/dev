define(['jquery'], function($) {
    window.onscroll = function() {
        if ($(window).scrollTop() >= 500) {
            $('.go_up').show();
        } else {
            $('.go_up').hide();
        }
    }; //显示go-up

    $('.go_up').click(function(event) {
        
    });
})