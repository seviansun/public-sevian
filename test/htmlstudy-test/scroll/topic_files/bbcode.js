function AddText(NewCode) {
        if(document.all){
        	insertAtCaret(parent.document.form1.content, NewCode);
        	setfocus();
        } else{
        	parent.document.form1.content.value += NewCode;
        	setfocus();
        }
}

function storeCaret (textEl){
        if(textEl.createTextRange){
                textEl.caretPos = parent.document.selection.createRange().duplicate();
        }
}

function insertAtCaret (textEl, text){
        if (textEl.createTextRange && textEl.caretPos){
	            var caretPos = textEl.caretPos;
                caretPos.text += caretPos.text.charAt(caretPos.text.length - 2) == ' ' ? text + ' ' : text;
        } else if(textEl) {
                textEl.value += text;
        } else {
        	textEl.value = text;
        }
}

function setfocus() {
        parent.document.form1.content.focus();
}


defmode = "stprompt";	

if (defmode == "basic") {
		helpstat = false;
		stprompt = false;
		basic = true;
} else if (defmode == "help") {
	basic = false;
	stprompt = false;
	helpstat = true;
} else {
	helpstat = false;
	basic = false;
	stprompt = true;
}

function thelp(swtch){
if (swtch == 1){
	basic = false;
	stprompt = false;
	helpstat = true;
	} else if (swtch == 0) {
		helpstat = false;
		stprompt = false;
		basic = true;
	} else if (swtch == 2) {
		helpstat = false;
		basic = false;
		stprompt = true;
	}
}
function showsize(size) {
	if (parent.helpstat) {
		alert("文字大小标记\n设置文字大小.\n可变范围 1 - 6.\n 1 为最小 6 为最大.\n用法: [size="+size+"]这是 "+size+" 文字[/size]");
	} else if (parent.basic) {
		AddTxt="[size="+size+"][/size]";
		AddText(AddTxt);
	} else {
		txt=prompt("大小 "+size,"文字");
		if (txt!=null) {
			AddTxt="[size="+size+"]"+txt;
			AddText(AddTxt);
			AddTxt="[/size]";
			AddText(AddTxt);
		}
	}
}
function showfont(font) {
 	if (parent.helpstat){
		alert("字体标记\n给文字设置字体.\n用法: [font="+font+"]改变文字字体为"+font+"[/font]");
	} else if (parent.basic) {
		AddTxt="[font="+font+"][/font]";
		AddText(AddTxt);
	} else {
		txt=prompt("要设置字体的文字"+font,"文字");
		if (txt!=null) {
			AddTxt="[font="+font+"]"+txt;
			AddText(AddTxt);
			AddTxt="[/font]";
			AddText(AddTxt);
		}
	}
}
function showcolor(color) {
	if (parent.helpstat) {
		alert("颜色标记\n设置文本颜色.  任何颜色名都可以被使用.\n用法: [color="+color+"]颜色要改变为"+color+"的文字[/color]");
	} else if (parent.basic) {
		AddTxt="[color="+color+"][/color]";
		AddText(AddTxt);
	} else {  
     	txt=prompt("选择的颜色是: "+color,"文字");
		if(txt!=null) {
			AddTxt="[color="+color+"]"+txt;
			AddText(AddTxt);
			AddTxt="[/color]";
			AddText(AddTxt);
		}
	}
}
function email() {
	if (parent.helpstat) {
		alert("Email 标记\n插入 Email 超级链接\n用法1: [email]phpiscool\@163.com[/email]\n用法2: [email=phpiscool\@163.com]旅行[/email]");
	} else if (parent.basic) {
		AddTxt="[email][/email]";
		AddText(AddTxt);
	} else {
		txt2=prompt("链接显示的文字.\n如果为空，那么将只显示你的 Email 地址","");
		if (txt2!=null) {
			txt=prompt("Email 地址.","name\@domain.com");      
			if (txt!=null) {
				if (txt2=="") {
					AddTxt="[email]"+txt+"[/email]";
				} else {
					AddTxt="[email="+txt+"]"+txt2;
					AddText(AddTxt);
					AddTxt="[/email]";
				}
				AddText(AddTxt);
			}
		}
	}
}

function bold() {
	if (parent.helpstat) {
		alert("加粗标记\n使文本加粗.\n用法: [b]这是加粗的文字[/b]");
	} else if (parent.basic) {
		AddTxt="[b][/b]";
		AddText(AddTxt);
	} else {
		txt=prompt("文字将被变粗.","文字");
		if (txt!=null) {
			AddTxt="[b]"+txt;
			AddText(AddTxt);
			AddTxt="[/b]";
			AddText(AddTxt);
		}
	}
}

function italicize() {
	if (parent.helpstat) {
		alert("斜体标记\n使文本字体变为斜体.\n用法: [i]这是斜体字[/i]");
	} else if (parent.basic) {
		AddTxt="[i][/i]";
		AddText(AddTxt);
	} else {
		txt=prompt("文字将变斜体","文字");
		if (txt!=null) {
			AddTxt="[i]"+txt;
			AddText(AddTxt);
			AddTxt="[/i]";
			AddText(AddTxt);
		}
	}
}

