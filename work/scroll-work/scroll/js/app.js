
    var check = false;//�Ƿ���ƶ�  
    $(document).ready(function(){  
    	
    	  $(".app_box").each(function(){
    	  	
	var w = $(this).width();//���ӵĿ��
	var iw = $(this).find(".divcontent").width();//���������Ŀ��
	var mw = parseInt(w*w/iw);//����ͼƬ���  
	var w1 = parseInt(w-mw);//ͼƬ��div�Ŀ�Ȳ�ֵ  
	var w2 = parseInt(iw - w);//������߿�div�Ŀ�Ȳ�ֵ  
	
            if(iw > w){  
               $(this).find(".dot").find(".dotImg").width(mw);   
		//begin  
		//var oDiv = document.getElementById("bar"); //ȡbar����ȵ���w
		//var oDiv2 = document.getElementById("dot"); //ȡdot����ȵ���mw 
		//var oDiv3 = document.getElementById("divcontent");
		var oDiv = $(this).find(".bar"); //ȡbar����ȵ���w
		var oDiv2 = $(this).find(".dot"); //ȡdot����ȵ���mw 
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
		    
		   	xDiff = parseInt($(oDiv2).css("left"));//�ؼ����� 
		   
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
		    var oEvent = ev||event; //��׼���¼�����  
		    var t = oEvent.clientX-mouseStart.x+xDiff;  //tΪ�������-ͼ�񳤶�
		    if(t < 0){  
			t = 0;  
		    }else if(t >= w1 ){  
			t = w1;       //tС���ƶ���ֵ�������0����=������
		    }  
		    $(oDiv2).css("left",t+"px");  //ͼƬ�ƶ�����
		    $(oDiv3).css("left",-(t*w2/w1)+"px");  //�����ƶ�����
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