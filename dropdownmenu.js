(function($) {
	$.fn.DropDownMenu = function(_button) {
		var self = $(this);
		var button = $(_button);
		
		self.children("ul").children("li:has(ul)").click(function() {
			if($(this).hasClass("click")) {
				$(this).removeClass("click").removeClass("open");
			} else {
				$(this).parent().children("li").removeClass("click").removeClass("open");
				$(this).addClass("click").addClass("open");
			}
		}).mouseenter(function() {
			if($(this).parent().css("flex-direction") == "row")
				if(!$(this).parent().children("li").hasClass("click"))
					$(this).addClass("open");
		}).mouseleave(function(){
			if($(this).parent().css("flex-direction") == "row")
				if(!$(this).hasClass("click"))
					$(this).removeClass("open");
		}).children("ul").click(function(e) {
			e.stopPropagation();
		});
		
		self.find("a[href]").click(function() {
			self.removeClass("open")
			.children("ul").children("li:has(ul)").removeClass("open").removeClass("click");
		});
		
		button.click(function() {
			self.toggleClass("open");
		});
		
		return this;
	};
}(jQuery));