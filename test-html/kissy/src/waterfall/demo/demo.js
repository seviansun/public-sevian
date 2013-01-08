﻿KISSY.use("waterfall,ajax,template,node,button", function (S, Waterfall, io, Template, Node, Button) {
    var $ = Node.all;

    var tpl = Template($('#tpl').html()),
        nextpage = 1,
        waterfall = new Waterfall.Loader({
            container:"#ColumnContainer",
            load:function (success, end) {
                $('#loadingPins').show();
                S.ajax({
                    data:{
                        'method':'flickr.photos.search',
                        'api_key':'5d93c2e473e39e9307e86d4a01381266',
                        'tags':'rose',
                        'page':nextpage,
                        'per_page':20,
                        'format':'json'
                    },
                    url:'http://api.flickr.com/services/rest/',
                    dataType:"jsonp",
                    jsonp:"jsoncallback",
                    success:function (d) {
                   
                        // 如果数据错误, 则立即结束
                        if (d.stat !== 'ok') {
                            alert('load data error!');
                            end();
                            return;
                        }
                        // 如果到最后一页了, 也结束加载
                        nextpage = d.photos.page + 1;
                        if (nextpage > d.photos.pages) {
                            end();
                            return;
                        }
                        // 拼装每页数据
                        var items = [];
                        S.each(d.photos.photo, function (item) {
                            item.height = 300; // fake height
                            items.push(new S.Node(tpl.render(item)));
                        });
                        success(items);
                    },
                    complete:function () {
                        $('#loadingPins').hide();
                    }
                });
            },
            minColCount:3,
            colWidth:300
        });
    waterfall.on('adjustComplete', function () {
        S.log('after adjust complete!');
    });
    waterfall.on('addComplete', function () {
        S.log('after add complete!');
    });
    // scrollTo
    $('#BackToTop').on('click', function (e) {
        e.halt();
        e.preventDefault();
        $(window).stop();
        $(window).animate({
            scrollTop:0
        }, 1);
    });

    var b1 = new Button({
        content:"停止加载",
        render:"#button_container",
        prefixCls:"goog-"
    });
});
