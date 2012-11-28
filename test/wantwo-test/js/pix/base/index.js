KISSY.ready(function (S) {

    S.use("node, pixel/util/" +
            (S.UA.ie == 6 ? ", pixel/uploader/, pixel/set-manager/" : ""), function (S, Node, util) {

        var $ = Node.all;

        // 本地上传
        $("#local-upload-entry").on("click", function () {

            S.use("pixel/uploader/", function (S, uploader) {
                uploader.local.init();
            });

        });

        // 新建图集
        $("#create-set-entry").on("click", function () {

            S.use("pixel/set-manager/", function (S, setManager) {
                setManager.creator.init();
            });
        });

        // 兼容性问题
        util.IEHack.addFeature([
            "#header .multi-nav",
            "#header .my-entries",
            "#header .add-item"
        ], "hover");
        util.WebForm.addFeature("#pix-search-input", "placeholder");

        // 搜索无输入内容
        $("#pix-search-form").on("submit", function (e) {
            var input = $("#pix-search-input");
            if (!input.val() || input.hasClass("placeholder")) {
                e.preventDefault();
            }
        });
    });

});
KISSY.use("pixel/follow/, pixel/util/", function (S, Follow, Util) {

    // IE HACK
    Util.IEHack.addFeature(["#user-info .avatar"], "hover");

    /*
    * action: follow
    * folloCallbacks{object}包含了两个回调函数，关注成功和关注失败
    * */
    var D = S.DOM, $ = S.Node.all;
    //个人中心页面需要引入关注模块
    if(!!D.get("#user-info")) {
        var followCallbacks = {
            "followSuccess" : function(ev) {
                var bilateral_follow = $("img",$(ev.target).parent(".action"));
                if(!!bilateral_follow){
                    if(bilateral_follow.attr("data-twoway") == "true") {
                        bilateral_follow.show();
                    }
                }
                var unfollow = $(".pix-unfollow",$(ev.target).parent(".action"));
                if(!!unfollow) {unfollow.css("display","inline-block"),unfollow.css("visibility","visible");}
            },
            "unfollowSuccess" : function(ev) {
                var bilateral_follow = $("img",$(ev.target).parent(".action"));
                if(!!bilateral_follow){bilateral_follow.hide();}
                var unfollow = $(".pix-unfollow",$(ev.target).parent(".action"));
                if(!!unfollow){unfollow.css("display","inline-block"),unfollow.css("visibility","hidden");}
            }
        };
        new Follow(followCallbacks);
    }

});