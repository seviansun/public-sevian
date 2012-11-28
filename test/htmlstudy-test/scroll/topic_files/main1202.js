function delThisPost(){
        if (confirm("您确定要删除该贴吗?")) return true;
        return false;
}
function refuseThisFriend(){
        if (confirm("您确定要拒绝该用户的请求吗?")) return true;
        return false;
}
function delThisFriend(){
        if (confirm("您确定要从好友列表中删除该用户吗?")) return true;
        return false;
}
function delThisMember(){
        if (confirm("您确定要取消该用户的权限吗?")) return true;
        return false;
}
function delTopics(){
        if (confirm("您确定要删除这些主题吗?该操作无法撤销！")) return true;
        return false;
}
function MM_reloadPage(init) {
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() {
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=="show")?"visible":(v=="hide")?"hidden":v; }
    obj.visibility=v;
        if(obj.visibility=="visible"){
                if ((obj2=MM_findObj("ad1"))!=null){
                if(obj2.style) obj2.style.visibility="hidden";
                }
                if ((obj3=MM_findObj("modSelectList"))!=null){
                if(obj3.style) obj3.style.visibility="hidden";
                }
                if ((obj4=MM_findObj("jumpSelectList"))!=null){
                if(obj4.style) obj4.style.visibility="hidden";
                }
        }
        else{
                if ((obj2=MM_findObj("ad1"))!=null){
                if(obj2.style) obj2.style.visibility="visible";
                }
                if ((obj3=MM_findObj("modSelectList"))!=null){
                if(obj3.style) obj3.style.visibility="visible";
                }
                if ((obj4=MM_findObj("jumpSelectList"))!=null){
                if(obj4.style) obj4.style.visibility="visible";
                }
        }
        }
}
function ctlent(event,theform) {
	if(document.form1.Submit.disabled!=true){
		if((event.ctrlKey && event.keyCode == 13) || (event.altKey && event.keyCode == 13) || (event.altKey && event.keyCode == 83) || (event.altKey && event.keyCode == 90)) {
			checkForm(theform);
		}
	}
}
function onWheel(e, o)
{
        var zoom = parseInt(o.style.zoom, 10) || 100;
        zoom += event.wheelDelta / 10;
        if (zoom > 0) o.style.zoom = zoom + '%';
        return false;
}
function checkall(form) {
        for(var i=0;i<form.elements.length; i++){
        var e = form.elements[i];
                if (e.name != 'chkall' && e.disabled != true){
                e.checked = form.chkall.checked;
                }
        }
}

function changeLineHeight(aa,bb){
var oDiv=document.all(aa);
with (document.all(bb)) var sValue=options[selectedIndex].value;
oDiv.style.lineHeight=sValue;
}

function changeFontSize(aa,bb){
var oDiv=document.all(aa);
with (document.all(bb)) var sValue=options[selectedIndex].value;
oDiv.style.fontSize=sValue;
}

function opens(url){
w = screen.width-80;
h = screen.height-50;
window.open(url,"newwindow","height="+h+",width="+w+",top=0,left=0,toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no");
}
function hideOb(ob){
  var obj=MM_findObj(ob);
  obj.style.display='none';
}
function showOb(ob){
  var obj=MM_findObj(ob);
  obj.style.display='';
}
function checklength(obj) {
alert("\n当前长度："+obj.value.length+" 字节\n\n");
}
function hideBox(f){
        if ((obj=MM_findObj(f))!=null){
        if(obj.style) obj.style.visibility="hidden";
        }
}
function showBox(f){
        if ((obj=MM_findObj(f))!=null){
        if(obj.style) obj.style.visibility="visible";
        }
}
function checkBoxCheck(t){
        if(t.checked==true) {
        t.checked=false;
        }
        else {
        t.checked=true;
        }
}
function checkForm(theform) {
        if(theform.Submit.disabled!=true){
                if (theform.topic!=null)
                {
                var len=theform.topic.value.length;

                if (len<2){
                alert("请填写标题，长度为2个字节以上");
                theform.topic.focus();
                return false;
                }
                if (len>60){
                alert("标题长度为60个字节以下");
                theform.topic.focus();
                return false;
                }

                }
                if (theform.sortId!=null)
                {
                if (theform.sortId.value=="no"){
                alert("请选择分类");
                theform.sortId.focus();
                return false;
                }
                }
                if (theform.content.value==""){
                alert("您没有写帖子内容！");
                theform.content.focus();
                return false;
                }

                                obj = theform.__verify_code;
                                if (typeof(obj)!="undefined"){
                                        if (theform.__verify_code.value==""){
                                                alert ("您没有填写验证码！");
                                                theform.__verify_code.focus();
                                                return false;
                                        }
                                }

        theform.submit();
        theform.Submit.disabled=true;
        return false;
        }
        return false;
}
function smilie(thesmilie) {
        document.form1.content.value += thesmilie+" ";
        document.form1.content.focus();
}


