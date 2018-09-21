/*jshint esversion: 6 */
class DropDownMenu
{
	constructor(_menu, _button)
	{
		let self = this;
		this.menu = _menu;
		this.button = _button;
		
		this.isOpened = false;
		this.isFirstLayerOpened = false;
		
		this.firstLayer = this.menu.querySelector("ul");
		this.firstLayerElements = this.menu.querySelectorAll("ul > li");
		
		this.firstLayerElements.forEach((i)=>{
			i.onclick = function() {
				if(i.classList.contains("click")) {
					i.classList.remove("click");
					i.classList.remove("open");
					self.isFirstLayerOpened = false;
				} else {
					self.closeSubmenus();
					if(i.querySelector("ul") !== null) {
						i.classList.add("click");
						i.classList.add("open");
						self.isFirstLayerOpened = true;
					}
				}
			};
			if(i.querySelector("ul") !== null) {
				i.onmouseover = function() {
					if(self.isDesktop())
						if(self.isFirstLayerOpened === false)
							this.classList.add("open");
				};
				i.onmouseout = function() {
					if(self.isDesktop())
						if(i.classList.contains("click") === false)
							i.classList.remove("open");
				};
			}
		});
		
		/*Closes the menu when any link is clicked. It's useful for Ajax pages*/
		this.menu.querySelectorAll("a[href]").forEach((i)=>{
			i.onclick = function(e) {
				e.stopPropagation();
				self.menu.classList.remove("open");
				self.closeSubmenus();
			};
		});
		
		/*Handles the opening of the menu when you click on the button for mobile*/
		this.button.onclick = (e)=>{
			e.stopPropagation();
			if(this.menu.classList.contains("open"))
				this.menu.classList.remove("open");
			else
				this.menu.classList.add("open");
		};
		
		/*Allows the menu close when the user clicks outside the menu*/
		this.menu.onclick = (e)=>{
			e.stopPropagation();			
		};
		window.onclick = ()=>{
			this.closeSubmenus();
			this.menu.classList.remove("open");
		};
	}
	
	closeSubmenus()//Close all the submenus
	{
		this.firstLayerElements.forEach((i)=>{
			i.classList.remove("click");
			i.classList.remove("open");
		});
		this.isFirstLayerOpened = false;
	}
	isDesktop()//Returns true whether the user is running the page on a desktop
	{
		return window.getComputedStyle(this.firstLayer)["flex-direction"] === "row";
	}
}