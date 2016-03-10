define(['jquery','private/list'], function($,li) {
    var str = (window.location.search);
    var index = str.charAt(str.length - 1);

    //选择播放的视频交互效果
    $('body').on('click','#vr-title-ul li',function(){
    	$(this).addClass('active').siblings('li').removeClass('active');
    })
    
    //页面播放右边播放列表的模版
    function list(tmpl){
     	var tmpl = "<li>"+
                        "<div class='left'>"+
                            "<img src="+ tmpl.img +"><span class='left-span'>"+ tmpl.mp4 +"</span>"+
                        "</div>"+
                        "<div class='right'>"+
                            "<p>"+ tmpl.titles +"</p>"+
                            "<p><img src='img/times.jpg'><span>"+ tmpl.num +"</span></p>"+
                        "</div>"+
                    "</li>";
        return tmpl;
    }
    //页面播放右边播放列表循环
    function all_list(){
    	var	tmpl = '';
    	for (var i = 0; i < lists.length; i++) {
    	     tmpl += list(lists[i]);
    	};
        return tmpl;
    }
    $('#vr-title-ul').prepend(all_list()); 

    //页面视频播放模版
    function video(src1){
        var tmpl = "<video width='640' height='347' controls='controls'>"+
                        "<source src="+ src1 +" type='video/mp4'>"+
                        "Your browser does not support the video tag."+
                   "</video>";
        return tmpl;           
    }

    //刚开始加载时候的链接;
    $('#player').html(video('http://7xntr9.media1.z0.glb.clouddn.com/agg_cctv.mp4'));

    //选择播放的视频
    $('body').on('click','#vr-title-ul li',function(){
        var src = $(this).find('.left-span').html();
        $('#player').html(video(src));
    });
});