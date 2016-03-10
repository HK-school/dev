define(['jquery'], function($) {
    $('body').on('mouseover', '.course', function() {
        $(this).children('.more').slideDown(300);
    })
    $('body').on('mouseleave', '.course', function() {
        $(this).children('.more').slideUp(100);
    })

    //加上播放的图片
    $('.hot-class-img').hover(function() {
        $(this).append("<img class='hci-img' src='img/ic-vedio.png' />");
        $(this).children('.hci-img').fadeIn(500);
    }, function() {
        $(this).children('.hci-img').remove();
    });

    //title交互
    $('.num').click(function(event) {
        $(this).addClass('actives').siblings('.num').removeClass('actives');
    });
    $('.num-1').click(function(event) {
        $(this).addClass('actives').siblings('.num-1').removeClass('actives');
    });

    //头部公共部分
    function head_htm(tmpl) {
        var tmpl = "<div class='header'>" +
            "<div class='header-box'>" +
            "<a href='#' class='logo'></a>" +
            "<div class='h-nav'>" +
            "<ul>" +
            "<li><a href='school.html'>首页</a></li>" +
            "<li class='course'>" +
            "<a href='courses.html'>课程体系</a>" +
            "<div class='more'>" +
            "<a href='courses.html?1'>管理类</a>" +
            "<a href='courses.html?2'>开拓市场</a>" +
            "<a href='courses.html?3'>企业文化类</a>" +
            "<a href='courses.html?4'>职业素养类</a>" +
            "<a href='courses.html?5'>专业技能类</a>" +
            "</div>" +
            "</li>" +
            "<li><a href='resourdownload.html?type=0'>资料下载</a></li>" +
            "<li><a href='teacher.html'>讲师风采</a></li>" +
            "<li><a href='school_about.html'>关于我们</a></li>" +
            "</ul>" +
            "</div>" +
            "<a class='login' href='#'>登录</a>" +
            "</div>" +
            "</div>";
        return tmpl;
    }
    $('body').prepend(head_htm());

    //底部公共部分
    function foot_htm(tmpl) {
        var tmpl = "<div class='footer'>" +
            "<div class='foot-con'>" +
            "<div class='f-l'>" +
            "<ul class='f-nav'>" +
            "<li>" +
            "<p>公司信息</p>" +
            "<a href='about.html'>关于我们</a>" +
            "<a href='#'>合作协议</a>" +
            "<a href='join.html#ab_c2'>人才招聘</a>" +
            "<a href='http://www.aigegou.com/aigegou-business_college-news.html'>媒体报道</a>" +
            "</li>" +
            "<li>" +
            "<p>商务合作</p>" +
            "<a href='http://www.aigegou.com/bus-login.html'>申请成为代理商</a>" +
            "<a href='http://shop.aigegou.com/agg/shop/index.php?act=show_joinin&op=index'>申请成为商户</a>" +
            "<a href='http://shop.aigegou.com/agg/shop/index.php?act=agent_login'>代理商后台</a>" +
            "<a href='http://shop.aigegou.com/agg/shop/index.php?act=seller_login'>商户后台</a>" +
            "</li>" +
            "<li>" +
            "<p>用户帮助</p>" +
            "<a href='help-center.html'>帮助中心</a>" +
            "<a href='help-problem.html'>常见问题</a>" +
            "<a href='help-advice.html'>网站反馈</a>" +
            "<a href='help-service.html'>意见反馈</a>" +
            "</li>" +
            "</ul>" +
            "<div class='cp'>Copyrights © 2015, 爱个购版权所有 苏ICP备13050915号&nbsp;&nbsp;经营许可证编号：苏B1.B2-20150240&nbsp;&nbsp;" +
            "<a href='#'>法律申明</a>&nbsp;&nbsp;<a href='#'>隐私条款</a></div>" +
            "</div>" +
            "<div class='f-r'>" +
            "<div class='f-con'>" +
            "<p class='f-ph'>客服电话: 400-627-7745&nbsp;&nbsp;招商电话: 400-992-9975</p>" +
            "<a class='f-weixin' href='javascript:;'>微信公众平台 <div class='code'><span class='arrow'></span>" +
            "<img src='http://source.aigegou.com/img/qrcode.png'></div></a>" +
            "<a class='f-weibo' href='http://weibo.com/p/1004042145421'>新浪微博</a>" +
            "<a class='f-qq' href='http://wpa.qq.com/msgrd?v=3&uin=350558111&site=qq&menu=yes'>在线客服</a>" +
            "</div>" +
            "<div class='f-downl'>" +
            "<a class='f-an' href='http://www.vcodo.com/vcd/apps/agg.apk'>安卓版下载</a>" +
            "<a class='f-ip' href='https://itunes.apple.com/us/app/ai-ge-gou/id949791096?l=zh&ls=1&mt=8'>iPhone版下载</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return tmpl;
    }
    $('body').append(foot_htm());
})