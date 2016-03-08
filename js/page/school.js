define(['jquery'], function($) {
    $('.box1 li img').hover(function() {
        $(this).addClass('animated rotateFox');
    }, function() {
        $(this).removeClass('rotateFox').addClass('rotateFox1');
    });

    //main-show的动画加载
    var show = {
        show_1: $('#main-show-1'),
        show_2: $('#main-show-2'),
        show_3: $('#main-show-3'),
        show_4: $('#main-show-4'),
    }
    top1 = show.show_1.offset().top;
    top2 = show.show_2.offset().top;
    top3 = show.show_3.offset().top;
    top4 = show.show_4.offset().top;
    window.onscroll = function() {
        if ($(window).scrollTop() + screenH >= top1) {
            show.show_1.children('.main-show-contain').children('.left').addClass('animated fadeInLeft');
            show.show_1.children('.main-show-contain').children('.right').addClass('animated fadeInRight');
        }
        if ($(window).scrollTop() + screenH >= top2) {
            show.show_2.children('.main-show-contain').children('.left').addClass('animated fadeInLeft');
            show.show_2.children('.main-show-contain').children('.right').addClass('animated fadeInRight');
        }
        if ($(window).scrollTop() + screenH >= top3) {
            show.show_3.children('.main-show-contain').children('.left').addClass('animated fadeInLeft');
            show.show_3.children('.main-show-contain').children('.right').addClass('animated fadeInRight');
        }
        if ($(window).scrollTop() + screenH >= top4) {
            show.show_4.children('.main-show-contain').children('.left').addClass('animated fadeInLeft');
            show.show_4.children('.main-show-contain').children('.right').addClass('animated fadeInRight');
        }
    }

});