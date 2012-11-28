/**
 * imageauto 0.2 - jQuery plugin
 * http://k88.cn
 * 图片预加载、自动缩放、垂直居中、浏览链接
 */
(function($){

    var defaults = {
        width: 0,
        height: 0,
        imgError: false,
        middle: false,
        cursor: ""
    };

    $.fn.imageauto = function (options) {
        return this.each(function () {
            var $this = $(this).hide();
            var $parent = $this.parent();
            var settings = $.extend(true, {}, defaults, options);

            if (0 === settings.width) {
                settings.width = $parent.width();
            }

            if (0 === settings.height) {
                settings.height = $parent.height();
            }

            //preload
            var img = new Image();
            img.src = $this.attr("src");
            if (img.complete) {
                $this.css(scaling(img, settings)).show();
            } else {
                $(img).load(function () {
                    $this.css(scaling(img, settings)).show();
                }).error(function () {
                    if (settings.imgError) {
                        $this.attr("src", settings.imgError);
                    } else {
                        $this.replaceWith('<span class="imgerr">' + ($this.attr('alt') || '该图无法显示') + '</span>');
                    }
                });
            }
        });
    }

    //scaling
    function scaling(img, settings) {
        var size = {
            width: img.width,
            height: img.height,
            cursor: ""
        };
        if (size.width / size.height >= settings.width / settings.height) {
            if (size.width > settings.width) {
                size.height = parseInt(size.height * settings.width / size.width);
                size.width = settings.width;
                size.cursor = settings.cursor;
            }
        } else {
            if (size.height > settings.height) {
                size.width = parseInt(size.width * settings.height / size.height);
                size.height = settings.height;
                size.cursor = settings.cursor;
            }
        }
        if (settings.middle) {
            if (size.height < settings.height) {
                size['margin-top'] = parseInt((settings.height - size.height) / 2);
            } else {
                size['margin-top'] = 0;
            }
        }
        return size;
    }

})(jQuery);
