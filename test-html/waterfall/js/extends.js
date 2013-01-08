//喜欢点击效果
$(".addLikeBtn").live('click', function(){
	var self = this;
	var oCount = $(self).children("em").eq(0);
	var content_id = parseInt($(self).attr('cid'));
	$.post("http://www2012.liba.com/waterfall/update_liker",
		   {
			   content_id:content_id
		   },
		   function(msg){ alert(msg);
						  if(msg > -1){
							  $(self).removeClass('addLikeBtn').addClass("deLikeBtn");
							  oCount.html(msg);
						  }else{
							  //alert(msg);
							  ye_msg.open(msg,3,2);
						  }
						}
		  );
});
$(".deLikeBtn").live('click', function(){
	var self = this;
	var oCount = $(self).children("em").eq(0);
	var content_id = parseInt($(self).attr('cid'));
	$.post("http://www2012.liba.com/waterfall/del_liker",
		   {
			   content_id:content_id
		   },
		   function(msg){ alert(msg);
						  if(msg > -1){
							  $(self).removeClass('deLikeBtn').addClass('addLikeBtn'); //喜欢点击效果
							  oCount.html(msg);
						  }else{
							  //alert(msg);
							  ye_msg.open(msg,3,2);
						  }
						});
});  
