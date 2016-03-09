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
                            "<img src="+ tmpl.img +">"+
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
});