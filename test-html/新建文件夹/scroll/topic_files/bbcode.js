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
		alert("���ִ�С���\n�������ִ�С.\n�ɱ䷶Χ 1 - 6.\n 1 Ϊ��С 6 Ϊ���.\n�÷�: [size="+size+"]���� "+size+" ����[/size]");
	} else if (parent.basic) {
		AddTxt="[size="+size+"][/size]";
		AddText(AddTxt);
	} else {
		txt=prompt("��С "+size,"����");
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
		alert("������\n��������������.\n�÷�: [font="+font+"]�ı���������Ϊ"+font+"[/font]");
	} else if (parent.basic) {
		AddTxt="[font="+font+"][/font]";
		AddText(AddTxt);
	} else {
		txt=prompt("Ҫ�������������"+font,"����");
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
		alert("��ɫ���\n�����ı���ɫ.  �κ���ɫ�������Ա�ʹ��.\n�÷�: [color="+color+"]��ɫҪ�ı�Ϊ"+color+"������[/color]");
	} else if (parent.basic) {
		AddTxt="[color="+color+"][/color]";
		AddText(AddTxt);
	} else {  
     	txt=prompt("ѡ�����ɫ��: "+color,"����");
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
		alert("Email ���\n���� Email ��������\n�÷�1: [email]phpiscool\@163.com[/email]\n�÷�2: [email=phpiscool\@163.com]����[/email]");
	} else if (parent.basic) {
		AddTxt="[email][/email]";
		AddText(AddTxt);
	} else {
		txt2=prompt("������ʾ������.\n���Ϊ�գ���ô��ֻ��ʾ��� Email ��ַ","");
		if (txt2!=null) {
			txt=prompt("Email ��ַ.","name\@domain.com");      
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
		alert("�Ӵֱ��\nʹ�ı��Ӵ�.\n�÷�: [b]���ǼӴֵ�����[/b]");
	} else if (parent.basic) {
		AddTxt="[b][/b]";
		AddText(AddTxt);
	} else {
		txt=prompt("���ֽ������.","����");
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
		alert("б����\nʹ�ı������Ϊб��.\n�÷�: [i]����б����[/i]");
	} else if (parent.basic) {
		AddTxt="[i][/i]";
		AddText(AddTxt);
	} else {
		txt=prompt("���ֽ���б��","����");
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
		alert("���ñ��\n����һЩ����.\n�÷�: [quote]��������[/quote]");
	} else if (parent.basic) {
		AddTxt="[quote][/quote]";
		AddText(AddTxt);
	} else {
		txt=prompt("�����õ�����","����");
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
		alert("���б��\nʹ���ַ���.\n�÷�: [fly]����Ϊ��������[/fly]");
	} else if (parent.basic) {
		AddTxt="[fly][/fly]";
		AddText(AddTxt);
	} else {
		txt=prompt("��������","����");
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
		alert("�ƶ����\nʹ���ֲ����ƶ�Ч��.\n�÷�: [move]Ҫ�����ƶ�Ч��������[/move]");
	} else if (parent.basic) {
		AddTxt="[move][/move]";
		AddText(AddTxt);
	} else {
		txt=prompt("Ҫ�����ƶ�Ч��������","����");
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
alert("��Ӱ���\nʹ���ֲ�����ӰЧ��.\n�÷�: [SHADOW=���, ��ɫ, �߽�]Ҫ������ӰЧ��������[/SHADOW]");
	} else if (parent.basic) {
		AddTxt="[SHADOW=255,blue,1][/SHADOW]";
		AddText(AddTxt);
	} else {
		txt2=prompt("���ֵĳ��ȡ���ɫ�ͱ߽��С","255,blue,1");
		if (txt2!=null) {
			txt=prompt("Ҫ������ӰЧ��������","����");
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
		alert("���α��\nʹ���ֲ�������Ч��.\n�÷�: [GLOW=���, ��ɫ, �߽�]Ҫ��������Ч��������[/GLOW]");
	} else if (parent.basic) {
		AddTxt="[glow=255,red,2][/glow]";
		AddText(AddTxt);
	} else {
		txt2=prompt("���ֵĳ��ȡ���ɫ�ͱ߽��С","255,red,2");
		if (txt2!=null) {
			txt=prompt("Ҫ��������Ч��������.","����");
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
		alert("������\nʹ��������, ����ʹ�ı�����롢���С��Ҷ���.\n�÷�: [align=center|left|right]Ҫ������ı�[/align]");
	} else if (parent.basic) {
		AddTxt="[align=center|left|right][/align]";
		AddText(AddTxt);
	} else {
		txt2=prompt("������ʽ\n���� 'center' ��ʾ����, 'left' ��ʾ�����, 'right' ��ʾ�Ҷ���.","center");
		while ((txt2!="") && (txt2!="center") && (txt2!="left") && (txt2!="right") && (txt2!=null)) {
			txt2=prompt("����!\n����ֻ������ 'center' �� 'left' ���� 'right'.","");
		}
		txt=prompt("Ҫ������ı�","�ı�");
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
		alert("�������ӱ��\n����һ���������ӱ��\nʹ�÷���: [url]http://www.51tuangou.com[/url]\nUSE: [url=http://www.51tuangou.com]��������[/url]");
	} else if (parent.basic) {
		AddTxt="[url][/url]";
		AddText(AddTxt);
	} else {
		txt2=prompt("�����ı���ʾ.\n�������ʹ��, ����Ϊ��, ��ֻ��ʾ�������ӵ�ַ. ","");
		if (txt2!=null) {
			txt=prompt("��������.","http://");
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
		alert("ͼƬ���\n����ͼƬ\n�÷��� [img]http:\/\/www.51tuangou.com\/images\/php.gif[/img]");
	} else if (parent.basic) {
		AddTxt="[img][/img]";
		AddText(AddTxt);
	} else {
		txt=prompt("ͼƬ�� URL","http://");
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
		alert("WMV���\n����WMV\n�÷��� [wmv]http:\/\/www.51tuangou.com\/WMV\/php.WMV[/wmv]");
	} else if (parent.basic) {
		AddTxt="[wmv][/wmv]";
		AddText(AddTxt);
	} else {
		txt=prompt("��Ӱ�� URL","http://");
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
		alert("mid���\n����mid\n�÷��� [mid]http:\/\/www.51tuangou.com\/mid\/php.mid[/mid]");
	} else if (parent.basic) {
		AddTxt="[mid][/mid]";
		AddText(AddTxt);
	} else {
		txt=prompt("���ֵ� URL","http://");
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
		alert("������\nʹ�ô����ǣ�����ʹ��ĳ����������� html �ȱ�־���ᱻ�ƻ�.\nʹ�÷���:\n [code]�����Ǵ�������[/code]");
	} else if (parent.basic) {
		AddTxt="\r[code]\r[/code]";
		AddText(AddTxt);
	} else {
		txt=prompt("�������","");
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
		alert("�б���\n����һ�����ֻ��������б�.\nUSE: [list]\n[*]item1\n[*]item2\n[*]item3\n[/list]");
	} else if (parent.basic) {
		AddTxt="\r[list]\r[*]\r[*]\r[*]\r[/list]";
		AddText(AddTxt);
	} else {
		txt=prompt("�б�����\n���� 'A' ��ʾ�����б�, '1' ��ʾ�����б�, ���ձ�ʾ�����б�.","");
		while ((txt!="") && (txt!="A") && (txt!="a") && (txt!="1") && (txt!=null)) {
			txt=prompt("����!\n����ֻ������ 'A' �� '1' ��������.","");
		}
		if (txt!=null) {
			if ((txt=="") || (txt=="1")) {
				AddTxt="\r[list]\r\n";
			} else {
				AddTxt="\r[olist]\r\n";
			}
			ltxt="1";
			while ((ltxt!="") && (ltxt!=null)) {
				ltxt=prompt("�б���\n�հױ�ʾ�����б�","");
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
		alert("�»��߱��\n�����ּ��»���.\n�÷�: [u]Ҫ���»��ߵ�����[/u]");
	} else if (parent.basic) {
		AddTxt="[u][/u]";
		AddText(AddTxt);
	} else {
		txt=prompt("�»�������.","����");
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
		alert("Flash ����\n���� Flash ����.\n�÷�: [flash=���,�߶�]Flash �ļ��ĵ�ַ[/flash]");
	} else if (parent.basic) {
		AddTxt="[flash=400,300][/flash]";
		AddText(AddTxt);
	} else {
			txt2=prompt("���,�߶�","400,300");
		if (txt2!=null) {
			txt=prompt("Flash �ļ��ĵ�ַ","http://");
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
