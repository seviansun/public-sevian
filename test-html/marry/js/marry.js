$(function(){

	$(".ui-thermo-nav").live({
		mouseenter: function()
	   {
	   	  $(this).find(".nav-hover a").addClass("thermo-hover-left");
	   	  $(this).find(".nav-hover span").addClass("thermo-hover-right");
	      $(this).find(".label-hover").show();
	   },
	   mouseleave: function()
	   {
	   	  $(this).find("a").removeClass("thermo-hover-left");
	   	  $(this).find("span").removeClass("thermo-hover-right");
	      $(this).find(".label-hover").hide();
	   }
	});
	
});

