define(['jquery', 'private/list'], function($, li) {
    //内容部分
    function content(tmpl) {
        if(tmpl.typer=='mp4'){
            var tmpl = "<li data-num=" + tmpl.row + " class='videoLink'>" +
                "<p class='c-main-img video-img'><img src=" + tmpl.img + "></p>" +
                "<div class='c-main-intro'>" +
                "<p class='p-1'>" + tmpl.titles + "</p>" +
                "<p class='p-2'>" + tmpl.title2 + "</p>" +
                "<p class='p-3'><span>" + tmpl.num + "</span>已学习</p>" +
                "</div>" +
                "</li>";
        }else{
            var tmpl = "<li data-num=" + tmpl.row + ">" +
                "<p class='c-main-img'><a href='material_download.html?type=5&row=" + tmpl.row + "&id=" + tmpl.id + "'><img src=" + tmpl.img + "></p>" +
                "<div class='c-main-intro'>" +
                "<p class='p-1'>" + tmpl.titles + "</p>" +
                "<p class='p-2'>" + tmpl.title2 + "</p>" +
                "<p class='p-3'><span>" + tmpl.num + "</span>已学习</p>" +
                "</div>" +
                "</li>";
        }

        return tmpl;
    }

    //开始进来的页面展示
    var str = (window.location.search);
    var strData = str.split('?');
    if (strData == '') {
        $('#container-main-li').html(all_list(course[0]));
    } else {
        $('#container-main-li').html(all_list(course[strData[1] - 1]));
    }

    //选择项部分 
    function all_list(index) {
        var tmpl = '';
        for (var i = 0; i < index.length; i++) {
            tmpl += content(index[i]);
        };
        return tmpl;
    }

    //加上播放的图片
    $('body').on('mouseenter', '.video-img', function() {
        $(this).append("<img class='hci-img' src='img/ic-vedio1.png' />");
        $(this).children('.hci-img').fadeIn(500);
    });
    $('body').on('mouseleave', '.video-img', function() {
        $(this).children('.hci-img').remove();
    })

    //页面内部跳转
    $('.num-1').click(function(event) {
        var _index = $(this).index() - 1;
        $('#container-main-li').html(all_list(course[_index]));
    });

    //播放视频的跳转
    $('body').on('click', '.videoLink', function() {
        var num = $(this).index();
        var num1 = 'course';
        var num2 = $(this).attr('data-num');
        window.location.href = 'vedio.html?type=' + num + '=' + num1 + '=' + num2;
    })
})