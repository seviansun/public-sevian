
var check = false;//�Ƿ���ƶ�
$(document).ready(function(){

	$(".app_box").each(function(){

		var w = $(this).width();//���ӵĿ��
	    var iw = $(this).find("#divcontent").width();//���������Ŀ��
	    var mw = parseInt(w*w/iw);//����ͼƬ���
	    var w1 = parseInt(w-mw);//ͼƬ��div�Ŀ�Ȳ�ֵ
	    var w2 = parseInt(iw - w);//������߿�div�Ŀ�Ȳ�ֵ
        if(iw > w){
        	$(this).find("#dot").find("img").width(mw);
			//begin
			var oDiv = $(this).find("#bar"); //ȡbar����ȵ���w
			var oDiv2 = $(this).find("#dot"); //ȡdot����ȵ���mw
			var oDiv3 = $(this).find("#divcontent"); //ȡdot����ȵ���mw
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
			    var oEvent = ev||event; //��׼���¼�����
			    //console.log(oEvent.clientX + ":" + mouseStart.x);
			    var t = oEvent.clientX - mouseStart.x + xDiff;  //tΪ�������-ͼ�񳤶�
			    if(t < 0){
					t = 0;
			    }else if (t >= w1) {
					t = w1;       //tС���ƶ���ֵ�������0����=������
			    }
			    //console.log(d + " : " + t + "_" + xDiff);
			    $(oDiv2).css("left",t+"px");  //ͼƬ�ƶ�����<input type="button" >
			    $(oDiv3).css("left",-(t*w2/w1)+"px");  //�����ƶ�����
	
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
