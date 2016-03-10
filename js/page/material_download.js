define(['jquery','private/material_list'], function($) {
	var type=parseInt(request('type'));
	var id=parseInt(request('id')) - 1;
	
	$('.num-1').eq(type).addClass('actives');
	$('.material-img').html('<img src="'+ m_list[type].list[id].img +'">');

	var html='<a href="'+ m_list[type].list[id].url +'">立即下载</a>'
		+   '<div class="info">'
		+   '<h2><span class="look">269</span><span class="down">455</span></h2>'
		+   '<p><span>内容</span>'+ m_list[type].list[id].titles +'</p>'
		+   '<p><span>格式</span>'+ m_list[type].list[id].type +'</p>'
		+   '<p><span>体积</span>'+ m_list[type].list[id].cubage +'</p>'
		+   '<p><span>上传时间</span>2016-03-10 16:30</p>'
		+   '</div>';
	$('.material-info').html(html);
	function request(paras) {
		var url = location.href;
		url = decodeURI(url);
		var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
		var paraObj = {};
		for (var i = 0; j = paraString[i]; i++) {
			paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
		}
		var returnValue = paraObj[paras.toLowerCase()];
		if (typeof(returnValue) == "undefined") {
			return "";
		} else {
			return returnValue;
		}
	}
});