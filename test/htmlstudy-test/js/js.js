 //16
 $(function(){

	$(".has_children").click(
		function(){
		$(this).addClass("highlight");
		$(this).children("a").show();
		$(this).siblings().removeClass("highlight");
		$(this).siblings().children("a").hide();
		});
});