$(document).ready(function(){
	/*微信功能*/
  $("#b_li3").mouseover(function(){
	 
	  $("#weixin").animate({right:'0px'},'fast');
	   $("#weixin").show();
								 
  });
  $("#b_li3").mouseout(function(){
		 
											   
		$("#weixin").animate({right:'-300px'},'fast');
		$("#weixin").hide();						   

  });
	
	
	$("#q_right").mouseover(function(){
		$("#qq_wx").show();								 
	});
	$("#q_right").mouseout(function(){
		$("#qq_wx").hide();							   
	});					   
				   
});

$(document).ready(function(){
	
		$("#null").click(function(){
			alert("亲，官方论坛正在开发中，敬请期待!");
		});
	});		