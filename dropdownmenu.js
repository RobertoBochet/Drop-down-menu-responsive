$(function() {
	$("nav.DropDownMenu > ul > li:has(ul)").click(function() {
		if($(this).hasClass("click")) {
			$(this).removeClass("click").removeClass("open");
		} else {
			$(this).parent().children("li").removeClass("click").removeClass("open");
			$(this).addClass("click").addClass("open");
		}
	}).mouseenter(function() {
		if($(this).css("float") == "left") if(!$(this).parent().children("li").hasClass("click")) $(this).addClass("open");
	}).mouseleave(function(){
		if($(this).css("float") == "left") if(!$(this).hasClass("click")) $(this).removeClass("open");
	});
	
	/*Mobile version opening*/
	$("body > header > div > svg").click(function() {
		$("body > header > div > nav").toggleClass("open");
	});
});