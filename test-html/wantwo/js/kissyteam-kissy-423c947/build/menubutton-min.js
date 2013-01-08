/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Mar 23 12:19
*/
KISSY.add("menubutton/base",function(d,j,l,e,k,t,r,s){function h(a,c){var g=a.get("menu");if(d.isFunction(g))if(c){g=g.call(a);a.__set("menu",g)}else return null;if(g&&g.get("parent")!==a){g.__set("parent",a);a.__bindMenu()}return g}function m(){var a=h(this);a&&a.get("visible")&&a.set("align",d.merge({node:this.get("el")},o,this.get("menuAlign")))}var b=d.Env.host,f=l.all,i=l.KeyCodes,o={points:["bl","tl"],overflow:{failX:1,failY:1,adjustX:1,adjustY:1}},p=j.create(e,[r.DecorateChild],{_getMenu:function(a){return h(this,
a)},initializer:function(){this._reposition=d.buffer(m,50,this)},_hideMenu:function(){var a=h(this);a&&a.hide()},_showMenu:function(){var a=this.get("el"),c=h(this,1);if(c&&!c.get("visible")){c.set("align",d.merge({node:a},o,this.get("menuAlign")));c.show();a.attr("aria-haspopup",c.get("el").attr("id"))}},_uiSetCollapsed:function(a){a?this._hideMenu():this._showMenu()},__bindMenu:function(){var a=this,c=h(a);if(c){c.on("afterActiveItemChange",function(g){a.set("activeItem",g.newVal)});c.on("click",
a._handleMenuClick,a);f(b).on("resize",a._reposition,a);a.__bindMenu=d.noop}},_handleMenuClick:function(a){this.fire("click",{target:a.target})},bindUI:function(){this.__bindMenu()},_handleKeyEventInternal:function(a){var c=h(this);if(a.keyCode==i.SPACE){a.preventDefault();if(a.type!="keyup")return s}else if(a.type!="keydown")return s;if(c&&c.get("visible")){c=c._handleKeydown(a);if(a.keyCode==i.ESC){this.set("collapsed",true);return true}return c}if(a.keyCode==i.SPACE||a.keyCode==i.DOWN||a.keyCode==
i.UP){this.set("collapsed",false);return true}return s},_performInternal:function(){this.set("collapsed",!this.get("collapsed"))},_handleBlur:function(a){p.superclass._handleBlur.call(this,a);this.set("collapsed",true)},constructMenu:function(){var a=new t.PopupMenu(d.mix({prefixCls:this.get("prefixCls")},this.get("menuCfg")));this.__set("menu",a);this.__bindMenu();return a},getMenu:function(){var a=h(this);a||(a=this.constructMenu());return a},addItem:function(a,c){this.getMenu().addChild(a,c)},
removeItem:function(a,c){var g=h(this);g&&g.removeChild(a,c)},removeItems:function(a){var c=h(this);c&&c.removeChildren(a)},getItemAt:function(a){var c=h(this);return c&&c.getChildAt(a)},_uiSetDisabled:function(a){p.superclass._uiSetDisabled.apply(this,d.makeArray(arguments));!a&&this.set("collapsed",true)},decorateChildrenInternal:function(a,c,g){c.css("visibility","hidden");d.one(c[0].ownerDocument.body).prepend(c);this.__set("menu",new a(d.mix({srcNode:c,prefixCls:g},this.get("menuCfg"))))},destructor:function(){var a=
h(this);f(b).detach("resize",this._reposition,this);a&&a.destroy()}},{ATTRS:{activeItem:{view:true},menuAlign:{value:{}},menuCfg:{},decorateChildCls:{value:"popupmenu"},menu:{},collapsed:{value:true,view:true}},DefaultRender:k});r.UIStore.setUIByClass("menu-button",{priority:r.UIStore.PRIORITY.LEVEL2,ui:p});return p},{requires:["uibase","node","button","./menubuttonrender","menu","component"]});
KISSY.add("menubutton",function(d,j,l,e,k){j.Render=l;j.Select=e;j.Option=k;return j},{requires:["menubutton/base","menubutton/menubuttonrender","menubutton/select","menubutton/option"]});
KISSY.add("menubutton/menubuttonrender",function(d,j,l){return j.create(l.Render,{createDom:function(){var e=this.get("innerEl"),k=d.substitute('<div class="{prefixCls}inline-block {prefixCls}menu-button-caption">{content}</div><div class="{prefixCls}inline-block {prefixCls}menu-button-dropdown">&nbsp;</div>',{content:this.get("content")||"",prefixCls:this.get("prefixCls")});e.html(k).attr("aria-haspopup",true)},_uiSetContent:function(e){var k=this.get("el").one("."+this.getCls("menu-button-caption"));
k.html("");e&&k.append(e)},_uiSetCollapsed:function(e){var k=this.get("el"),t=this.getCls("menu-button-open");k[e?"removeClass":"addClass"](t).attr("aria-expanded",!e)},_uiSetActiveItem:function(e){this.get("el").attr("aria-activedescendant",e&&e.get("el").attr("id")||"")}},{ATTRS:{activeItem:{},collapsed:{}}})},{requires:["uibase","button"]});
KISSY.add("menubutton/option",function(d,j,l,e){d=j.create(e.Item,{},{ATTRS:{selectable:{value:true}}});l.UIStore.setUIByClass("option",{priority:10,ui:d});return d},{requires:["uibase","component","menu"]});
KISSY.add("menubutton/select",function(d,j,l,e,k,t,r,s){function h(b){return(b=b._getMenu(1))&&b.get("children")||[]}var m=l.create(k,{__bindMenu:function(){var b=this._getMenu();m.superclass.__bindMenu.call(this);b&&b.on("show",this._handleMenuShow,this)},_handleMenuShow:function(){var b=this.get("menu");b.set("highlightedItem",this.get("selectedItem")||b.getChildAt(0))},_updateCaption:function(){var b=this.get("selectedItem");this.set("content",b?b.get("content"):this.get("defaultCaption"))},_handleMenuClick:function(b){this.set("selectedItem",
b.target);this.set("collapsed",true);m.superclass._handleMenuClick.call(this,b)},removeItems:function(){m.superclass.removeItems.apply(this,arguments);this.set("selectedItem",null)},removeItem:function(b){m.superclass.removeItem.apply(this,arguments);b==this.get("selectedItem")&&this.set("selectedItem",null)},_uiSetSelectedItem:function(b,f){f&&f.prevVal&&f.prevVal.set("selected",false);this._updateCaption()},_uiSetDefaultCaption:function(){this._updateCaption()}},{ATTRS:{value:{getter:function(){var b=
this.get("selectedItem");return b&&b.get("value")},setter:function(b){for(var f=h(this),i=0;i<f.length;i++){var o=f[i];if(o.get("value")==b){this.set("selectedItem",o);return}}this.set("selectedItem",null);return null}},selectedItem:{},selectedIndex:{setter:function(b){var f=h(this);if(b<0||b>=f.length)return-1;this.set("selectedItem",f[b])},getter:function(){return d.indexOf(this.get("selectedItem"),h(this))}},defaultCaption:{value:""}}});m.decorate=function(b,f){b=d.one(b);f=f||{};f.elBefore=b;
var i,o=[],p=null,a=b.val();i=b.all("option");d.mix(f,{menu:function(){for(var n=this.constructMenu(),q=0;q<o.length;q++)n.addChild(new r(o[q]));return n}});i.each(function(n){var q={content:n.text(),prefixCls:f.prefixCls,elCls:n.attr("class"),value:n.val()};if(a==n.val())p={content:q.content,value:q.value};o.push(q)});var c=new m(d.mix(f,p));c.render();if(i=b.attr("name")){var g=(new j("<input type='hidden' name='"+i+"' value='"+a+"'>")).insertBefore(b,s);c.on("afterSelectedItemChange",function(n){n.newVal?
g.val(n.newVal.get("value")):g.val("")})}b.remove();return c};e.UIStore.setUIByClass("select",{priority:e.UIStore.PRIORITY.LEVEL3,ui:m});return m},{requires:["node","uibase","component","./base","menu","./option"]});