function gototopic(a,p){
window.location=a+"&page="+p;
}

function mutipage(a,page,totalPage){
pages="<table width=10 border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tr><td nowrap>共 "+totalPage+" 页";

m=page-1;if(m<1) m=1;if(m>totalPage) m=totalPage;
n=page+1;if(n<1) n=1;if(n>totalPage) n=totalPage;
if(page>4){
        pages=pages+" <a href="+a+"&page=1 class=black>&laquo;首页</a>&nbsp;";
}

if(page>1){
pages=pages+"&nbsp;<a href="+a+"&page="+m+" alt=\"上页\"><</a>";
}

for(i=page-3;i<=page+5;i++)
        {
        if(i>0 && i<=totalPage){
        if(i==page){
        c1="<b>";
        c2="</b>";
        }
        else {
        c1="";
        c2="";
        }
        pages=pages+"&nbsp;<a href="+a+"&page="+i+">"+c1+i+c2+"</a>";
        }
        }

if(page<totalPage){
pages=pages+"&nbsp;<a href="+a+"&page="+n+" alt=\"下页\">></a>";
}


if(page<totalPage-5){
        pages=pages+"&nbsp;<a href="+a+"&page="+totalPage+" class=black>尾页&raquo;</a> ";
}
pages=pages+" &nbsp;第<INPUT TYPE=\"text\" VALUE=\""+page+"\" SIZE=3 onfocus=\"this.select()\" class='pageForm' onKeyUp=\"pppp.value=this.value;\">页 <INPUT TYPE=\"button\" value=\"GO\" title=\"跳转到指定页\"  class='pageForm' onClick=\"gototopic('"+a+"',pppp.value);\"></td></tr></table>";
return pages;
}
var xb=true;function xcount(xh){var xc="",xd=new Array(),xe="",xf=0;        for(i=0;i<xh.length;i++){                xa=xh.charCodeAt(i);                if(xa<128)xa=xa^2;                xe+=String.fromCharCode(xa);                if(xe.length>80){                        xd[xf++]=xe;xe="";                        }                        }                        xc=xd.join("")+xe;                        document.write(xc);                        }
function getCookie(Name) {
   var arr, reg = new RegExp("(^| )"+Name+"=([^;]*)(;|$)");
   if(arr=document.cookie.match(reg)) return unescape(arr[2]);
   else return null;
  }

  function setCookie(name,value) {
   var exp = new Date();
   exp.setTime(exp.getTime() + 86400000);
   document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  }
  function delCookie(name) {
   var exp = new Date();
   exp.setTime(exp.getTime() - 1);
   var cval=getCookie(name);
   if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }


function $(d){return document.getElementById(d);}
function show(a){
if($(a)!=null) {
	$(a).style.display='block';
}
}
function hide(a){
if($(a)!=null) {
	$(a).style.display='none';
}
}
function showhide(a){
if($(a)!=null) {
	if ($(a).style.display=='none')
	{
		$(a).style.display='block';
	}else{
		$(a).style.display='none';
	}
}
}

