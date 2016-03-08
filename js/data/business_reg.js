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
							   
						   
});
/*
$(document).ready(function(){
		$("#li1").mouseover(function(){
				$("#reg_middle1").show();
				$("#reg_middle2").hide();
				$("#reg_middle3").hide();
				$("#li1").css("background","#ffffff");
				$("#li2").css("background","#f4f4f4");
				$("#li3").css("background","#f4f4f4");
		});
		
		$("#li2").mouseover(function(){
				$("#reg_middle2").show();
				$("#reg_middle1").hide();
				$("#reg_middle3").hide();
				$("#li2").css("background","#ffffff");
				$("#li1").css("background","#f4f4f4");
				$("#li3").css("background","#f4f4f4");
		});
		
		$("#li3").mouseover(function(){
				$("#reg_middle3").show();
				$("#reg_middle1").hide();
				$("#reg_middle2").hide();
				$("#li3").css("background","#ffffff");
				$("#li1").css("background","#f4f4f4");
				$("#li2").css("background","#f4f4f4");
		});

});
*/
$(document).ready(function(){
	$("#p").click(function(){
			$("#tiaokuan").toggle();					   
	});						   
						   
});

/*表单验证*/
$(document).ready(function(){
						   
	$("#username").blur(function(){
		var user=$("#username").val();
		if(user==""){
			$("#span1").html("亲，用户名不能为空");
			$("#span1").css("color","red");
		}else{
				if(escape(user).indexOf("%u") >= 0){
				$("#span1").html("亲，请不要输入中文!");
				$("#span1").css("color","red");
			}else{
				$("#span1").html("输入正确");
				$("#span1").css("color","green");
			}
			
		}
		 
		
	});	
	
	$("#password").blur(function(){
		var pass=$("#password").val();
		if(pass==""){
			$("#span2").html("亲，密码不能为空");
			$("#span2").css("color","red");
		}else{
			var x=pass.length;
			if(escape(pass).indexOf("%u") >= 0){
				$("#span1").html("亲，密码不能是中文!");
				$("#span1").css("color","red");
			}else{
				if(x<6||x>16){
					$("#span2").html("亲，请输入6—16位的密码");
					$("#span2").css("color","red");
				}else{
					$("#span2").html("输入正确");
					$("#span2").css("color","green");
				}	
			}
		}
		 
		
	});	
	
	$("#repassword").blur(function(){
		var repass=$("#repassword").val();
		var pass=$("#password").val();
		if(pass!=repass){
			$("#span3").html("亲，您输入的确认密码与所设密码不一致");
			$("#span3").css("color","red");
			return;
		}else if(pass==repass){
			$("#span3").html("输入正确");
			$("#span3").css("color","green");
		}
	});
	
	$("#num").blur(function(){
			var num=$("#num").val();
			var y=num.length;
			if(!isNaN(num)){
					if(y!=11){
					$("#span4").html("请输入正确的手机号码");
					$("#span4").css("color","red");
				}else{
					$("#span4").html("输入正确");
					$("#span4").css("color","green");
				}
			}else{
				$("#span4").html("手机号码只能为数字");
				$("#span4").css("color","red");
				return;
			}
			
	});
});


