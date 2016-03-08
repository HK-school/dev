$(document).ready(function(){
//3个div的统一class = 'div'
var index =0;
//6秒轮播一次
var timer = setInterval(function(){
    index = (index == 4) ? 0 : index + 1;
	if(index==0){
		$("#one").show();
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
	 
	}
	if(index==1){
		$("#two").show();
		$("#one").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
	 
	}
	if(index==2){
		$("#three").show();
		$("#one").hide();
		$("#two").hide();
		$("#four").hide();
		$("#five").hide();
		 
	}
	if(index==3){
		$("#four").show();
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#five").hide();
		 
	}
	if(index==4){
		$("#five").show();
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		 
	}
	 
    //某个div显示，其他的隐藏
    $(".div").hide().eq(index).show()    
}, 15000);					   
});

$(document).ready(function(){
		var index=0;
		$("#next1").click(function(){
			
			 index = (index == 4) ? 0 : index + 1; 
			 
			if(index==0){
				$("#one").show();
				$("#two").hide();
				$("#three").hide();
				$("#four").hide();
				$("#five").hide();
				 
			}
			if(index==1){
				$("#two").show();
				$("#one").hide();
				$("#three").hide();
				$("#four").hide();
				$("#five").hide();
				 
			}
			if(index==2){
				$("#three").show();
				$("#one").hide();
				$("#two").hide();
				$("#four").hide();
				$("#five").hide();
				 
			}
			if(index==3){
				$("#four").show();
				$("#one").hide();
				$("#two").hide();
				$("#three").hide();
				$("#five").hide();
				 
			}
			if(index==4){
				$("#five").show();
				$("#one").hide();
				$("#two").hide();
				$("#three").hide();
				$("#four").hide();
			 
			}
			 
			$(".div").hide().eq(index).show();
		});	
		
		$("#pre1").click(function(){
			index = (index == 0) ? 4: index -1 ;
			
			if(index==0){
				$("#one").show();
				$("#two").hide();
				$("#three").hide();
				$("#four").hide();
				$("#five").hide();
				 
			}
			if(index==1){
				$("#two").show();
				$("#one").hide();
				$("#three").hide();
				$("#four").hide();
				$("#five").hide();
				 
			}
			if(index==2){
				$("#three").show();
				$("#one").hide();
				$("#two").hide();
				$("#four").hide();
				$("#five").hide();
				 
			}
			if(index==3){
				$("#four").show();
				$("#one").hide();
				$("#two").hide();
				$("#three").hide();
				$("#five").hide();
				 
			}
			if(index==4){
				$("#five").show();
				$("#one").hide();
				$("#two").hide();
				$("#three").hide();
				$("#four").hide();
				 
			}
			 
			$(".div").hide().eq(index).show();
		});
});