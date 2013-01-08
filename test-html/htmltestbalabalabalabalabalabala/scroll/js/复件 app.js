
var check = false;//是否可移动
$(document).ready(function(){

	$(".app_box").each(function(){

		var w = $(this).width();//盒子的宽度
	    var iw = $(this).find("#divcontent").width();//内容容器的宽度
	    var mw = parseInt(w*w/iw);//滑动图片宽度
	    var w1 = parseInt(w-mw);//图片与div的宽度差值
	    var w2 = parseInt(iw - w);//内容与边框div的宽度差值
        if(iw > w){
        	$(this).find("#dot").find("img").width(mw);
			//begin
			var oDiv = $(this).find("#bar"); //取bar，宽度等于w
			var oDiv2 = $(this).find("#dot"); //取dot，宽度等于mw
			var oDiv3 = $(this).find("#divcontent"); //取dot，宽度等于mw
			var mouseStart={};
			var xDiff = 0;
			//var divStart={};
			//var rightStart={};
			//var bottomStart={};
	
			oDiv2.mousedown(function(ev){
			    var oEvent = ev||event;
			    mouseStart.x = oEvent.clientX ;
			    xDiff = parseInt(oDiv2.css("left"));
			    //divStart.x = parseInt($(oDiv2).css("left"));
			    //if(oDiv2.setCapture){
				//oDiv2.setCapture();
				//oDiv2.onmousemove = doDrag3;
			    //}else{
	
			    //}
			    //oEvent.preventDefault();
			    console.log(mouseStart.x);
				oDiv.bind("mousemove",doDrag3);
				oDiv2.bind("mouseup",stopDrag3);
			});
	
			function doDrag3(ev) {
			    var oEvent = ev||event; //标准化事件对象
			    //console.log(oEvent.clientX + ":" + mouseStart.x);
			    var t = oEvent.clientX - mouseStart.x + xDiff;  //t为鼠标坐标-图像长度
			    if(t < 0){
					t = 0;
			    }else if (t >= w1) {
					t = w1;       //t小于移动阈值，则等于0或者=最大距离
			    }
			    //console.log(d + " : " + t + "_" + xDiff);
			    $(oDiv2).css("left",t+"px");  //图片移动距离<input type="button" >
			    $(oDiv3).css("left",-(t*w2/w1)+"px");  //内容移动距离
	
			}
			function stopDrag3(){
				if(oDiv2.releaseCapture){  
				oDiv2.releaseCapture();  
				oDiv2.onmousemove = null;  
				oDiv2.onmouseup = null;  
			    }else{  
				$(oDiv).unbind("mousemove");
				$(this).unbind("mouseup"); 
			 
			}
			//end
	    }
    });
});
