< script type = "text/javascript" > 
(function() {
  var rank = $(".part2-left");
  var rankleft = $(".part2-left li");
  var rankright = $(".part2-middle li");
  rankleft.each(function(i) {
    var that = $(this);
    that.hover(function() {
      rankright.each(function(j) {
        if(i == j) {
          $(this).show();
        } else {
          $(this).hide();
        }
      })
    })
  })
})()
< /script>