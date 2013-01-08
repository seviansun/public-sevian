$(function(){
	var $toggleBtn=$(".moderator .switch");
	$toggleBtn.click(function(){
		var $this=$(this);
		var $sibling=$this.siblings("span");
		if($sibling.is(":visible")){
			$sibling.hide();
			$this.parent(".moderator").removeClass("open");
			}else{
			$sibling.show();
			$this.parent(".moderator").addClass("open");
			}
	});
	$(".gray-sina").click(function(){
		var date = new Date();
		date.setTime(date.getTime() + 62208000);
		var $this=$(this);
		var userId = 	$this.attr("data-id");

		if($this.is(".bright-sina")){
			document.cookie = "sina_access_token_icon__"+userId+"=n; path=/; domain=.liba.com; expires=" + date.toGMTString();
			$this.removeClass("bright-sina");
			$this.attr("title","点亮即可同步");
		}else{
			document.cookie = "sina_access_token_icon__"+userId+"=y; path=/; domain=.liba.com; expires=" + date.toGMTString();
			$this.addClass("bright-sina");
			$this.attr("title","取消同步");
		}
	});
	$(".gray-kaixin").click(function(){
		var $this=$(this);
		if($this.is(".bright-kaixin")){
			$this.removeClass("bright-kaixin");			
		}else{
			$this.addClass("bright-kaixin");
		}
	});
	$(".gray-qq").click(function(){
		var $this=$(this);
		if($this.is(".bright-qq")){
			$this.removeClass("bright-qq");			
		}else{
			$this.addClass("bright-qq");
		}
	});
	$(".gray-renren").click(function(){
		var $this=$(this);
		if($this.is(".bright-renren")){
			$this.removeClass("bright-renren");			
		}else{
			$this.addClass("bright-renren");
		}
	});
	//贴子详情等比缩放
	$(".note-text img").each(function(){
		var $this=$(this);											   
		if($this.width()>786){
			var imgheight=$this.height()*786/$this.width();
			$this.height(imgheight);
		}										   
	});
	//点击更多下拉
	$(".menu").hover(
		function(){
		$(this).children(".menu-bd").show();
		$(this).addClass("menu-open");
    	},
		function(){
		$(this).children(".menu-bd").hide();
		$(this).removeClass("menu-open");
    	});
	
	var i=1;
	var len=$(".promotion .promotion-bd").length;
	$(".promotion-hd").find(".change").click(function(){
		if(i<len){
			$(".promotion .promotion-bd").eq(i).show();	
			$(".promotion .promotion-bd").eq(i).siblings(".promotion-bd").hide();
			i++;
		}else{
			i=0;
			$(".promotion .promotion-bd").eq(i).show();	
			$(".promotion .promotion-bd").eq(i).siblings(".promotion-bd").hide();
			i++;
		}
	});
	//tab 切换
	$(".club-hd ul li").click(function(){
		$(this).addClass("selected")
			.siblings().removeClass("selected");
			var index=$(".club-hd ul li").index(this);
			$(".tab-club .club-bd").eq(index).show()
									.siblings().hide();
	});
	
	$(".expression-hd ul li").click(function(){
		$(this).addClass("selected")
			.siblings().removeClass("selected");
			var index=$(".expression-hd ul li").index(this);
			$(".expression-bd .expression-list").eq(index).show()
									.siblings().hide();
	});
//表情分页
	$(".expression-list .simple").find(".prev").click(function(){
	var oldLen=$(this).parents(".expression-list").find("table").length;														   
	var k=$(this).parents(".expression-list").find("table:visible").index();
		if(k>0&&k<oldLen){
		$(this).parents(".expression-list").find("table").eq(k-1).show()
									  .siblings("table").hide();
		$(this).siblings(".current").text(k);
		$(this).siblings(".next").removeClass("disable");
			if (k==1){
				$(this).addClass("disable");
			}
		}
		return false;
	});
	
	$(".expression-list .simple").find(".next").click(function(){
	var newLen=$(this).parents(".expression-list").find("table").length;
	var j=$(this).parents(".expression-list").find("table:visible").index();
		if(j<newLen-1){
		$(this).parents(".expression-list").find("table").eq(j+1).show()
									  .siblings("table").hide();
		$(this).siblings(".current").text(j+2);
			if (j==newLen-2){
				$(this).addClass("disable");
				$(this).siblings(".prev").removeClass("disable");
			}
		}
		return false;
	});
	
	var textButton="<input type='text' name='textfield' id='textfield' class='type-file-text' /><input type='button' name='button' id='button' value='上传附件' class='type-file-button' />"
	$(textButton).insertBefore("#attachment");
    $("#attachment").change(function(){
        $("#textfield").val($("#attachment").val());
    });
	$(".new-post-input").focus(function(){
		var val=$(this).val();										
		if(val==""){
			$(this).siblings(".enter-tit").hide();
		}										
	}).blur(function(){
		var val=$(this).val();	
		if(val==""){
			$(this).siblings(".enter-tit").show();
		}
	});
	
	//点击更多下拉
	//$(".search .search-hd").click(
	//	function(){
	//	$(".search-bd").show();
     //   return false;
    //	});
	//$(".search-bd").hover(function(){
//		$('body').unbind('click');
	//	$(".search-bd").show();
	//	},function(){
	//		$('body').bind('click', function(){
	//		$(".search-bd").hide();
   //  		});
	//	});
	$(".search").hover(
		function(){
		$(this).children(".search-bd").show();
		},
		function(){}
		);
	$(".J-close").click(function(){
		$(".search-bd").hide();	
		return false;
	});
	$(".topic-theme .topic-title").hover(function(){$(this).children(".hover-title").show();},function(){$(this).children(".hover-title").hide();})
	$(".all-topic").find(".page-btn").click(function(){
		var pageNum=$(".page-input").val();													 
		var url=$(".J_url").val();
		var s=url.substring(0,url.length-5);
		var skipUrl=s+pageNum+".htm";
		location.href=skipUrl;													 
	});
	
	$(".only-topic").find(".page-btn").click(function(){
		var pageNum=$(".page-input").val();													 
		var url=$(".J_url").val();
		var s=url.substring(0,url.length-1);
		var skipUrl=s+pageNum;
		location.href=skipUrl;													 
	});
	//加入收藏
	$(".J-add-topic").click(function(){
			dialogBox = new Dialog($(".add-tag").html(),{
            "width":"418px",
            "title":"选择标签",
            'modal':true,
            "closeModal":false
        });
		return false;
	});
	$(".select-tag").find(".x_a").live("click",function(){
		$(this).closest(".dialog-box").find(".close-dialog").click();
	});
	
	$(".topic-vote-bd").each(function(){
		var $this=$(this);	
		var voteNum=$(this).find(".vote-num i").text();
		var voteTotal=$(".topic-vote-ft em").text();
		var voWid=voteNum/voteTotal*200;
		if(voWid<1){
			var voteWidth=Math.ceil(voWid);
		}else{
			var voteWidth=Math.round(voWid);
		}
		$(this).find(".vote-length b").css("width",voteWidth);
	});
	
	$(".topic-vote-ft").find(".vote-btn").click(function(){
		var inputLen=$(".topic-vote input:checked")	.length;
		if (inputLen==0){
		alert("选一个再投，别激动");
		return false;
		}
	});
})
//倒计时
 function countdown(secs,surl){
    if(--secs>0){
           setTimeout("countdown("+secs+",'"+surl+"')",1000);//设定超时时间
           }
    else{
           location.href=surl;//跳转页面
           }
    }