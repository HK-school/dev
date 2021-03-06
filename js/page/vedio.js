define(['jquery', 'private/list'], function($, li) {
    var str = (window.location.search);
    var strData = str.split('=');
    vedioStart(strData[1], strData[2], strData[3]);
    //选择播放的视频交互效果
    $('body').on('click', '#vr-title-ul li', function() {
        $(this).addClass('active').siblings('li').removeClass('active');
    })

    //页面播放右边播放列表的模版
    function list(tmpl) {
        var tmpl = "<li>" +
            "<div class='left'>" +
            "<img src=" + tmpl.img + "><span class='left-span'>" + tmpl.mp4 + "</span>" +
            "</div>" +
            "<div class='right'>" +
            "<p>" + tmpl.titles + "</p>" +
            "<p><img src='img/times.jpg'><span>" + tmpl.num + "</span></p>" +
            "</div>" +
            "</li>";
        return tmpl;
    }
    //页面播放右边播放列表循环
    function all_list(lists) {
        var tmpl = '';
        for (var i = 0; i < lists.length; i++) {
            if(lists[i].typer=="mp4"){
                tmpl += list(lists[i]);
            }
        }
        return tmpl;
    }


    //页面视频播放模版
    function video(src1) {
        var tmpl = "<video width='640' height='347' autoplay='autoplay' controls='controls'>" +
            "<source src=" + src1 + " type='video/mp4'>" +
            "Your browser does not support the video tag." +
            "</video>";
        return tmpl;
    }

    //刚开始加载时候的视频和列表;
    function vedioStart(num, num1, num2) {
        var Num = parseInt(num) + 1;
        var Num1 = parseInt(num2) - 1;
        var num1 = eval(num1);
        if (num2 == '') {
            $('#player').html(video(num1[num].mp4));
            $('#vr-title-ul').html(all_list(num1));
            $('.vedio-title p').html(num1[num].titles);

        } else {
            $('#player').html(video(num1[Num1][num].mp4));
            $('#vr-title-ul').html(all_list(num1[Num1]));
            $('.vedio-title p').html(num1[Num1][num].titles);
        }
        $("#vr-title-ul li:nth-child(" + Num + ")").addClass('active');

    }

    //选择播放的视频
    $('body').on('click', '#vr-title-ul li', function() {
        var src = $(this).find('.left-span').html();
        var _titles = $(this).find('.right p').html();
        $('#player').html(video(src));
        $('.vedio-title p').html(_titles);
    });

    //热门课程
    $('.hot-class ul li').click(function(event) {
        var _num = $(this).index();
        var _titles = $(this).find('.hot-class-footer p').html();
        $('#player').html(video(school[_num].mp4));
        $('#vr-title-ul').html(all_list(school));
        $("#vr-title-ul li:nth-child(" + (_num+1) + ")").addClass('active');
        $('.vedio-title p').html(_titles);
    });
});