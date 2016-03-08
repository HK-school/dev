// JavaScript Document

$(function(){
	$('.mh-bg,.m-hbtn').click(function(e){
		$('.mh-nav').stop().animate({left:'-80%'},200);
		$('.mh-bg').animate({opacity:'0'},200,function(){
				$(this).hide();
			});
		e.stopPropagation();	
	})
	$('.hbtn').click(function(){
		if(parseInt($(".mh-nav").css("left")) == 0){
			$('.mh-nav').stop().animate({left:'-80%'},200);
			$('.mh-bg').animate({opacity:'0'},200,function(){
				$(this).hide();
			});		
		}else{
			$('.mh-nav').stop().animate({left:'0'},300);
			$('.m-hbtn').show();
			$('.mh-bg').show().animate({opacity:'0.6'},200);
		}
	})
	$('.hnav a').click(function(){
		$(this).addClass('current').parent('li').siblings().children('a').removeClass('current');	
	})
	
	$('.btnFEDiv ul li').click(function(){
		$(this).children('a').addClass('current').parent('li').siblings().children('a').removeClass('current');	
	})
	
	/*$('.btnFE').addClass('th');
	$('.btnFE,.b-1,.header').click(function(e){	
		if(e.target==$('.btnFE')[0]){
			$('.btnFEDiv').slideToggle(100,function(){
				if($('.btnFEDiv').is(':visible')){
					$('.btnFE').removeClass('th');
					$('.btnFE').addClass('bg');
				}else{
					$('.btnFE').addClass('th');
					$('.btnFE').removeClass('bg');
				}		
			});
		}
		else{
			$('.btnFEDiv').slideUp();
			$('.btnFE').addClass('th');
			$('.btnFE').removeClass('bg');	
		}
		
		e.stopPropagation();	
	})*/
	
	
	// if(document.body.clientWidth > 623){
	// 		$('.BVideo').mouseenter(function(e){
	// 		$(this).stop().animate({margin:"-400px 0 0 -206px"},500,function(){				
	// 			tanchu();
	// 		});
	// 		$('.BVideo a').stop().animate({opacity:'1'},500);
	// 	}).mouseleave(function(e){
	// 		$(this).stop().animate({margin:"-174px 0 0 -206px"},500);
	// 		$('.BVideo a').stop().animate({opacity:'0'},500);
	// 	})		
	// }else{
	// 	$('.BVideo').mouseenter(function(e){
	// 		$(this).stop().animate({margin:"-326px 0 0 -150px"},500,function(){				
	// 			tanchu();
	// 		});
	// 		$('.BVideo a').stop().animate({opacity:'1'},500);
	// 	}).mouseleave(function(e){
	// 		$(this).stop().animate({margin:"-148px 0 0 -150px"},500);
	// 		$('.BVideo a').stop().animate({opacity:'0'},500);
	// 	})
	// 	$('.BVideo').click(function(e){
	// 		if(parseInt($(".BVideo").css("marginTop")) == -148){
	// 			$(this).stop().animate({margin:"-326px 0 0 -150px"},500,function(){				
	// 				tanchu();
	// 			});
	// 			$('.BVideo a').stop().animate({opacity:'1'},500);
	// 		}else{
	// 			$(this).stop().animate({margin:"-148px 0 0 -150px"},500);
	// 			$('.BVideo a').stop().animate({opacity:'0'},500);
	// 		}
	// 	})	
	// }
	// function tanchu(){
	// 	$('.BVideo a').click(function(e){
	// 		if(document.body.clientWidth > 623){
	// 			$('.BVideo-bg').show();
	// 			$('.BVideo-div').show();
	// 		}
	// 		var x=document.getElementById("video");
	// 		if (navigator.userAgent.indexOf('Firefox')<0){
	// 		x.play();
	// 	}				
	// 	})	
	// }
	$('.video1').click(function(){
		if(document.body.clientWidth > 623){
				$('.BVideo-bg').show();
				$('.BVideo-div1').show();
			}
		var x=document.getElementById("video1");
		x.play();
	});
	$('.video2').click(function(){
		if(document.body.clientWidth > 623){
				$('.BVideo-bg').show();
				$('.BVideo-div2').show();
			}
		var x=document.getElementById("video2");
		x.play();
	});
	$('.BVideo-bg').click(function(e){
		$('.BVideo-bg').hide();
		$('.BVideo-div1').hide();
		$('.BVideo-div2').hide();
		var x1=document.getElementById("video1");
		var x2=document.getElementById("video2");
		x1.pause();
		x2.pause();
		e.stopPropagation();			
	});	
	$('.map-btn,.content,.footer').click(function(e){	
		if(e.target==$('.map-btn')[0]){
			$('.map-box').toggle();		
		}
		else{
			$('.map-box').hide();	
		}
		e.stopPropagation();	
	});
	$('.f-weixin,.footer').click(function(e){	
		if(e.target==$('.f-weixin')[0]){
			$('.f-weixin .code').toggle();		
		}
		else{
			$('.f-weixin .code').hide();	
		}
		e.stopPropagation();	
	});
	$('.f-nav p').click(function(){
      var f_list=$(this).next("div");
      if(f_list.css("display") == "none"){
        $('.f-nav p').removeClass("on");
        $('.f-nav div').hide();
        f_list.show();
        $(this).addClass("on");
      }else{
        f_list.hide();
        $(this).removeClass("on");
      }
    }); 
	$('.at_box img').hover(function(){
		$(this).parent().next('.title').stop().animate({bottom:'0'},200);
	},function(){
		$(this).parent().next('.title').stop().animate({bottom:'-60px'},200);
	})
	$('.pc_t a').hover(function(){
		$(this).next('.js').stop().animate({opacity:'1'},500);
	},function(){
		$('.pc_t .js').stop().animate({opacity:'0'},500);
	});
	if(document.body.clientWidth < 640){
		$('.pc_t a').click(function(){
			$(".p4_jsbg").show();
			$(".p4_js").show();
	        $(".p4_js").html($(this).attr('msg'));
	    })
	}
	$('.p4_jsbg').click(function(e){
		$('.p4_jsbg').hide();
		$('.p4_js').hide();
		e.stopPropagation();			
	})
	$('.ab_c4 ul').click(function(){
      var f_list=$(this).next("div");
      if(f_list.css("display") == "none"){
        $('.join').slideUp(200)
        f_list.slideDown(200);
      }else{
        f_list.slideUp(200);
      }
    }) 

})
function changMenu(thisID,obj_name){
  	var cm=['z_01','z_02'];
  	for(var i=0;i<=cm.length;i++){
  		$("#"+cm[i]).attr('class','');
  	}
 	$(thisID).addClass('on');
 	$("."+obj_name).siblings('div').css('display','none');
  	$("."+obj_name).css('display','block');
}
function changMenu2(thisID,obj_name){
	var cm=['n_01','n_02','n_03','n_04'];
	for(var i=0;i<=cm.length;i++){
		$("#"+cm[i]).removeClass("on");
	}
	$(thisID).addClass('on');
	$("."+obj_name).siblings('div').css('display','none');
	$("."+obj_name).css('display','block');
}
function changMenu3(thisID,obj_name){
	var cm=['n_01','n_02','n_03'];
	for(var i=0;i<=cm.length;i++){
		$("#"+cm[i]).removeClass("on");
	}
	$(thisID).addClass('on');
	$("."+obj_name).siblings('div').css('display','none');
	$("."+obj_name).css('display','block');
}
function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 20;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));
 
   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
   
   
}
window.onscroll= function(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop > 340) {
		$(".go_up").show().stop().animate({opacity:'1'},400);
	}else if(scrollTop < 340){
		$(".go_up").stop().animate({opacity:'0'},100,function(){
			$(this).hide();
		});
	}
}
$(document).ready(function(e) {
    resizeWindow();
	$(window).resize(function(){
		resizeWindow();
	});
	
	/*$(".firstMenuli").mouseover(function(){
		
		var secMenuUlHeight= $(this).find(".secMenuUl span").length*$(".secMenuUl span").height();
		$(this).find(".secMenuUl").animate({height:secMenuUlHeight},500);
		
	})
	
	$(".firstMenuli").mouseout(function(){
		
		$(this).find(".secMenuUl").animate({height:0},500);
		 
	})*/
	$(".firstMenuli").mouseenter(function(){
		$(this).children(".secMenuUl").show();
		var num=$(this).find(".secMenuUl span").length;
		$(this).height(28+35*num);
	 	 $(this).find(".secMenuUl").height(num*35);
		$(".secMenuUl").mouseleave(function(){
			$(this).height(0);
			$(this).hide();		
		});
		$(".firstMenuli").mouseleave(function(){
			$(this).find(".secMenuUl").hide();
			$(this).height(28);
			 
		});	
	});
	
	
	
});


function resizeWindow(){
	//如果用户屏幕大于768小于1200
   if($(window).width()>768&&$(window).width()<1200){
	    
	   $(".hcon").css("width","1000px");
	   $(".hcon").css("min-width","1000px");
   }
}