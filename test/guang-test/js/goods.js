jQuery(".nineGird").bind("mouseover mouseout",function(event){
       			var $this = $(this); 
				if(event.type == "mouseover"){
					$this.css({
						"color":"#666",
						"box-shadow":"0 1px 5px rgba(35,25,25,0.5)",
						"-moz-box-shadow":"0 1px 5px rgba(35,25,25,0.5)",
						"-webkit-box-shadow":"0 1px 5px rgba(35,25,25,0.5)"
					});
					if($this.find(".ilike-m")[0]){
						$this.find(".ilike-m").show();
					}else if($this.find(".ilike-del")[0]){
						$this.find(".ilike-del").show();
					}
				}else{
					$this.css({
						"color":"#999",
						"box-shadow":"0 1px 3px rgba(34,25,25,0.2)",
						"-moz-box-shadow":"0 1px 3px rgba(34,25,25,0.2)",
						"-webkit-box-shadow":"0 1px 3px rgba(34,25,25,0.2)"
					});
					if($this.find(".ilike-m")[0]){
						$this.find(".ilike-m").hide();
					}else if($this.find(".ilike-del")[0]){
						$this.find(".ilike-del").hide();
					}
				}
});
jQuery(function() {	
	$(".scrollable").scrollable({size:6,circular:false});
	$('.prev').bind('click',function(){
		$('.next').css('opacity','1').css('cursor','pointer');
		var psObj=$('#scene-start');
		var self=$(this);
		var start=parseInt($('#scene-start').text());
		var end=parseInt($('#scene-end').text());
		start--;
		if(start=1){
			self.css('opacity','0.3').css('cursor','default');
			$('.next').css('opacity','1').css('cursor','pointer');
			psObj.text('1');
			return;
		}
		psObj.text(''+start);
		self.css('opacity','1').css('cursor','pointer');
	
	});
	$('.next').bind('click',function(){
		var psObj=$('#scene-start');
		var self=$(this);
		var start=parseInt($('#scene-start').text());
		var end=parseInt($('#scene-end').text());
		start++;
		if(start=end){
			self.css('opacity','0.3').css('cursor','default');
			$('.prev').css('opacity','1').css('cursor','pointer');
			psObj.text(''+end);
			return;
		}
		psObj.text(''+start);
		self.css('opacity','1').css('cursor','pointer');
		
	});
	function addToFav(o){
			var url = "http://guang.com";
			var title = "逛，发现喜欢";		
			if (window.sidebar) { // Mozilla Firefox Bookmark
					window.sidebar.addPanel(title, url,"");
			} else if( window.external&&document.all) { // IE Favorite
				window.external.AddFavorite( url, title);
			} else if(window.opera) { // Opera 7+
					return false; // do nothing
			} else { 
					jQuery.guang.tip.conf.tipClass = "tipmodal tipmodal-error2";
					jQuery.guang.tip.show($(o),"您的浏览器不支持自动加收藏，请按 ctrl+d 加入收藏。");
			}
	}
	$(window).bind("scroll",function(){
		var showguide = function(c){
			if(c.getStorage("showguide")!=="no"&&GUANGER.userId.length==0){
				if($(".guide").length!==1){
					var HTML = '<div class="guide">'
								+'<div class="guide_boby">'
									+'<p>如果你喜欢逛，就把Guang.com加入收藏夹吧，或者分享给你的朋友~</p>'
									+'<div class="guide_add">'
										+'<div class="favorites" id="J_Favorites"><a href="javascript:void(0);">加入收藏夹</a></div>'
										+'<div class="weibo"><a href="javascript:void((function(){var title=encodeURIComponent(\'推荐个不错的网站，能找到好多喜欢的东西。逛：http://guang.com\');var link=encodeURIComponent(window.location.href);var pic=\'http://static.guang.com/img/index/topic/banner-index.jpg\';window.open(\'http://service.t.sina.com.cn/share/share.php?appkey=2610725727&title=\'+title+\'&pic=\'+pic);})())" alt="分享到新浪微博">分享到新浪微博</a><a style="margin-left:6px; width:130px" href="javascript:void((function(){var title=encodeURIComponent(\'推荐个不错的网站，能找到好多喜欢的东西。逛：http://guang.com\');var link=encodeURIComponent(window.location.href);var pic=\'http://static.guang.com/img/index/topic/banner-index.jpg\';window.open(\'http://v.t.qq.com/share/share.php?appkey=db0de5e94b314972b3e7efd23fa7ce1e&title=\'+title+\'&pic=\'+pic+\'&site=\'+link);})())" alt="分享到腾讯微博"></a></div>'
									+'</div>'
									+'<div class="del" id="J_CloseGuide">'
										+'<a href="javascript:void(0);">关闭引导</a>'
									+'</div>'
								+'</div>'
							  +'</div>';
					$("body").append(HTML);
					$("#J_Favorites").click(function(){
						c.setStorage("showguide","no");
						addToFav(this);
					})
					$("#J_CloseGuide").click(function(){
						c.setStorage("showguide","no");
						$(".guide").hide();
					})
				}
				if(jQuery.guang.util.isIE6()){
					$(".guide").css({
						position:"absolute",
						top:$(window).scrollTop()+$(window).height()-90
					})
					if($(window).scrollTop()>800){
						$(".guide").show();
					}
				}else{
					if($(window).scrollTop()>800){
						$(".guide").show().animate({
							bottom:0
						},500);
					}
				}
			}
		}
		//本地存储调用
		var callStorage = function(fun){
			if(LocalStorage.client == null){
				new LocalStorage.Client(fun);
			}else{
				fun(LocalStorage.client);
			}
		}
		callStorage(showguide);
	})
});

