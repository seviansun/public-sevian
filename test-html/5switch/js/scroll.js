$.fn.scrollFun = function(options) {
	options = $.extend({
		CONTAINER: ".scrollContainer",
		ITEM: ".scrollItem",
		TIME: 5000,
		MOVETIME: 500
	}, options);
	var timer;
	var cur = $(this);
	var container = cur.find(options.CONTAINER);
	var itmes = cur.find(options.ITEM);
	var moveDistance = itmes.first().outerWidth(true);

	function move() {
		container.animate({
			marginLeft: "-" + moveDistance + "px"
		}, options.MOVETIME, function() {
			$(this).find("li:first").appendTo(this);
			$(this).css({
				marginLeft: "0px"
			});
		});
	}

	function scrollRepeat() {
		timer = setInterval(function() {
			move();
		}, options.TIME);
	}
	itmes.hover(

	function() {
		if(timer) {
			clearInterval(timer);
		}
	}, function() {
		if(timer) {
			clearInterval(timer);
			scrollRepeat();
		}
	})
	setTimeout(function() {
		scrollRepeat()
	}, options.TIME);
}
$.fn.focusAdFun = function(options) {
	options = $.extend({
		CONTAINER: ".scrollContainer",
		ITEM: ".scrollItem",
		TIME: 5000,
		MOVETIME: 500,
		NAV: true,
		NAVCONTAINER: ".navCon",
		NAVITEM: ".navItem"
	}, options);
	var timer;
	var cur = $(this);
	var container = cur.find(options.CONTAINER);
	var itmes = cur.find(options.ITEM);
	var moveDistance = itmes.first().outerWidth(true);
	var globalIndexNum = 1;
	var direction = -1;
	var itemsNum = itmes.length;
	var str = "";
	var navCon = cur.find(options.NAVCONTAINER);
	for(var i = 0; i < itemsNum; i++) {
		str += "<li class='navItem'>" + i + "</li>
";
	}
	navCon.html(str);
	var navItem = navCon.find(options.NAVITEM);
	var cloneLi = $(this).find("li:first").clone(true);

	function move() {
		container.animate({
			marginLeft: (moveDistance * globalIndexNum * direction) + "px"
		}, options.MOVETIME, function() {
			if(globalIndexNum == itemsNum) {
				cloneLi.appendTo(container);
			} else if(globalIndexNum == itemsNum + 1) {
				cloneLi.remove();
				$(this).css({
					marginLeft: "0px"
				});
				globalIndexNum = 0;
				move();
			}
		});
		navItem.removeClass("selected");
		if(globalIndexNum == (itemsNum)) {
			navItem.eq(0).addClass("selected");
		} else {
			navItem.eq(globalIndexNum).addClass("selected");
		}
		globalIndexNum++;
	}

	function scrollRepeat() {
		timer = setInterval(function() {
			move();
		}, options.TIME);
	}
	itmes.hover(

	function() {
		if(timer) {
			clearInterval(timer);
		}
	}, function() {
		if(timer) {
			clearInterval(timer);
			scrollRepeat();
		}
	});
	navItem.hover(

	function() {
		if(timer) {
			globalIndexNum = parseInt($(this).html());
			clearInterval(timer);
			container.stop();
			move();
		} else {
			globalIndexNum = parseInt($(this).html());
			move();
		}
	}, function() {
		if(timer) {
			clearInterval(timer);
			scrollRepeat();
		}
	});
	navCon.find("li:first").addClass("selected");
	setTimeout(function() {
		scrollRepeat();
	}, options.TIME);
}