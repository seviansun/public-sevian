this.JSON2||(this.JSON2={});
(function(){function b(b){return 10>b?"0"+b:b}function D(b){d.lastIndex=0;return d.test(b)?'"'+b.replace(d,function(b){var f=aa[b];return"string"===typeof f?f:"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+b+'"'}function l(d,K){var f,p,n,z,L=h,m,e=K[d];e&&"object"===typeof e&&(f=e,n=Object.prototype.toString.apply(f),e="[object Date]"===n?isFinite(f.valueOf())?f.getUTCFullYear()+"-"+b(f.getUTCMonth()+1)+"-"+b(f.getUTCDate())+"T"+b(f.getUTCHours())+":"+b(f.getUTCMinutes())+":"+b(f.getUTCSeconds())+
"Z":null:"[object String]"===n||"[object Number]"===n||"[object Boolean]"===n?f.valueOf():"[object Array]"!==n&&"function"===typeof f.toJSON?f.toJSON(d):f);"function"===typeof y&&(e=y.call(K,d,e));switch(typeof e){case "string":return D(e);case "number":return isFinite(e)?""+e:"null";case "boolean":case "null":return""+e;case "object":if(!e)return"null";h+=q;m=[];if("[object Array]"===Object.prototype.toString.apply(e)){z=e.length;for(f=0;f<z;f+=1)m[f]=l(f,e)||"null";n=0===m.length?"[]":h?"[\n"+h+
m.join(",\n"+h)+"\n"+L+"]":"["+m.join(",")+"]";h=L;return n}if(y&&"object"===typeof y){z=y.length;for(f=0;f<z;f+=1)"string"===typeof y[f]&&(p=y[f],(n=l(p,e))&&m.push(D(p)+(h?": ":":")+n))}else for(p in e)Object.prototype.hasOwnProperty.call(e,p)&&(n=l(p,e))&&m.push(D(p)+(h?": ":":")+n);n=0===m.length?"{}":h?"{\n"+h+m.join(",\n"+h)+"\n"+L+"}":"{"+m.join(",")+"}";h=L;return n}}var t=RegExp("[\x00\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),d=
RegExp('[\\\\\\"\x00-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),h,q,aa={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},y;"function"!==typeof JSON2.stringify&&(JSON2.stringify=function(b,d,f){var p;q=h="";if("number"===typeof f)for(p=0;p<f;p+=1)q+=" ";else"string"===typeof f&&(q=f);if((y=d)&&"function"!==typeof d&&("object"!==typeof d||"number"!==typeof d.length))throw Error("JSON.stringify");
return l("",{"":b})});"function"!==typeof JSON2.parse&&(JSON2.parse=function(b,d){function f(b,h){var l,m,e=b[h];if(e&&"object"===typeof e)for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&(m=f(e,l),void 0!==m?e[l]=m:delete e[l]);return d.call(b,h,e)}var h,b=""+b;t.lastIndex=0;t.test(b)&&(b=b.replace(t,function(b){return"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(b.replace(RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',
"g"),"]").replace(RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),"")))return h=eval("("+b+")"),"function"===typeof d?f({"":h},""):h;throw new SyntaxError("JSON.parse");})})();
var _laaq=_laaq||[],la=la||function(){function b(c){return"undefined"!==typeof c}function D(c){return"object"===typeof c}function l(c){return"string"===typeof c||c instanceof String}function t(){var c,b,d;for(c=0;c<arguments.length;c+=1)d=arguments[c],b=d.shift(),l(b)?A[b].apply(A,d):b.apply(A,d)}function d(c,b,d,g){if(c.addEventListener)return c.addEventListener(b,d,g),!0;if(c.attachEvent)return c.attachEvent("on"+b,d);c["on"+b]=d}function h(c,b){var d="",g,f;for(g in E)Object.prototype.hasOwnProperty.call(E,
g)&&(f=E[g][c],"function"===typeof f&&(d+=f(b)));return d}function q(){var c;if(!N){N=!0;h("load");for(c=0;c<ba.length;c++)ba[c]()}return!0}function aa(){var c="";try{c=j.top.document.referrer}catch(b){if(j.parent)try{c=j.parent.document.referrer}catch(d){c=""}}""===c&&(c=k.referrer);return c}function y(c){return(c=/^([a-z]+):/.exec(c))?c[1]:null}function J(c){var b=/^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(c);return b?b[1]:c}function K(c,b){var d=/^(?:https?|ftp)(?::\/*(?:[^?]+)[?])([^#]+)/.exec(c);
return(d=d?RegExp("(?:^|&)"+b+"=([^&]*)").exec(d[1]):0)?O(d[1]):""}function f(c){return(c=RegExp("(^|;)[ ]*"+c+"=([^;]*)").exec(k.cookie))?O(c[2]):0}function p(c){var b=function(c,b){return c<<b|c>>>32-b},d=function(c){var b="",d,f;for(d=7;0<=d;d--)f=c>>>4*d&15,b+=f.toString(16);return b},g,f,h=[],e=1732584193,k=4023233417,j=2562383102,l=271733878,r=3285377520,o,u,s,m,n,q=[],c=qa(B(c));o=c.length;for(g=0;g<o-3;g+=4)f=c.charCodeAt(g)<<24|c.charCodeAt(g+1)<<16|c.charCodeAt(g+2)<<8|c.charCodeAt(g+3),
q.push(f);switch(o&3){case 0:g=2147483648;break;case 1:g=c.charCodeAt(o-1)<<24|8388608;break;case 2:g=c.charCodeAt(o-2)<<24|c.charCodeAt(o-1)<<16|32768;break;case 3:g=c.charCodeAt(o-3)<<24|c.charCodeAt(o-2)<<16|c.charCodeAt(o-1)<<8|128}for(q.push(g);14!==(q.length&15);)q.push(0);q.push(o>>>29);q.push(o<<3&4294967295);for(c=0;c<q.length;c+=16){for(g=0;16>g;g++)h[g]=q[c+g];for(g=16;79>=g;g++)h[g]=b(h[g-3]^h[g-8]^h[g-14]^h[g-16],1);f=e;o=k;u=j;s=l;m=r;for(g=0;19>=g;g++)n=b(f,5)+(o&u|~o&s)+m+h[g]+1518500249&
4294967295,m=s,s=u,u=b(o,30),o=f,f=n;for(g=20;39>=g;g++)n=b(f,5)+(o^u^s)+m+h[g]+1859775393&4294967295,m=s,s=u,u=b(o,30),o=f,f=n;for(g=40;59>=g;g++)n=b(f,5)+(o&u|o&s|u&s)+m+h[g]+2400959708&4294967295,m=s,s=u,u=b(o,30),o=f,f=n;for(g=60;79>=g;g++)n=b(f,5)+(o^u^s)+m+h[g]+3395469782&4294967295,m=s,s=u,u=b(o,30),o=f,f=n;e=e+f&4294967295;k=k+o&4294967295;j=j+u&4294967295;l=l+s&4294967295;r=r+m&4294967295}n=d(e)+d(k)+d(j)+d(l)+d(r);return n.toLowerCase()}function n(c,b,d){if("translate.googleusercontent.com"===
c)""===d&&(d=b),b=K(b,"u"),c=J(b);else if("cc.bingj.com"===c||"webcache.googleusercontent.com"===c||"74.6."===c.slice(0,5))b=k.links[0].href,c=J(b);return[c,b,d]}function z(b){var d=b.length;"."===b.charAt(--d)&&(b=b.slice(0,d));"*."===b.slice(0,2)&&(b=b.slice(1));return b}function L(c){if(!l(c)){var c=c.text||"",d=k.getElementsByTagName("title");d&&b(d[0])&&(c=d[0].text)}return c}function m(c,m){function q(a){var i;return ra?(i=/#.*/,a.replace(i,"")):a}function g(a){var i,b,c;for(i=0;i<S.length;i++){b=
z(S[i].toLowerCase());if(a===b)return!0;if("."===b.slice(0,1)){if(a===b.slice(1))return!0;c=a.length-b.length;if(0<c&&a.slice(c)===b)return!0}}return!1}function t(a){var i=new Image(1,1);i.onload=function(){};i.src=T+(0>T.indexOf("?")?"?":"&")+a}function A(a){try{var i=j.XDomainRequest?new j.XDomainRequest:j.XMLHttpRequest?new j.XMLHttpRequest:j.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;i.open("POST",T,!0);i.onreadystatechange=function(){4===this.readyState&&200!==this.status&&t(a)};
i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");i.send(a)}catch(b){t(a)}}function P(a,i){var b=new Date;fa||("POST"===sa?A(a):t(a),e=b.getTime()+i)}function F(a){return ta+a+"."+ga+"."+ua}function E(){ua=va((wa||ha)+(xa||"/")).slice(0,4)}function x(){var a=F("cvar"),a=f(a);return a.length&&(a=JSON2.parse(a),D(a))?a:{}}function r(){ia=(new Date).getTime()}function o(){var a=Math.round((new Date).getTime()/1E3),i=f(F("id"));i?(a=i.split("."),a.unshift("0")):(ja||
(ja=va((w.userAgent||"")+(w.platform||"")+JSON2.stringify(G)+a).slice(0,16)),a=["1",ja,a,0,a,"",""]);return a}function u(){var a=f(F("ref"));if(a.length)try{if(a=JSON2.parse(a),D(a))return a}catch(i){}return["","",0,""]}function s(a,i,c,d){var e,k=new Date,j=Math.round(k.getTime()/1E3),l,m,n,s,r,v,p,y,t,w,D=C;F("id");l=F("ses");F("ref");F("cvar");p=o();w=f(l);var z=u(),E=U||ya,x,A;if(fa)return"";l=p[0];m=p[1];s=p[2];n=p[3];r=p[4];v=p[5];b(p[6])||(p[6]="");p=p[6];b(d)||(d="");x=z[0];A=z[1];y=z[2];
t=z[3];if(!w){n++;v=r;if(!ka||!x.length){for(e in V)if(Object.prototype.hasOwnProperty.call(V,e)&&(x=K(E,V[e]),x.length))break;for(e in W)if(Object.prototype.hasOwnProperty.call(W,e)&&(A=K(E,W[e]),A.length))break}r=J(Q);w=t.length?J(t):"";if(r.length&&!g(r)&&(!ka||!w.length||g(w)))t=Q;if(t.length||x.length)y=j,z=[x,A,y,q(t.slice(0,1024))],JSON2.stringify(z)}a+="&idsite="+ga+"&rec=1&r="+(""+Math.random()).slice(2,8)+"&h="+k.getHours()+"&m="+k.getMinutes()+"&s="+k.getSeconds()+"&url="+B(q(E))+(Q.length?
"&urlref="+B(q(Q)):"")+"&_id="+m+"&_idts="+s+"&_idvc="+n+"&_idn="+l+(x.length?"&_rcn="+B(x):"")+(A.length?"&_rck="+B(A):"")+"&_refts="+y+"&_viewts="+v+((""+p).length?"&_ects="+p:"")+((""+t).length?"&_ref="+B(q(t.slice(0,1024))):"");k=JSON2.stringify(I);2<k.length&&(a+="&cvar="+B(k));for(e in G)Object.prototype.hasOwnProperty.call(G,e)&&(a+="&"+e+"="+G[e]);i?a+="&data="+B(JSON2.stringify(i)):H&&(a+="&data="+B(JSON2.stringify(H)));if(C){i=JSON2.stringify(C);2<i.length&&(a+="&_cvar="+B(i));for(e in D)Object.prototype.hasOwnProperty.call(D,
e)&&(""===C[e][0]||""===C[e][1])&&delete C[e];JSON2.stringify(C)}b(d);F("id");return a+=h(c)}function O(a,i,c,d,f,g){var e="idgoal=0",h,k=new Date,l=[],j;(""+a).length&&(e+="&ec_id="+B(a),h=Math.round(k.getTime()/1E3));e+="&revenue="+i;(""+c).length&&(e+="&ec_st="+c);(""+d).length&&(e+="&ec_tx="+d);(""+f).length&&(e+="&ec_sh="+f);(""+g).length&&(e+="&ec_dt="+g);if(v){for(j in v)if(Object.prototype.hasOwnProperty.call(v,j)){b(v[j][1])||(v[j][1]="");b(v[j][2])||(v[j][2]="");if(!b(v[j][3])||0===(""+
v[j][3]).length)v[j][3]=0;if(!b(v[j][4])||0===(""+v[j][4]).length)v[j][4]=1;l.push(v[j])}e+="&ec_items="+B(JSON2.stringify(l))}e=s(e,H,"ecommerce",h);P(e,M)}function La(a,i){var b=new Date,c=s("action_name="+B(L(a||za)),i,"log");P(c,M);ma&&R&&!Aa&&(Aa=!0,d(k,"click",r),d(k,"mouseup",r),d(k,"mousedown",r),d(k,"mousemove",r),d(k,"mousewheel",r),d(j,"DOMMouseScroll",r),d(j,"scroll",r),d(k,"keypress",r),d(k,"keydown",r),d(k,"keyup",r),d(j,"resize",r),d(j,"focus",r),d(j,"blur",r),ia=b.getTime(),setTimeout(function Ma(){var a=
new Date;ia+R>a.getTime()&&(ma<a.getTime()&&(a=s("ping=1",i,"ping"),P(a,M)),setTimeout(Ma,R))},R))}function pa(a,i,b){a=s(i+"="+B(q(a)),b,"link");P(a,M)}function ca(a){var i,b,c=["","webkit","ms","moz"],e;if(!Ba)for(b=0;b<c.length;b++)if(e=c[b],Object.prototype.hasOwnProperty.call(k,""!==e?e+"H"+"hidden".slice(1):"hidden")){"prerender"===k[""!==e?e+"V"+"visibilityState".slice(1):"visibilityState"]&&(i=!0);break}i?d(k,e+"visibilitychange",function Na(){k.removeEventListener(e+"visibilitychange",Na,
!1);a()}):a()}function da(a,i){var b,c="(^| )(la[_-]"+i;if(a)for(b=0;b<a.length;b++)c+="|"+a[b];return RegExp(c+")( |$)")}function oa(a){for(var i,c;null!==(i=a.parentNode)&&b(i)&&"A"!==(c=a.tagName.toUpperCase())&&"AREA"!==c;)a=i;if(b(a.href)){i=a.hostname||J(a.href);var d=i.toLowerCase();i=a.href.replace(i,d);if(!/^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i.test(i)){a=a.className;c=i;if(g(d))var d=da(Ca,"download"),e=da(Da,"link"),f=RegExp("\\.("+X+")([?&#]|$)","i"),a=e.test(a)?
"link":d.test(a)||f.test(c)?"download":0;else a="link";a&&(i=qa(i),pa(i,a))}}}function ea(a){var b,c,a=a||j.event;b=a.which||a.button;c=a.target||a.srcElement;"click"===a.type?c&&oa(c):"mousedown"===a.type?(1===b||2===b)&&c?(Y=b,Z=c):Y=Z=null:"mouseup"===a.type&&(b===Y&&c===Z&&oa(c),Y=Z=null)}function Ea(a,b){b?(d(a,"mouseup",ea,!1),d(a,"mousedown",ea,!1)):d(a,"click",ea,!1)}function Fa(a){if(!Ga){Ga=!0;var b,c=da(Ha,"ignore"),d=k.links;if(d)for(b=0;b<d.length;b++)c.test(d[b].className)||Ea(d[b],
a)}}var $={},na=n(k.domain,j.location.href,aa()),ha=z(na[0]),ya=na[1],Q=na[2],sa="GET",T="http://data.liba.com/service/service.php",ga=m||"",U,za=k.title,X="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",S=[ha],Ha=[],Ca=[],Da=[],M=500,ma,R,ra,H,V=["pk_campaign","la_campaign","utm_campaign","utm_source","utm_medium"],
W=["pk_kwd","la_kwd","utm_term"],ta="_pk_",wa,xa,fa,Ba,ka,C=!1,I={},v={},G={},Ga=!1,Aa=!1,ia,Y,Z,va=p,ua,ja;(function(){var a,c,d={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(w.mimeTypes&&w.mimeTypes.length)for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(c=w.mimeTypes[d[a]],
G[a]=c&&c.enabledPlugin?"1":"0");"unknown"!==typeof navigator.javaEnabled&&b(w.javaEnabled)&&w.javaEnabled()&&(G.java="1");"function"===typeof j.GearsFactory&&(G.gears="1");G.res=Ia.width+"x"+Ia.height;a=G;c=F("testcookie");c=b(w.cookieEnabled)?w.cookieEnabled?"1":"0":"1"===f(c)?"1":"0";a.cookie=c})();E();h("run",function(a,c){var d=null;if(l(a)&&!b($[a])&&c){if(D(c))d=c;else if(l(c))try{eval("hookObj ="+c)}catch(e){}$[a]=d}return d});return{hook:$,getHook:function(a){return $[a]},getVisitorId:function(){return o()[1]},
getVisitorInfo:function(){return o()},getAttributionInfo:function(){return u()},getAttributionCampaignName:function(){return u()[0]},getAttributionCampaignKeyword:function(){return u()[1]},getAttributionReferrerTimestamp:function(){return u()[2]},getAttributionReferrerUrl:function(){return u()[3]},setTrackerUrl:function(a){T=a},setSiteId:function(a){ga=a},setCustomData:function(a,b){D(a)?H=a:(H||(H=[]),H[a]=b)},getCustomData:function(){return H},setCustomVariable:function(a,c,d,e){b(e)||(e="visit");
if(0<a)if(c=b(c)&&!l(c)?""+c:c,d=b(d)&&!l(d)?""+d:d,c=[c.slice(0,200),d.slice(0,200)],"visit"===e||2===e)!1===C&&(C=x()),C[a]=c;else if("page"===e||3===e)I[a]=c},getCustomVariable:function(a,c){var d;b(c)||(c="visit");if("page"===c||3===c)d=I[a];else if("visit"===c||2===c)!1===C&&(C=x()),d=C[a];return!b(d)||d&&""===d[0]?!1:d},deleteCustomVariable:function(a,b){this.getCustomVariable(a,b)&&this.setCustomVariable(a,"","",b)},setLinkTrackingTimer:function(a){M=a},setDownloadExtensions:function(a){X=
a},addDownloadExtensions:function(a){X+="|"+a},setDomains:function(a){S=l(a)?[a]:a;S.push(ha)},setIgnoreClasses:function(a){Ha=l(a)?[a]:a},setRequestMethod:function(a){sa=a||"GET"},setReferrerUrl:function(a){Q=a},setCustomUrl:function(a){var b=ya,c;if(y(a))U=a;else if("/"===a.slice(0,1))U=y(b)+"://"+J(b)+a;else{b=q(b);if(0<=(c=b.indexOf("?")))b=b.slice(0,c);if((c=b.lastIndexOf("/"))!==b.length-1)b=b.slice(0,c+1);U=b+a}},setDocumentTitle:function(a){za=a},setDownloadClasses:function(a){Ca=l(a)?[a]:
a},setLinkClasses:function(a){Da=l(a)?[a]:a},setCampaignNameKey:function(a){V=l(a)?[a]:a},setCampaignKeywordKey:function(a){W=l(a)?[a]:a},discardHashTag:function(a){ra=a},setCookieNamePrefix:function(a){ta=a;C=x()},setCookieDomain:function(a){wa=z(a);E()},setCookiePath:function(a){xa=a;E()},setVisitorCookieTimeout:function(){},setSessionCookieTimeout:function(){},setReferralCookieTimeout:function(){},setConversionAttributionFirstReferrer:function(a){ka=a},setDoNotTrack:function(a){var b=w.doNotTrack||
w.msDoNotTrack;fa=a&&("yes"===b||"1"===b)},addListener:function(a,b){Ea(a,b)},enableLinkTracking:function(a){N?Fa(a):ba.push(function(){Fa(a)})},setHeartBeatTimer:function(a,b){ma=(new Date).getTime()+1E3*a;R=1E3*b},killFrame:function(){j.location!==j.top.location&&(j.top.location=j.location)},redirectFile:function(a){"file:"===j.location.protocol&&(j.location=a)},setCountPreRendered:function(a){Ba=a},trackGoal:function(a,b,c){ca(function(){var d=s("idgoal="+a+(b?"&revenue="+b:""),c,"goal");P(d,M)})},
trackLink:function(a,b,c){ca(function(){pa(a,b,c)})},trackPageView:function(a,b){ca(function(){La(a,b)})},setEcommerceView:function(a,c,d,e){!b(d)||!d.length?d="":d instanceof Array&&(d=JSON2.stringify(d));I[5]=["_pkc",d];b(e)&&(""+e).length&&(I[2]=["_pkp",e]);if(b(a)&&a.length||b(c)&&c.length){b(a)&&a.length&&(I[3]=["_pks",a]);if(!b(c)||!c.length)c="";I[4]=["_pkn",c]}},addEcommerceItem:function(a,b,c,d,e){a.length&&(v[a]=[a,b,c,d,e])},trackEcommerceOrder:function(a,c,d,e,f,g){(""+a).length&&b(c)&&
O(a,c,d,e,f,g)},trackEcommerceCartUpdate:function(a){b(a)&&O("",a,"","","","")}}}var e,E={},k=document,w=navigator,Ia=screen,j=window,N=!1,ba=[],B=j.encodeURIComponent,O=j.decodeURIComponent,qa=unescape,A,x;d(j,"beforeunload",function(){var b;h("unload");if(e){do b=new Date;while(b.getTimeAlias()<e)}},!1);(function(){var b;k.addEventListener?d(k,"DOMContentLoaded",function Ja(){k.removeEventListener("DOMContentLoaded",Ja,!1);q()}):k.attachEvent&&(k.attachEvent("onreadystatechange",function g(){"complete"===
k.readyState&&(k.detachEvent("onreadystatechange",g),q())}),k.documentElement.doScroll&&j===j.top&&function Ka(){if(!N){try{k.documentElement.doScroll("left")}catch(b){setTimeout(Ka,0);return}q()}}());/WebKit/.test(w.userAgent)&&(b=setInterval(function(){if(N||/loaded|complete/.test(k.readyState))clearInterval(b),q()},10));d(j,"load",q,!1)})();Date.prototype.getTimeAlias=Date.prototype.getTime;A=new m;for(x=0;x<_laaq.length;x++)t(_laaq[x]);_laaq=new function(){return{push:t}};return{addPlugin:function(b,
d){E[b]=d},getTracker:function(b,d){return new m(b,d)},getAsyncTracker:function(){return A}}}(),la_track,la_log=function(b,D,l,t){function d(b){try{return eval("la_"+b)}catch(d){}}var h=la.getTracker(l,D);h.setDocumentTitle(b);h.setCustomData(t);(b=d("tracker_pause"))&&h.setLinkTrackingTimer(b);(b=d("download_extensions"))&&h.setDownloadExtensions(b);(b=d("hosts_alias"))&&h.setDomains(b);(b=d("ignore_classes"))&&h.setIgnoreClasses(b);h.trackPageView();d("install_tracker")&&(la_track=function(b,d,
l,t){h.setSiteId(d);h.setTrackerUrl(l);h.trackLink(b,t)},h.enableLinkTracking())};
