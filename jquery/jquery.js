$(function(){

	var imgs=$(".lunbottt img");
	var btn=$(".btnqwe123");
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>=imgs.length){
				index=0;
			}
		}else if(type=="l"){
			index--;
			if(index<=-1){
				index=imgs.length-1;
			}
		}
		
		imgs.hide();
		imgs.eq(index).fadeIn();
		btn.css({background:"#ccc"});
		btn.eq(index).css({background:"#333"});
	 }
	var t=setInterval(function(){
		demo("r");
	},2000);

	$(".lunbottt").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
		demo("r");
	},2000);
	})

	$(".leftbtn123").click(function(){
       demo("l");
	})
	$(".rightbtn123").click(function(){
       demo("r");
	})

	$(".btnqwe123").hover(function(){
		var now=$(this).index();
		$(".btnqwe123").css({background:"#ccc"})
        $(this).css({background:"#333"});
        $(".lunbottt img").hide();
        $(".lunbottt img").eq(now).fadeIn();
        index=now;
	},function(){
	})



  /***************************************/
   $(".gouwu").hover(function(){
		$(this).find(".erjiqqq").show();
	},function(){
		$(this).find(".erjiqqq").hide();
	})


	/*************************************/
	/*菜单*/
	$(".zi1").hover(function(){
		$(this).find(".erjiii").show().mouseover();
	},function(){
		$(this).find(".erjiii").hide().mouseup();
	})
 

/**************************************/
$(".baizi").hover(function(){
		$(this).find(".cehua1").show();
	},function(){
		$(this).find(".cehua1").hide();
	})
 










})
