
    var check = false;//是否可移动  
    $(document).ready(function(){  
    	
    	  $(".app_box").each(function(){
    	  	
	var w = $(this).width();//盒子的宽度
	var iw = $(this).find(".divcontent").width();//内容容器的宽度
	var mw = parseInt(w*w/iw);//滑动图片宽度  
	var w1 = parseInt(w-mw);//图片与div的宽度差值  
	var w2 = parseInt(iw - w);//内容与边框div的宽度差值  
	
            if(iw > w){  
               $(this).find(".dot").find(".dotImg").width(mw);   
		//begin  
		//var oDiv = document.getElementById("bar"); //取bar，宽度等于w
		//var oDiv2 = document.getElementById("dot"); //取dot，宽度等于mw 
		//var oDiv3 = document.getElementById("divcontent");
		var oDiv = $(this).find(".bar"); //取bar，宽度等于w
		var oDiv2 = $(this).find(".dot"); //取dot，宽度等于mw 
		var oDiv3 = $(this).find(".divcontent");
		 console.log(parseInt($(oDiv2).css("left")));
		    
		var mouseStart={};  
		var divStart={};  
		var rightStart={};  
		var bottomStart={};  
		var xDiff = 0;
		
		$(oDiv2).mousedown(function(ev){  
		    var oEvent = ev||event;  
		    mouseStart.x = oEvent.clientX;  
		    
		   	xDiff = parseInt($(oDiv2).css("left"));//关键步骤 
		   
		    if(oDiv2.setCapture){  
			oDiv2.setCapture();  
			oDiv2.onmousemove = doDrag3;  
			oDiv2.onmouseup = stopDrag3;  
		    }else{  
			$(oDiv).bind("mousemove",doDrag3).bind("mouseup",stopDrag3);  
		    }  
		    oEvent.preventDefault();  
		});  
		
		function doDrag3(ev) {  
		    var oEvent = ev||event; //标准化事件对象  
		    var t = oEvent.clientX-mouseStart.x+xDiff;  //t为鼠标坐标-图像长度
		    if(t < 0){  
			t = 0;  
		    }else if(t >= w1 ){  
			t = w1;       //t小于移动阈值，则等于0或者=最大距离
		    }  
		    $(oDiv2).css("left",t+"px");  //图片移动距离
		    $(oDiv3).css("left",-(t*w2/w1)+"px");  //内容移动距离
		}  
		function stopDrag3(){  
		    if(oDiv2.releaseCapture){  
			oDiv2.releaseCapture();  
			oDiv2.onmousemove = null;  
			oDiv2.onmouseup = null;  
		    }else{  
			$(oDiv).unbind("mousemove",doDrag3).unbind("mouseup",stopDrag3);  
		    }  
		}  
		//end   
	    }  
        });  
    });  