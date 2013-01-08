/**
 * module meta info for auto combo
 * @author yiminghe@gmail.com
 */
(function (S) {
    S.add({

        /****************************
         * Core
         ****************************/
        "dom":{
            requires:["ua"]
        },
        "event":{
            requires:["dom"]
        },
        "ajax":{
            requires:["dom", "event", "json"]
        },
        "anim":{
            requires:["dom", "event"]
        },
        "base":{
            requires:["event"]
        },
        "node":{
            requires:["dom", "event", "anim"]
        },
        core:{
            alias:["dom", "event", "ajax", "anim", "base", "node", "json"]
        },

        /******************************
         *  Infrastructure
         ******************************/
        "uibase":{
            requires:['base', 'node']
        },
        "mvc":{
            requires:["base", "ajax"]
        },
        "component":{
            requires:["uibase", "node"]
        },

        /****************************
         *  UI Component
         ****************************/

        "input-selection":{
            requires:['dom']
        },
        "button":{
            requires:["component", "node"]
        },
        "overlay":{
            requires:["component", "node"]
        },
        "resizable":{
            requires:["base", "node"]
        },
        "menu":{
            requires:["component", "node"]
        },
        "menubutton":{
            requires:["menu", "button"]
        },
        "validation":{
            requires:["node", "ajax"]
        },
        "waterfall":{
            requires:["node", "base", "ajax"]
        },
        "tree":{
            requires:["component", "node"]
        },
        "suggest":{
            requires:["dom", "event"]
        },
        "switchable":{
            requires:["dom", "event", "anim", "json"]
        },
        "calendar":{
            requires:["node"]
        },
        "datalazyload":{
            requires:["dom", "event"]
        },
        "dd":{
            requires:["node", "base"]
        },
        "flash":{
            requires:["dom", "json"]
        },
        "imagezoom":{
            requires:["node", "uibase"]
        },
        "editor":{
            requires:['htmlparser', 'core']
        }
    });

})(KISSY);
/**
 * TODO: implement conditional loader
 * TODO: should be auto generated by module compiler
 **/