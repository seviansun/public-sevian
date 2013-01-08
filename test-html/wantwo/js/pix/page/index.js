/**
 * @fileoverview Index Script
 * @author fahai@taobao.com
 */
KISSY.ready(function (S) {

    S.add("pix/inject-slides", function (S, Node, Template, matrix) {
        var $ = Node.all;

        var template = '{{#each buffer as pic}}' +
            '<li class="picture">' +
            '<a href="{{pic.href}}" target="_blank">' +
            '<img alt="{{pic.desc}}" data-ks-lazyload="{{pic.src}}" width="164" height="164"/>' +
            '<em>{{pic.desc}}</em>' +
            '{{#if pic.hot}}' +
            '<span class="icon"></span>' +
            '{{/if}}' +
            '</a>' +
            '</li>' +
            '{{/each}}';

        var buffer = [],
            categoryNum = matrix.length;

        var hasMore = true, j = 0;

        while (hasMore) {

            hasMore = false;

            for (var i = 0; i < categoryNum; i++) {
                var category = matrix[i];

                var currentItem = category[j];
                if (currentItem) {
                    buffer.push(currentItem);
                    hasMore = true;
                }
            }
            j++;
        }

        var length = buffer.length,
            lA = Math.floor(length / 3),
            lB = lA,
            lC = length - lA - lB;

        var bA = buffer.slice(0, lA),
            bB = buffer.slice(lA, lA + lB).reverse(),
            bC = buffer.slice(lA + lB);


        var outputA = Template(template).render({
            buffer: bA
        }),
            outputB = Template(template).render({
                buffer: bB
            }),
            outputC = Template(template).render({
                buffer: bC
            });

        $("#you-may-like .wrap").item(0).html(outputA);
        $("#you-may-like .wrap").item(1).html(outputB);
        $("#you-may-like .wrap").item(2).html(outputC);

    }, {
        requires: [
            "node",
            "template",
            "pix/json/slides"
        ],
        attach: false
    });

    S.use("datalazyload, switchable, node, pix/inject-slides", function (S, Lazy, Switchable, Node, Injection) {

        new Lazy();

        var Slide = Switchable.Slide, DOM = S.DOM, $ = Node.all;

        var DELAY = 4, INTERVAL = 5, DURATION = 1,
            COUNT = 6;

        var slides = [];

        // play slides
        S.query("#you-may-like .pic-list").each(function (picList, i) {

            var s = new Slide(picList, {
                circular: true,
                contentCls: "wrap",
                steps: 1,
                autoplay: true,
                pauseOnHover: true,
                effect: "scrollx",
                hasTriggers: false,
                interval: INTERVAL,
                duration: DURATION
            });

            s.stop();
            S.later(function () {
                s.start();
            }, DURATION * i * 1000);

            slides.push(s);

            var panels = s.panels,
                offsetWidth = panels[0].offsetWidth,
                totalWidth = offsetWidth * panels.length,
                lastIndex = panels.length - COUNT + 1;

            s.on("beforeSwitch", function (e) {
                var toIndex = e.toIndex;
                if (toIndex >= lastIndex) {
                    var gap = toIndex - lastIndex;
                    DOM.css(panels[gap], {
                        position: "relative",
                        left: totalWidth
                    });
                }
            });

            s.on("switch", function (e) {
                if (e.currentIndex == 0) {
                    for (var i = 1; i < COUNT; i++) {
                        DOM.css(panels[i], {
                            position: "",
                            left: ""
                        });
                    }
                }
            });
        });

        $("#you-may-like .content").on("mouseenter",
            function (e) {
                S.each(slides, function (s) {
                    s.stop();
                });
            }).on("mouseleave", function (e) {
                S.each(slides, function (s, i) {
                    S.later(function () {
                        s.start();
                    }, DURATION * i * 1000);
                });
            });
    });

});