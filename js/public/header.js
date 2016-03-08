define(['jquery'], function($) {
    $('.course').hover(function() {
        $(this).children('.more').fadeIn(500);
    }, function() {
        $(this).children('.more').fadeOut(500);
    });
    
})