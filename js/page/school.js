define(['jquery'], function($) {
    $('.box1 li img').hover(function() {
        $(this).addClass('animated rotateFox');
    }, function() {
        $(this).removeClass('rotateFox').addClass('rotateFox1');
    });
    //.box1 li img的旋转动画
    

});