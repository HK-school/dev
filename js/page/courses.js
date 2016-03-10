define(['jquery', 'private/list'], function($, li) {
    //内容部分
    function content(tmpl) {
        var tmpl = "<li data-num="+ tmpl.row +">" +
            "<p class='c-main-img'><img src=" + tmpl.img + "></p>" +
            "<div class='c-main-intro'>" +
            "<p class='p-1'>" + tmpl.title1 + "</p>" +
            "<p class='p-2'>" + tmpl.title2 + "</p>" +
            "<p class='p-3'><span>" + tmpl.num + "</span>已学习</p>" +
            "</div>" +
            "</li>"
        return tmpl;
    }
    
    //开始进来的页面展示
    var str = (window.location.search);
    var strData = str.split('?');
    $('#container-main-li').html(all_list(course[strData[1]-1]));
    //选择项部分 
    function all_list(index) {
        var tmpl = '';
        for (var i = 0; i < index.length; i++) {
            tmpl += content(index[i]);
        };
        return tmpl;
    }
    
    //加上播放的图片
    $('body').on('mouseenter','.c-main-img',function() {
        $(this).append("<img class='hci-img' src='img/ic-vedio1.png' />");
        $(this).children('.hci-img').fadeIn(500);
    });
    $('body').on('mouseleave','.c-main-img',function() {
        $(this).children('.hci-img').remove();
    })

    //页面内部跳转
    $('.num-1').click(function(event) {
        var _index = $(this).index()-1;
        console.log(_index);
        $('#container-main-li').html(all_list(course[_index]));
    });

    //播放视频的跳转
    $('body').on('click','#container-main-li li',function() {
        var num = $(this).index();
        var num1 = 'course';
        var num2 = $(this).attr('data-num');
        window.location.href='vedio.html?type='+num+'='+num1+'='+num2;
    })
})