function quoteme() {
	if (parent.helpstat){
		alert("引用标记\n引用一些文字.\n用法: [quote]引用内容[/quote]");
	} else if (parent.basic) {
		AddTxt="[quote][/quote]";
		AddText(AddTxt);
	} else {
		txt=prompt("被引用的文字","文字");
		if(txt!=null) {
			AddTxt="[quote]"+txt;
			AddText(AddTxt);
			AddTxt="[/quote]";
			AddText(AddTxt);
		}
	}
}
function setfly() {
 	if (parent.helpstat){
		alert("飞行标记\n使文字飞行.\n用法: [fly]文字为这样文字[/fly]");
	} else if (parent.basic) {
		AddTxt="[fly][/fly]";
		AddText(AddTxt);
	} else {
		txt=prompt("飞行文字","文字");
		if (txt!=null) {
			AddTxt="[fly]"+txt;
			AddText(AddTxt);
			AddTxt="[/fly]";
			AddText(AddTxt);
		}
	}
}

function movesign() {
	if (parent.helpstat) {
		alert("移动标记\n使文字产生移动效果.\n用法: [move]要产生移动效果的文字[/move]");
	} else if (parent.basic) {
		AddTxt="[move][/move]";
		AddText(AddTxt);
	} else {
		txt=prompt("要产生移动效果的文字","文字");
		if (txt!=null) {
			AddTxt="[move]"+txt;
			AddText(AddTxt);
			AddTxt="[/move]";
			AddText(AddTxt);
		}
	}
}

function shadow() {
	if (parent.helpstat) {
alert("阴影标记\n使文字产生阴影效果.\n用法: [SHADOW=宽度, 颜色, 边界]要产生阴影效果的文字[/SHADOW]");
	} else if (parent.basic) {
		AddTxt="[SHADOW=255,blue,1][/SHADOW]";
		AddText(AddTxt);
	} else {
		txt2=prompt("文字的长度、颜色和边界大小","255,blue,1");
		if (txt2!=null) {
			txt=prompt("要产生阴影效果的文字","文字");
			if (txt!=null) {
				if (txt2=="") {
					AddTxt="[shadow=255, blue, 1]"+txt;
					AddText(AddTxt);
					AddTxt="[/shadow]";
					AddText(AddTxt);
				} else {
					AddTxt="[shadow="+txt2+"]"+txt;
					AddText(AddTxt);
					AddTxt="[/shadow]";
					AddText(AddTxt);
				}
			}
		}
	}
}

function glow() {
	if (parent.helpstat) {
		alert("光晕标记\n使文字产生光晕效果.\n用法: [GLOW=宽度, 颜色, 边界]要产生光晕效果的文字[/GLOW]");
	} else if (parent.basic) {
		AddTxt="[glow=255,red,2][/glow]";
		AddText(AddTxt);
	} else {
		txt2=prompt("文字的长度、颜色和边界大小","255,red,2");
		if (txt2!=null) {
			txt=prompt("要产生光晕效果的文字.","文字");
			if (txt!=null) {
				if (txt2=="") {
					AddTxt="[glow=255,red,2]"+txt;
					AddText(AddTxt);
					AddTxt="[/glow]";
					AddText(AddTxt);
				} else {
					AddTxt="[glow="+txt2+"]"+txt;
					AddText(AddTxt);
					AddTxt="[/glow]";
					AddText(AddTxt);
				}
			}
		}
	}
}

function center() {
 	if (parent.helpstat) {
		alert("对齐标记\n使用这个标记, 可以使文本左对齐、居中、右对齐.\n用法: [align=center|left|right]要对齐的文本[/align]");
	} else if (parent.basic) {
		AddTxt="[align=center|left|right][/align]";
		AddText(AddTxt);
	} else {
		txt2=prompt("对齐样式\n输入 'center' 表示居中, 'left' 表示左对齐, 'right' 表示右对齐.","center");
		while ((txt2!="") && (txt2!="center") && (txt2!="left") && (txt2!="right") && (txt2!=null)) {
			txt2=prompt("错误!\n类型只能输入 'center' 、 'left' 或者 'right'.","");
		}
		txt=prompt("要对齐的文本","文本");
		if (txt!=null) {
			AddTxt="\r[align="+txt2+"]"+txt;
			AddText(AddTxt);
			AddTxt="[/align]";
			AddText(AddTxt);
		}
	}
}

function hyperlink() {
	if (parent.helpstat) {
		alert("超级链接标记\n插入一个超级链接标记\n使用方法: [url]http://www.51tuangou.com[/url]\nUSE: [url=http://www.51tuangou.com]链接文字[/url]");
	} else if (parent.basic) {
		AddTxt="[url][/url]";
		AddText(AddTxt);
	} else {
		txt2=prompt("链接文本显示.\n如果不想使用, 可以为空, 将只显示超级链接地址. ","");
		if (txt2!=null) {
			txt=prompt("超级链接.","http://");
			if (txt!=null) {
				if (txt2=="") {
					AddTxt="[url]"+txt;
					AddText(AddTxt);
					AddTxt="[/url]";
					AddText(AddTxt);
				} else {
					AddTxt="[url="+txt+"]"+txt2;
					AddText(AddTxt);
					AddTxt="[/url]";
					AddText(AddTxt);
				}
			}
		}
	}
}