$(function() {		
	//$(".ilike-m").css("display","none");
	/* 喜欢 */
	var timeout = null;
	var enable = true;
	$(".ilike-m").live("click",function(){
		/*
		if($.guang.dialog.isLogin()){
			var $this = $(this);
			var commentType = $this.attr("data-type");
			var productId = $this.attr("data-proid");
			var $likeCount = $this.closest(".goods").find(".like-count:first");
			if($("#cmtDialog")[0]){
				$("#cmtDialog").fadeOut();
			}
			$.guang.judgement.repeatIdentityClk = function(o, commentType){
				$.guang.tip.conf.tipClass = "tipmodal tipmodal-general";
				$.guang.tip.show($this,">_< 你已经喜欢过了哦~");
			}
			$.guang.judgement.identityCallback = function(o, commentType){
				$likeCount.text(parseInt($likeCount.text()) + 1);
				$.guang.dialog.lkComment($this);
			}
			$.guang.judgement.identityOper($this, productId, commentType);
		}
		*/
		if($.guang.dialog.isLogin()){
			if(enable){
				enable = false
			}else{
				return false
			}
			var $this = $(this);
			var commentType = $this.attr("data-type");
			var productId = $this.attr("data-proid");
			var $likeCount = $this.closest(".goods").find(".like-count:first");
			var likeTimeout = null;
			/*
			if($("#cmtDialog")[0]&&$("#cmtDialog .speakmore").eq(0).attr("data-type")=="3"){
					if(timeout!=null){
						clearTimeout(timeout)
					}
					$("#cmtDialog").show();
					timeout = setTimeout(function(){$("#cmtDialog").fadeOut();},3000);	
					return "liked";
			}
			*/
			$.guang.judgement.repeatIdentityClk = function(o, commentType){
				enable = true
				if($("#cmtDialog")[0]){
					clearTimeout(likeTimeout);
					$("#cmtDialog").remove();
				}
				var html = "";
				html += '<div id="cmtDialog" class="c-dialog" style="width:180px">';
				html += '<p class="title clearfix"><a class="cmtclose fr" href="javascript:;">x</a>&gt;_&lt;喜欢过了~</p>';
				html += '<a class="sbl-btn speakmore comment-tag" data-type="3" data-proid="'+ productId +'">再说两句</a>'
				html += '</div>';
				$("body").append(html);
				$(".cmt-txa").focus(function(){	
					var T = $("#cmtDialog").offset().top;			
					$("#cmtDialog").css({
						top: T - 50 + "px",
						height: 104
					});
					$(this).height(50);	
					$(".cmt-txa").unbind("focus");
				});
				var position = $.guang.util.getPosition(o).topMid();
				var W = $("#cmtDialog").outerWidth(),
				H = $("#cmtDialog").outerHeight();
				$("#cmtDialog").css({
					left: position.x - W/2 + "px",
					top: position.y - H - 12 + "px"
				}).fadeIn();	
				likeTimeout = setTimeout(function(){$("#cmtDialog").fadeOut().remove();},3000)	
				$(".comment-tag").unbind();
				$(".comment-tag").bind("click",function(){
					$.guang.dialog.commentAndAddTagsSubmitOkClk = function(cmtContent,callbackPramToUI){
					}
					var snsProName = $this.prev().attr("title");;
					var snsImg = $this.prev().find("img").attr("src");
					var snsProUrl = $this.prev().attr("href").indexOf("http")>=0?$this.prev().attr("href"):("http://"+window.location.host+$this.prev().attr("href"));
					var from = "fromNonDetail";
					$this.attr("data-type","3");
					$.guang.dialog.commentAndAddTags($this,"","",snsProName,snsImg,snsProUrl,[],from);
				})	
			}
			$.guang.judgement.identityCallback = function(o, commentType){
				enable = true
				$likeCount.text(parseInt($likeCount.text()) + 1);
				var html = "";
				html += '<div id="cmtDialog" class="c-dialog">';
				html += '<p class="title clearfix"><a class="cmtclose fr" href="javascript:;">x</a>喜欢了~</p>';
				html += '<a class="sbl-btn speakmore comment-tag" data-type="0" data-proid="'+ productId +'">再说两句</a>'
				html += '</div>';
				$("body").append(html);
				$(".cmt-txa").focus(function(){	
					var T = $("#cmtDialog").offset().top;			
					$("#cmtDialog").css({
						top: T - 50 + "px",
						height: 104
					});
					$(this).height(50);	
					$(".cmt-txa").unbind("focus");
				});
				var position = $.guang.util.getPosition(o).topMid();
				var W = $("#cmtDialog").outerWidth(),
				H = $("#cmtDialog").outerHeight();
				$("#cmtDialog").css({
					left: position.x - W/2 + "px",
					top: position.y - H - 12 + "px"
				}).fadeIn();	
				likeTimeout = setTimeout(function(){$("#cmtDialog").fadeOut().remove();},3000)	
				$(".comment-tag").bind("click",function(){
					$.guang.dialog.commentAndAddTagsSubmitOkClk = function(cmtContent,callbackPramToUI){
					}
					var snsProName = $this.prev().attr("title");;
					var snsImg = $this.prev().find("img").attr("src");
					var snsProUrl = $this.prev().attr("href").indexOf("http")>=0?$this.prev().attr("href"):("http://"+window.location.host+$this.prev().attr("href"));
					var from = "fromNonDetail";
					$.guang.dialog.commentAndAddTags($this,"","",snsProName,snsImg,snsProUrl,[],from);
				})	
			}
			$.guang.judgement.identityOper($this, productId, commentType);	
		}
	});
	//分页
	
	var $page = $("#J_Pagination");
	var initPagination = function() {
		var num_entries = goodsPage.sumGoodsNum;//商品总数
		// 创建分页
		$page.pagination(num_entries, {
		    num_edge_entries: 2,//两侧显示的首尾分页的条目数
		    num_display_entries: 4,//连续分页主体部分显示的分页条目数
		    callback: pageselectCallback,//回调函数
		    items_per_page:100,
		    current_page:(parseInt(goodsPage.curPageNum)-1),
		    isJump:true
		});
	 }();
	 
	function pageselectCallback(page_index, jq){
		var pageType = goodsPage.pageType;
		var pageA = $page.find("a");
		var prevA = $page.find("a.prev");
		var nextA = $page.find("a.next");
		var pageUrl = goodsPage.pageUrl;
		pageA.each(function(){
			$(this).attr("href",goodsPage.pagePath + pageUrl + "?p=" + $(this).text());
		});
		if(prevA[0]){
			prevA.attr("href",goodsPage.pagePath + pageUrl + "?p=" + (parseInt(goodsPage.curPageNum) - 1));
		}
		if(nextA[0]){
			nextA.attr("href",goodsPage.pagePath + pageUrl + "?p=" + (parseInt(goodsPage.curPageNum) + 1));
		}
		pageA.live("click",function(){
			window.location.href = $(this).attr("href");
		});
		return false;
	}	
	
});