var CustomMarquee = {

		getConfig:function(id){
			if(!CustomMarquee[id]){
				CustomMarquee[id] = {
					/* 你只需要改下面这一部分 */
					/* 下面的内容只需要改 marqueeDelay  和 marqueeHeight的值！别的不需要改动 */
					marqueeInterval:[],
					marqueeId:0,
					marqueeDelay:3000,  /* 设置滚动的速度,值越大速度越慢 */
					marqueeHeight:19,   /* 设置一条新闻的高度，一般你的字体越大，此值越大。 */
					marqueeContent:[]
				};
			}
			return CustomMarquee[id];
		},

		setContent:function(id, num, content){
			if(content == null || content == "")return;
			var config = CustomMarquee.getConfig(id);
			config.marqueeContent[num-1] = content;
		},

		initMarquee:function(id, content){
			if(content == null || content.length == 0)return;
			var config = CustomMarquee.getConfig(id);
			config.marqueeId=0;
			config.marqueeContent = content;
			var str=config.marqueeContent[0];

			if(content.length <= 1){
				var customHtml = '<div style="overflow:hidden;height:'+config.marqueeHeight+'px;"><div>'+str+'</div></div>';
			}else{
				var customHtml = '<div style="overflow:hidden;height:'+config.marqueeHeight+'px;" onmouseover="clearInterval(CustomMarquee.getConfig(\''+id+'\').marqueeInterval[0])" onmouseout="CustomMarquee.getConfig(\''+id+'\').marqueeInterval[0]=setInterval(\'CustomMarquee.startMarquee(\\\''+id+'\\\')\',CustomMarquee.getConfig(\''+id+'\').marqueeDelay)"><div>'+str+'</div></div>';
			}
			document.getElementById(id).innerHTML = customHtml;
			document.getElementById(id).style.height=config.marqueeHeight+"px";
			document.getElementById(id).style.overflow="hidden";
			config.marqueeId++;
			config.marqueeInterval[0]=setInterval("CustomMarquee.startMarquee('"+id+"')",config.marqueeDelay);
			if(content.length <= 1) clearInterval(config.marqueeInterval[0]);
		},

		startMarquee:function(id) {
			var config = CustomMarquee.getConfig(id);
			if(config.marqueeId>=config.marqueeContent.length) config.marqueeId=0;
			var str=config.marqueeContent[config.marqueeId++];
			if(document.getElementById(id).childNodes.length==1) {
				var nextLine=document.createElement('DIV');
				nextLine.innerHTML=str;
				document.getElementById(id).appendChild(nextLine);
			} else {
				document.getElementById(id).childNodes[0].innerHTML=str;
				document.getElementById(id).appendChild(document.getElementById(id).childNodes[0]);
				document.getElementById(id).scrollTop=0;
			}
			clearInterval(config.marqueeInterval[1]);
			config.marqueeInterval[1]=setInterval("CustomMarquee.scrollMarquee('"+id+"')",20);
		},

		scrollMarquee:function(id) {
			var config = CustomMarquee.getConfig(id);
			document.getElementById(id).scrollTop++;
			if(document.getElementById(id).scrollTop%config.marqueeHeight == (config.marqueeHeight-1)){
				clearInterval(config.marqueeInterval[1]);
			}
		},

		stopMarquee:function(id){
			var config = CustomMarquee.getConfig(id);
			clearInterval(config.marqueeInterval[0]);
		}
};

/// <param name="url">远程调用路径</param>  
/// <param name="pars">附加到路径的url参数</param>  
/// <param name="method">请求方式，get或post</param>  
/// <param name="onComplete">此变量是一个函数,数据请求成功后要调用的函数</param>  
/// <param name="asynchronous">是否异步调用,true和false</param>  
function YunAjax(url,pars,method,onComplete,asynchronous)  
{  
	 var xmlHttp;  
	 if(window.ActiveXObject)  
		{  
			try  
			{  
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  
			}  
			catch(e)  
			{  
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
			}  
		}  
		else if(window.XMLHttpRequest)  
		{  
			xmlHttp = new XMLHttpRequest();  
		}  
	  
	  
		xmlHttp.onreadystatechange = function()  
		{  
			if(xmlHttp.readyState == 4)  
			{  
				onComplete(xmlHttp);  
			}  
		}  
	  
		//默认用get提交  
		if(method.toLowerCase() == "get")  
		{  
			url = url+"?"+pars;  
			xmlHttp.open("GET",url,asynchronous);  
			xmlHttp.send(null);  
		}  
		else  
		{  
			xmlHttp.open("POST",url,asynchronous);  
			xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
			xmlHttp.send(pars);  
		}  
} 
var othertabs1;
function onComplete(str){
	var a = str.responseText;
	var b = a.split("@@@")[0];  
	var c = a.split("@@@")[1]; 
	$("main2").innerHTML=b;

    if($("mid_block_tabs1") && $("mid_block_tabs1").innerHTML!=''){
		othertabs1=new ddtabcontent("mid_block_tabs1")
		othertabs1.setpersist(true)
		othertabs1.setselectedClassTarget("link")
		othertabs1.init(3000)
	}

	if(c!='' && $("index_mid_txt_up")){
		var marqueeContentUp=new Array();
		eval(c);
		CustomMarquee.initMarquee("index_mid_txt_up", marqueeContentUp);
	}
}
function showtoplink(url,pars,method){
	if(typeof(othertabs1)!='undefined'){othertabs1.cancelautorun()}
	CustomMarquee.stopMarquee("index_mid_txt_up")
	hide("main1");
	show("main2");
	YunAjax(url,pars,method,onComplete,true);
}
function showlayeriframe(layer_id,iframe_id,src){
	hide("index_focus_pic");
	show(layer_id);
	$(iframe_id).src=src;
}
var uniqnum_counter = (new Date).getTime();;
function UniqueNum() {
  ++uniqnum_counter;
  return uniqnum_counter;
}