function image() {
	if (parent.helpstat){
		alert("图片标记\n插入图片\n用法： [img]http:\/\/www.51tuangou.com\/images\/php.gif[/img]");
	} else if (parent.basic) {
		AddTxt="[img][/img]";
		AddText(AddTxt);
	} else {
		txt=prompt("图片的 URL","http://");
		if(txt!=null) {
			AddTxt="\r[img]"+txt;
			AddText(AddTxt);
			AddTxt="[/img]";
			AddText(AddTxt);
		}
	}
}

function wmv() {
	if (parent.helpstat){
		alert("WMV标记\n插入WMV\n用法： [wmv]http:\/\/www.51tuangou.com\/WMV\/php.WMV[/wmv]");
	} else if (parent.basic) {
		AddTxt="[wmv][/wmv]";
		AddText(AddTxt);
	} else {
		txt=prompt("电影的 URL","http://");
		if(txt!=null) {
			AddTxt="\r[wmv]"+txt;
			AddText(AddTxt);
			AddTxt="[/wmv]";
			AddText(AddTxt);
		}
	}
}

function sound() {
	if (parent.helpstat){
		alert("mid标记\n插入mid\n用法： [mid]http:\/\/www.51tuangou.com\/mid\/php.mid[/mid]");
	} else if (parent.basic) {
		AddTxt="[mid][/mid]";
		AddText(AddTxt);
	} else {
		txt=prompt("音乐的 URL","http://");
		if(txt!=null) {
			AddTxt="\r[mid]"+txt;
			AddText(AddTxt);
			AddTxt="[/mid]";
			AddText(AddTxt);
		}
	}
}

function showcode() {
	if (parent.helpstat) {
		alert("代码标记\n使用代码标记，可以使你的程序代码里面的 html 等标志不会被破坏.\n使用方法:\n [code]这里是代码文字[/code]");
	} else if (parent.basic) {
		AddTxt="\r[code]\r[/code]";
		AddText(AddTxt);
	} else {
		txt=prompt("输入代码","");
		if (txt!=null) { 
			AddTxt="\r[code]"+txt;
			AddText(AddTxt);
			AddTxt="[/code]";
			AddText(AddTxt);
		}
	}
}

function list() {
	if (parent.helpstat) {
		alert("列表标记\n建造一个文字或则数字列表.\nUSE: [list]\n[*]item1\n[*]item2\n[*]item3\n[/list]");
	} else if (parent.basic) {
		AddTxt="\r[list]\r[*]\r[*]\r[*]\r[/list]";
		AddText(AddTxt);
	} else {
		txt=prompt("列表类型\n输入 'A' 表示有序列表, '1' 表示无序列表, 留空表示无序列表.","");
		while ((txt!="") && (txt!="A") && (txt!="a") && (txt!="1") && (txt!=null)) {
			txt=prompt("错误!\n类型只能输入 'A' 、 '1' 或者留空.","");
		}
		if (txt!=null) {
			if ((txt=="") || (txt=="1")) {
				AddTxt="\r[list]\r\n";
			} else {
				AddTxt="\r[olist]\r\n";
			}
			ltxt="1";
			while ((ltxt!="") && (ltxt!=null)) {
				ltxt=prompt("列表项\n空白表示结束列表","");
				if (ltxt!="") {
					AddTxt+="[*]"+ltxt+"\r";
				}
			}
			if ((txt=="") || (txt=="1")) {
				AddTxt+="[/list]\r\n";
			} else {
				AddTxt+="[/olist]\r\n";
			} 
			AddText(AddTxt);
		}
	}
}
function underline() {
  	if (parent.helpstat) {
		alert("下划线标记\n给文字加下划线.\n用法: [u]要加下划线的文字[/u]");
	} else if (parent.basic) {
		AddTxt="[u][/u]";
		AddText(AddTxt);
	} else {
		txt=prompt("下划线文字.","文字");
		if (txt!=null) {
			AddTxt="[u]"+txt;
			AddText(AddTxt);
			AddTxt="[/u]";
			AddText(AddTxt);
		}
	}
}

function setswf() {
 	if (parent.helpstat){
		alert("Flash 动画\n插入 Flash 动画.\n用法: [flash=宽度,高度]Flash 文件的地址[/flash]");
	} else if (parent.basic) {
		AddTxt="[flash=400,300][/flash]";
		AddText(AddTxt);
	} else {
			txt2=prompt("宽度,高度","400,300");
		if (txt2!=null) {
			txt=prompt("Flash 文件的地址","http://");
			if (txt!=null) {
				if (txt2=="") {
					AddTxt="[flash=400,300]"+txt;
					AddText(AddTxt);
					AddTxt="[/flash]";
					AddText(AddTxt);
				} else {
					AddTxt="[flash="+txt2+"]"+txt;
					AddText(AddTxt);
					AddTxt="[/flash]";
					AddText(AddTxt);
				}
			}
		}
	}
}
