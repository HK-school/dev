define(['jquery'], function($) {
    var screenH = $(window).height();
    var screenW = $(window).width();
    //报名页面
    (function() {
        var x = 0;
        var y = 0;
        var sH = screenH;
        var sW = screenW;

        function loop() {
            sH - 192 <= x ? x1() : x2();
            sW - 280 <= y ? y1() : y2();
            var dom = $('.online-school');
            dom.css({
                'top': x,
                'right': y
            });
            function x1(){
                x--; sH = 192
            }
            function x2(){
               x++; sH = screenH 
            }
            function y1(){
                y--; sW = 280
            }
            function y2(){
               y++; sW = screenW 
            }
            requestAnimationFrame(loop);
        }
        loop();
    })();
    
    //关闭报名页面
    $('.online-school span').click(function(event) {
        $('.online-school').hide(500);
    });

    (function() {
        var time = 1;
        var set1 = 0;
        var set = function() {
            set1 = setInterval(function() {
                time == 1 ? time = 2 : time = 1;
                setting(time);
            }, 3000);
        }
        set();
        $('#banner-ul li').click(function(event) {
            clearInterval(set1);
            var _num = $(this).index() + 1;
            _num == 1 ? time = 2 : time = 1;
            setting(_num);
            set();
        });

        function setting(num) {
            $('.banner img:nth-child(' + num + ')').show().addClass('fadeIn animated').siblings('img').hide();
            $('#banner-ul li:nth-child(' + num + ')').addClass('li-on').siblings('li').removeClass('li-on');
            setTimeout(function() {
                $('.banner img').removeClass('animated fadeIn');
            }, 1500);
        }
    })();

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
        };
        //go-up
        if ($(window).scrollTop() >= 500) {
            $('.go_up').show();
        } else {
            $('.go_up').hide();
        }
    }

    //播放视频的跳转
    $('.hot-class ul li').click(function() {
        var num = $(this).index();
        var num1 = 'school';
        window.location.href = 'vedio.html?type=' + num + '=' + num1 + '=' + '';
    })
});