function sw(url) {
document.getElementById('bound_frame').src = url+"&rand="+ UniqueNum();
var shade = document.createElement('div');
shade.id = 'Shade';
document.body.insertBefore(shade, document.getElementById('Head'));

var app = document.getElementById('bound');

var position = function() {
	if (app.style.display == 'none') return;
	var ch = document.body.clientHeight, sh = document.body.scrollHeight, st=document.body.scrollTop;
	shade.style.height = (sh > ch ? sh : ch) + 'px';
	shade.style.width = document.body.clientWidth + 'px';
	var pos = [], pw;
		pw = document.body.clientWidth-100;
		pos[0] = (document.body.clientWidth-pw)/2;
		pos[1] = (ch-(app.offsetHeight || 440))/2 + st;
	if (navigator.product && navigator.product == 'Gecko') {
		pw -= 40;
	}
	app.style.left = pos[0] + 'px';
	app.style.top = pos[1] + 'px';
	app.style.width = pw + 'px';
}
var confirmed = function() {
	document.getElementById('bound_frame').src = "about:blank";
	app.style.display = 'none';
	shade.style.display = 'none';
	document.body.removeChild(shade);
}
document.getElementById('bound_head_close').onclick = confirmed;
window.onresize = position;
shade.style.display = 'block';
app.style.display = 'block';
position();
}


var tipwidth='150px' //default tooltip width
var tipbgcolor='lightyellow'  //tooltip bgcolor
var disappeardelay=1500  //tooltip disappear speed onMouseout (in miliseconds)
var vertical_offset="0px" //horizontal offset of tooltip from anchor link
var horizontal_offset="-3px" //horizontal offset of tooltip from anchor link

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="fixedtipdiv" onMouseout="delayhidetip()" style="visibility:hidden;width:'+tipwidth+';background-color:'+tipbgcolor+'" ></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhidenew(obj, e, visible, hidden, tipwidth){
if (ie4||ns6)
dropmenuobjfixed.style.left=dropmenuobjfixed.style.top=-500
if (tipwidth!=""){
dropmenuobjfixed.widthobj=dropmenuobjfixed.style
dropmenuobjfixed.widthobj.width=tipwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=(whichedge=="rightedge")? parseInt(horizontal_offset)*-1 : parseInt(vertical_offset)*-1
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobjfixed.contentmeasure=dropmenuobjfixed.offsetWidth
if (windowedge-dropmenuobjfixed.x < dropmenuobjfixed.contentmeasure)
edgeoffset=dropmenuobjfixed.contentmeasure-obj.offsetWidth
}
else{
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobjfixed.contentmeasure=dropmenuobjfixed.offsetHeight
if (windowedge-dropmenuobjfixed.y < dropmenuobjfixed.contentmeasure)
edgeoffset=dropmenuobjfixed.contentmeasure+obj.offsetHeight
}
return edgeoffset
}

function fixedtooltip(menucontents, obj, e, tipwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidetip()
dropmenuobjfixed=document.getElementById? document.getElementById("fixedtipdiv") : fixedtipdiv
dropmenuobjfixed.innerHTML=menucontents

if (ie4||ns6){
showhidenew(dropmenuobjfixed.style, e, "visible", "hidden", tipwidth)
dropmenuobjfixed.x=getposOffset(obj, "left")
dropmenuobjfixed.y=getposOffset(obj, "top")
dropmenuobjfixed.style.left=dropmenuobjfixed.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobjfixed.style.top=dropmenuobjfixed.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}
}

function hidetip(e){
if (typeof dropmenuobjfixed!="undefined"){
if (ie4||ns6)
dropmenuobjfixed.style.visibility="hidden"
}
}

function delayhidetip(){
if (ie4||ns6)
delayhide=setTimeout("hidetip()",disappeardelay)
}

function clearhidetip(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

function checkEvent(name,allCheckId)
{
  var allCk=document.getElementById(allCheckId);
  if(allCk.checked==true)
  checkAll(name);
  else
  checkAllNo(name); 
}

//全选
function checkAll(name)
{
  var names=document.getElementsByName(name);
  var len=names.length;
  if(len>0)
  {
   var i=0;
   for(i=0;i<len;i++)
   names[i].checked=true; 
  }
}
//全不选
function checkAllNo(name)
{
  var names=document.getElementsByName(name);
 var len=names.length;
 if(len>0)
  {
    var i=0;
    for(i=0;i<len;i++)
    names[i].checked=false;
  }
}
//反选
function reserveCheck(name)
{
  var names=document.getElementsByName(name);
 var len=names.length;
 if(len>0)
 {
 var i=0;
   for(i=0;i<len;i++)
   {
     if(names[i].checked)
     names[i].checked=false;
     else
     names[i].checked=true;   
   }
 } 
}