define(['jquery'], function($) {
    $('.course').hover(function() {
        $(this).children('.more').slideDown(300);
    }, function() {
        $(this).children('.more').slideUp(100);
    });
})