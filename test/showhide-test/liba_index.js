 $(function(){

	$(".ob").hover(
			function(){
				$(this).find(".ui-ob-banned").show();
				},
			function(){
				$(this).find(".ui-ob-banned").hide();
	});
	
});

