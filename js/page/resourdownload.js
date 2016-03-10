define(['jquery','private/material_list'], function($) {
	var type=parseInt(request('type'));
	$('.num-1').eq(type).addClass('actives');
	//列表模板
	function list(tmpl){
		var tmpl = '<li>'+
				'<p class="c-main-img"><a href="material_download.html?type=' + type + '&id='+tmpl.id+'"><img src="' + tmpl.img + '"></a></p>'+
				'<div class="c-main-intro">'+
					'<span>'+tmpl.titles+'</span>'+
					'<p><a href="'+tmpl.url+'"><span>立即下载</span><img src="img/load.jpg" alt="'+tmpl.titles+'"></a></p>'+
				'</div>'+
			'</li>';
		return tmpl;
	}
	//渲染模板
	function all_list(){
		var	tmpl = '';
		for (var i = 0; i < m_list[type].list.length; i++) {
			tmpl += list(m_list[type].list[i]);
		}
		return tmpl;
	}
	$('#materialList').prepend(all_list());

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