/*
 * FlashCanvas Pro
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2011 Shinya Muramatsu
 */
window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(k,g,s){function H(a){this.code=a;this.message=Y[a]}function t(a,b,c){if(!c)for(var c=[],d=0,e=a*b*4;d<e;++d)c[d]=0;this.width=a;this.height=b;this.data=c}function Z(a){this.width=a}function I(a){this.id=a.I++}function u(a){this.O=a;this.id=a.I++}function y(a,b){this.canvas=a;this.w=b;this.e=b.id.slice(8);this.J();this.I=0;this.j=this.H="";this.c=0}function z(){if(g.readyState==="complete"){g.detachEvent(J,z);for(var a=g.getElementsByTagName(p),
b=0,c=a.length;b<c;++b)A.initElement(a[b])}}function K(){var a=event.srcElement,b=a.parentNode;a.blur();b.focus()}function B(){event.button&2&&event.srcElement.parentNode.setCapture()}function C(){event.button&2&&event.srcElement.parentNode.releaseCapture()}function L(){var a=event.propertyName;if(a==="width"||a==="height"){var b=event.srcElement,c=b[a],d=parseInt(c,10);if(isNaN(d)||d<0)d=a==="width"?300:150;c===d?(b.style[a]=d+"px",b.getContext("2d").P(b.width,b.height)):b[a]=d}}function M(){k.detachEvent(N,
M);for(var a in l){var b=l[a],c=b.firstChild,d;for(d in c)typeof c[d]==="function"&&(c[d]=i);for(d in b)typeof b[d]==="function"&&(b[d]=i);c.detachEvent(O,K);c.detachEvent(D,B);b.detachEvent(E,C);b.detachEvent(P,L)}k[Q]=i;k[R]=i;k[S]=i;k[F]=i;k[T]=i}function $(){var a=g.getElementsByTagName("script"),a=a[a.length-1];return g.documentMode>=8?a.src:a.getAttribute("src",4)}function aa(a){return a.toLowerCase()}function h(a){throw new H(a);}function U(a){var b=parseInt(a.width,10),c=parseInt(a.height,
10);if(isNaN(b)||b<0)b=300;if(isNaN(c)||c<0)c=150;a.width=b;a.height=c}var i=null,p="canvas",Q="CanvasRenderingContext2D",R="CanvasGradient",S="CanvasPattern",F="FlashCanvas",T="G_vmlCanvasManager",O="onfocus",D="onmousedown",E="onmouseup",P="onpropertychange",J="onreadystatechange",N="onunload",m;try{m=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g,".")}catch(ca){m=0}var n=k[F+"Options"]||{},V=n.swfPath||$().replace(/[^\/]+$/,""),r;r=
parseInt(m)>9?V+"flash10canvas.swf":V+"flash9canvas.swf";var v={},w={},W={},G={},q={},X={},l={},x={},j={C:"turbo"in n?n.turbo:1,B:n.delay||0,M:n.disableContextMenu||0,N:n.imageCacheSize||100,D:n.usePolicyFile||0};if(m==="10.1.53.64")j.C=0,j.B=30;y.prototype={save:function(){this.f(15);this.L.push([this.l,this.m,this.v,this.k,this.p,this.n,this.o,this.q,this.t,this.u,this.r,this.s,this.j,this.z,this.A]);this.a.push("B")},restore:function(){var a=this.L;if(a.length)a=a.pop(),this.globalAlpha=a[0],this.globalCompositeOperation=
a[1],this.strokeStyle=a[2],this.fillStyle=a[3],this.lineWidth=a[4],this.lineCap=a[5],this.lineJoin=a[6],this.miterLimit=a[7],this.shadowOffsetX=a[8],this.shadowOffsetY=a[9],this.shadowBlur=a[10],this.shadowColor=a[11],this.font=a[12],this.textAlign=a[13],this.textBaseline=a[14];this.a.push("C")},scale:function(a,b){this.a.push("D",a,b)},rotate:function(a){this.a.push("E",a)},translate:function(a,b){this.a.push("F",a,b)},transform:function(a,b,c,d,e,f){this.a.push("G",a,b,c,d,e,f)},setTransform:function(a,
b,c,d,e,f){this.a.push("H",a,b,c,d,e,f)},createLinearGradient:function(a,b,c,d){(!isFinite(a)||!isFinite(b)||!isFinite(c)||!isFinite(d))&&h(9);this.a.push("M",a,b,c,d);return new u(this)},createRadialGradient:function(a,b,c,d,e,f){(!isFinite(a)||!isFinite(b)||!isFinite(c)||!isFinite(d)||!isFinite(e)||!isFinite(f))&&h(9);(c<0||f<0)&&h(1);this.a.push("N",a,b,c,d,e,f);return new u(this)},createPattern:function(a,b){a||h(17);var c=a.tagName,d,e,f,o=this.e;if(c)if(c=c.toLowerCase(),c==="img")d=a.getAttribute("src",
2);else if(c===p)e=this.G(a),f=a!==this.canvas;else if(c==="video")return;else h(17);else a.src?d=a.src:h(17);b==="repeat"||b==="no-repeat"||b==="repeat-x"||b==="repeat-y"||b===""||b===i||h(12);e||(e=w[o][d],(f=e===s)&&(e=this.F(d)));this.a.push("O",e,b);f&&v[o]&&(this.g(),++q[o]);return new I(this)},clearRect:function(a,b,c,d){this.a.push("X",a,b,c,d);this.b||this.d();this.c=0},fillRect:function(a,b,c,d){this.f(1);this.a.push("Y",a,b,c,d);this.b||this.d();this.c=0},strokeRect:function(a,b,c,d){this.f(6);
this.a.push("Z",a,b,c,d);this.b||this.d();this.c=0},beginPath:function(){this.a.push("a")},closePath:function(){this.a.push("b")},moveTo:function(a,b){this.a.push("c",a,b)},lineTo:function(a,b){this.a.push("d",a,b)},quadraticCurveTo:function(a,b,c,d){this.a.push("e",a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.a.push("f",a,b,c,d,e,f)},arcTo:function(a,b,c,d,e){e<0&&isFinite(e)&&h(1);this.a.push("g",a,b,c,d,e)},rect:function(a,b,c,d){this.a.push("h",a,b,c,d)},arc:function(a,b,c,d,e,f){c<0&&isFinite(c)&&
h(1);this.a.push("i",a,b,c,d,e,f?1:0)},fill:function(){this.f(1);this.a.push("j");this.b||this.d();this.c=0},stroke:function(){this.f(6);this.a.push("k");this.b||this.d();this.c=0},clip:function(){this.a.push("l")},isPointInPath:function(a,b){this.a.push("m",a,b);return this.g()==="true"},fillText:function(a,b,c,d){this.f(9);this.h.push(this.a.length+1);this.a.push("r",a,b,c,d===s?Infinity:d);this.b||this.d();this.c=0},strokeText:function(a,b,c,d){this.f(10);this.h.push(this.a.length+1);this.a.push("s",
a,b,c,d===s?Infinity:d);this.b||this.d();this.c=0},measureText:function(a){var b=x[this.e];try{b.style.font=this.font}catch(c){}b.innerText=a.replace(/[ \n\f\r]/g,"\t");return new Z(b.offsetWidth)},drawImage:function(a,b,c,d,e,f,o,ba,k){a||h(17);var i=a.tagName,j,g,l,m=arguments.length,n=this.e;if(i)if(i=i.toLowerCase(),i==="img")j=a.getAttribute("src",2);else if(i===p)g=this.G(a),l=a!==this.canvas;else if(i==="video")return;else h(17);else a.src?j=a.src:h(17);g||(g=w[n][j],(l=g===s)&&(g=this.F(j)));
this.f(0);if(m===3)this.a.push("u",m,g,b,c);else if(m===5)this.a.push("u",m,g,b,c,d,e);else if(m===9)(d===0||e===0)&&h(1),this.a.push("u",m,g,b,c,d,e,f,o,ba,k);else return;l&&v[n]?(this.g(),++q[n]):this.b||this.d();this.c=0},createImageData:function(a,b){var c=Math.ceil;arguments.length===2?((!isFinite(a)||!isFinite(b))&&h(9),(a===0||b===0)&&h(1)):(a instanceof t||h(9),b=a.height,a=a.width);a=c(a<0?-a:a);b=c(b<0?-b:b);return new t(a,b)},getImageData:function(a,b,c,d){(!isFinite(a)||!isFinite(b)||
!isFinite(c)||!isFinite(d))&&h(9);(c===0||d===0)&&h(1);this.a.push("w",a,b,c,d);a=this.g();c=typeof JSON==="object"?JSON.parse(a):g.documentMode?eval(a):a.slice(1,-1).split(",");a=c.shift();b=c.shift();return new t(a,b,c)},putImageData:function(a,b,c,d,e,f,o){a instanceof t||h(17);(!isFinite(b)||!isFinite(c))&&h(9);var g=arguments.length,i=a.width,j=a.height,k=a.data;g===3?this.a.push("x",g,i,j,k.toString(),b,c):g===7&&((!isFinite(d)||!isFinite(e)||!isFinite(f)||!isFinite(o))&&h(9),this.a.push("x",
g,i,j,k.toString(),b,c,d,e,f,o));this.b||this.d();this.c=0},J:function(){this.globalAlpha=this.l=1;this.globalCompositeOperation=this.m="source-over";this.fillStyle=this.k=this.strokeStyle=this.v="#000000";this.lineWidth=this.p=1;this.lineCap=this.n="butt";this.lineJoin=this.o="miter";this.miterLimit=this.q=10;this.shadowBlur=this.r=this.shadowOffsetY=this.u=this.shadowOffsetX=this.t=0;this.shadowColor=this.s="rgba(0, 0, 0, 0.0)";this.font=this.j="10px sans-serif";this.textAlign=this.z="start";this.textBaseline=
this.A="alphabetic";this.a=[];this.L=[];this.i=[];this.h=[];this.b=i;this.K=1},f:function(a){var b=this.a,c;if(this.l!==this.globalAlpha)b.push("I",this.l=this.globalAlpha);if(this.m!==this.globalCompositeOperation)b.push("J",this.m=this.globalCompositeOperation);if(this.t!==this.shadowOffsetX)b.push("T",this.t=this.shadowOffsetX);if(this.u!==this.shadowOffsetY)b.push("U",this.u=this.shadowOffsetY);if(this.r!==this.shadowBlur)b.push("V",this.r=this.shadowBlur);if(this.s!==this.shadowColor)c=this.s=
this.shadowColor,(""+c).indexOf("%")>0&&this.i.push(b.length+1),b.push("W",c);if(a&1&&this.k!==this.fillStyle)c=this.k=this.fillStyle,typeof c==="object"?c=c.id:(""+c).indexOf("%")>0&&this.i.push(b.length+1),b.push("L",c);if(a&2&&this.v!==this.strokeStyle)c=this.v=this.strokeStyle,typeof c==="object"?c=c.id:(""+c).indexOf("%")>0&&this.i.push(b.length+1),b.push("K",c);if(a&4){if(this.p!==this.lineWidth)b.push("P",this.p=this.lineWidth);if(this.n!==this.lineCap)b.push("Q",this.n=this.lineCap);if(this.o!==
this.lineJoin)b.push("R",this.o=this.lineJoin);if(this.q!==this.miterLimit)b.push("S",this.q=this.miterLimit)}if(a&8){if(this.j!==this.font)a=x[this.e].offsetHeight,this.h.push(b.length+2),b.push("o",a,this.j=this.font);if(this.z!==this.textAlign)b.push("p",this.z=this.textAlign);if(this.A!==this.textBaseline)b.push("q",this.A=this.textBaseline);if(this.H!==this.canvas.currentStyle.direction)b.push("1",this.H=this.canvas.currentStyle.direction)}},d:function(){var a=this;a.b=setTimeout(function(){q[a.e]?
a.d():(a.b=i,a.g(j.C))},j.B)},Q:function(){clearTimeout(this.b);this.b=i},g:function(a){var b,c,d,e=this.i,f=this.h,g=this.a,i=this.w;if(g.length){this.b&&this.Q();if(a){b=0;for(c=e.length;b<c;++b)d=e[b],g[d]=encodeURI(g[d]);b=0;for(c=f.length;b<c;++b)d=f[b],g[d]=encodeURIComponent(g[d])}else{b=0;for(c=f.length;b<c;++b)d=f[b],g[d]=(""+g[d]).replace(/&/g,"&amp;").replace(/</g,"&lt;")}b=g.join("\u0001");this.a=[];this.i=[];this.h=[];if(a)i.flashvars="c="+b,i.width=i.clientWidth+this.K,this.K^=-2;else return i.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+
b+"</string></arguments></invoke>")}},P:function(a,b){this.g();this.J();if(a>0)this.w.width=a;if(b>0)this.w.height=b;this.a.push("2",a,b);this.b||this.d();this.c=0},G:function(a){var b=a.getContext("2d").e,c=p+":"+b;(a.width===0||a.height===0)&&h(11);if(b!==this.e&&(a=l[b].getContext("2d"),!a.c))b=++X[b],c+=":"+b,a.a.push("3",b),a.b||a.d(),a.c=1;return c},F:function(a){var b=this.e,c=w[b],d=W[b],e=c[a]=G[b]++;e>=j.N-1&&(G[b]=0);e in d&&delete c[d[e]];this.h.push(this.a.length+2);this.a.push("5",e,
a);d[e]=a;return e}};u.prototype={addColorStop:function(a,b){(isNaN(a)||a<0||a>1)&&h(1);var c=this.O,d=this.id;(""+b).indexOf("%")>0&&c.i.push(c.a.length+3);c.a.push("y",d,a,b)}};H.prototype=Error();var Y={1:"INDEX_SIZE_ERR",9:"NOT_SUPPORTED_ERR",11:"INVALID_STATE_ERR",12:"SYNTAX_ERR",17:"TYPE_MISMATCH_ERR",18:"SECURITY_ERR"},A={initElement:function(a){if(a.getContext)return a;var b=Math.random().toString(36).slice(2)||"0",c="external"+b;v[b]=0;w[b]={};W[b]=[];G[b]=0;q[b]=1;X[b]=0;U(a);a.innerHTML=
'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';l[b]=a;var d=a.firstChild;
x[b]=a.lastChild;var e=g.body.contains;if(e(a))d.movie=r;else var f=setInterval(function(){if(e(a))clearInterval(f),d.movie=r},0);if(g.compatMode==="BackCompat"||!k.XMLHttpRequest)x[b].style.overflow="hidden";var h=new y(a,d);a.getContext=function(a){return a==="2d"?h:i};a.toDataURL=function(b,c){if(a.width===0||a.height===0)return"data:,";(""+b).replace(/[A-Z]+/g,aa)==="image/jpeg"?h.a.push("A",b,typeof c==="number"?c:""):h.a.push("A",b);return h.g().slice(1,-1)};d.attachEvent(O,K);j.M&&(d.attachEvent(D,
B),a.attachEvent(E,C));j.D&&h.a.push("4","usePolicyFile",j.D);return a},saveImage:function(a){a.firstChild.saveImage()},setOptions:function(a){for(var b in a){var c=a[b];switch(b){case "turbo":j.C=c;break;case "delay":j.B=c;break;case "disableContextMenu":var d=j.M=c,c=void 0;for(c in l){var e=l[c],f=d?"attachEvent":"detachEvent";e.firstChild[f](D,B);e[f](E,C)}break;case "imageCacheSize":j.N=c;break;case "usePolicyFile":for(e in d=b,c=j.D=c?1:0,e=void 0,l)f=l[e].getContext("2d"),f.h.push(f.a.length+
2),f.a.push("4",d,c)}}},trigger:function(a,b){l[a].fireEvent("on"+b)},unlock:function(a,b){q[a]&&--q[a];if(b){var c=l[a],d=c.firstChild,e,f;U(c);e=c.width;f=c.height;c.style.width=e+"px";c.style.height=f+"px";if(e>0)d.width=e;if(f>0)d.height=f;d.resize(e,f);c.attachEvent(P,L);v[a]=1}}};g.createElement(p);g.createStyleSheet().cssText=p+"{display:inline-block;overflow:hidden;width:300px;height:150px}";g.readyState==="complete"?z():g.attachEvent(J,z);k.attachEvent(N,M);r.indexOf(location.protocol+"//"+
location.host+"/")===0&&(m=new ActiveXObject("Microsoft.XMLHTTP"),m.open("GET",r,!1),m.send(i));k[Q]=y;k[R]=u;k[S]=I;k[F]=A;k[T]={init:function(){},init_:function(){},initElement:A.initElement}}(window,document);
