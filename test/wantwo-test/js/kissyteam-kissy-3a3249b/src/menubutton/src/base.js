/**
 * @fileOverview combination of menu and button ,similar to native select
 * @author yiminghe@gmail.com
 */
KISSY.add("menubutton/base", function (S, UIBase, Node, Button, MenuButtonRender, Menu, Component, undefined) {

    var win = S.Env.host;

    function getMenu(self, init) {
        var m = self.get("menu");
        if (S.isFunction(m)) {
            if (init) {
                m = m.call(self);
                self.__set("menu", m);
            } else {
                return null;
            }
        }
        if (m && m.get("parent") !== self) {
            m.__set("parent", self);
            self.__bindMenu();
        }
        return m;
    }

    function _reposition() {
        var self = this,
            menu = getMenu(self);
        if (menu &&
            menu.get("visible")) {
            menu.set("align", S.merge({
                node:self.get("el")
            }, ALIGN, self.get("menuAlign")));
        }
    }

    var $ = Node.all,
        KeyCodes = Node.KeyCodes,
        ALIGN = {
            points:["bl", "tl"],
            overflow:{
                failX:1,
                failY:1,
                adjustX:1,
                adjustY:1
            }
        },
        /**
         * @name MenuButton
         * @constructor
         * @extends Button
         */
            MenuButton =
            UIBase.create(Button, [Component.DecorateChild], {

                _getMenu:function (init) {
                    return getMenu(this, init);
                },

                initializer:function () {
                    this._reposition = S.buffer(_reposition, 50, this);
                },

                /**
                 * private
                 */
                _hideMenu:function () {
                    var menu = getMenu(this);
                    if (menu) {
                        menu.hide();
                    }
                },

                /**
                 * private
                 */
                _showMenu:function () {
                    var self = this,
                        el = self.get("el"),
                        menu = getMenu(self, 1);
                    if (menu && !menu.get("visible")) {
                        menu.set("align", S.merge({
                            node:el
                        }, ALIGN, self.get("menuAlign")));
                        menu.show();
                        el.attr("aria-haspopup", menu.get("el").attr("id"));
                    }
                },

                _uiSetCollapsed:function (v) {
                    if (v) {
                        this._hideMenu();
                    } else {
                        this._showMenu();
                    }
                },

                /**
                 * 产生菜单时对菜单监听，只监听一次
                 * @protected
                 */
                __bindMenu:function () {
                    var self = this,
                        menu = getMenu(self);
                    if (menu) {
                        menu.on("afterActiveItemChange", function (ev) {
                            self.set("activeItem", ev.newVal);
                        });

                        menu.on("click", self._handleMenuClick, self);

                        //窗口改变大小，重新调整
                        $(win).on("resize", self._reposition, self);
                        /*
                         bind 与 getMenu 都可能调用，时序不定
                         */
                        self.__bindMenu = S.noop;
                    }
                },

                /**
                 * @protected
                 */
                _handleMenuClick:function (e) {
                    var self = this;
                    self.fire("click", {
                        target:e.target
                    });
                },

                /**
                 * @private
                 */
                bindUI:function () {
                    this.__bindMenu();
                },

                /**
                 * @inheritDoc
                 */
                _handleKeyEventInternal:function (e) {
                    var self = this,
                        menu = getMenu(self);

                    // space 只在 keyup 时处理
                    if (e.keyCode == KeyCodes.SPACE) {
                        // Prevent page scrolling in Chrome.
                        e.preventDefault();
                        if (e.type != "keyup") {
                            return undefined;
                        }
                    } else if (e.type != "keydown") {
                        return undefined;
                    }
                    //转发给 menu 处理
                    if (menu && menu.get("visible")) {
                        var handledByMenu = menu._handleKeydown(e);
                        // esc
                        if (e.keyCode == KeyCodes.ESC) {
                            self.set("collapsed", true);
                            return true;
                        }
                        return handledByMenu;
                    }

                    // Menu is closed, and the user hit the down/up/space key; open menu.
                    if (e.keyCode == KeyCodes.SPACE ||
                        e.keyCode == KeyCodes.DOWN ||
                        e.keyCode == KeyCodes.UP) {
                        self.set("collapsed", false);
                        return true;
                    }
                    return undefined;
                },

                /**
                 * handle click or enter key
                 */
                _performInternal:function () {
                    var self = this;
                    self.set("collapsed", !self.get("collapsed"));

                },

                /**
                 * @inheritDoc
                 */
                _handleBlur:function (e) {
                    var self = this;
                    MenuButton.superclass._handleBlur.call(self, e);
                    // such as : click the document
                    self.set("collapsed", true);
                },

                constructMenu:function () {
                    var self = this,
                        m = new Menu.PopupMenu(S.mix({
                            prefixCls:self.get("prefixCls")
                        }, self.get("menuCfg")));
                    self.__set("menu", m);
                    self.__bindMenu();
                    return m;
                },

                /**
                 * if no menu , then construct
                 * @private
                 */
                getMenu:function () {
                    var self = this,
                        m = getMenu(self);
                    if (!m) {
                        m = self.constructMenu();
                    }
                    return m;
                },

                /**
                 * Adds a new menu item at the end of the menu.
                 * @param item Menu item to add to the menu.
                 */
                addItem:function (item, index) {
                    this.getMenu().addChild(item, index);
                },

                removeItem:function (c, destroy) {
                    /**
                     * @type Controller
                     */
                    var menu = getMenu(this);
                    if (menu) {
                        menu.removeChild(c, destroy);
                    }
                },

                removeItems:function (destroy) {
                    var menu = getMenu(this);
                    menu && menu.removeChildren(destroy);
                },

                getItemAt:function (index) {
                    var menu = getMenu(this);
                    return menu && menu.getChildAt(index);
                },

                // 禁用时关闭已显示菜单
                _uiSetDisabled:function (v) {
                    var self = this;
                    MenuButton.superclass._uiSetDisabled.apply(self, S.makeArray(arguments));
                    !v && self.set("collapsed", true);
                },

                /**
                 * @private
                 */
                decorateChildrenInternal:function (ui, el, cls) {
                    // 不能用 diaplay:none , menu 的隐藏是靠 visibility
                    // eg: menu.show(); menu.hide();
                    el.css("visibility", "hidden");
                    var self = this,
                        docBody = S.one(el[0].ownerDocument.body);
                    docBody.prepend(el);
                    var menu = new ui(S.mix({
                        srcNode:el,
                        prefixCls:cls
                    }, self.get("menuCfg")));
                    self.__set("menu", menu);
                },

                /**
                 * @private
                 */
                destructor:function () {
                    var self = this, menu = getMenu(self);
                    $(win).detach("resize", self._reposition, self);
                    menu && menu.destroy();
                }

            }, {
                ATTRS:{
                    activeItem:{
                        view:true
                    },
                    menuAlign:{
                        value:{}
                    },
                    menuCfg:{},
                    decorateChildCls:{
                        value:"popupmenu"
                    },
                    // 不关心选中元素 , 由 select 负责
                    // selectedItem
                    menu:{},
                    collapsed:{
                        value:true,
                        view:true
                    }
                },
                DefaultRender:MenuButtonRender
            });

    Component.UIStore.setUIByClass("menu-button", {
        priority:Component.UIStore.PRIORITY.LEVEL2,
        ui:MenuButton
    });

    if (1 > 2) {
        MenuButton.getItemAt();
    }

    return MenuButton;
}, {
    requires:["uibase", "node", "button", "./menubuttonrender", "menu", "component"]
});