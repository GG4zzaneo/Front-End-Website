"use strict";

/* Controls behaviour of burger menu when clicked. */

(function () {

	/* Assign variables to specified elements within HTML. */
	let body = document.getElementsByTagName("body")[0];
	let burger = document.getElementById("burger-menu");
	let nav = document.getElementsByTagName("nav")[0];

	/* Add event listener to open menu on click. */
	body.addEventListener("click", function (e) {
		toggleMenu(e);
	});

	/* Function to alow for core behaviour of menu when clicked. */
	function toggleMenu(e) {
		
	/* Tests used shown below. */	
//		alert(e.target.id);
//		alert(e.target.tagName);
//		alert(e.target.tagName.toLocaleLowerCase());
//		alert(e.target.tagName.toLocaleLowerCase);
//		alert(nav.classList.contains("toggle-nav"));

		
		/* Action executed on satisaction of one of below conditions. Either opens or closes nav accordingly. */
		if (e.target.id === "burger-menu" || e.target.classList.contains("burger-line")) {
			console.log("burger or burger line");
			
			if (nav.classList.contains("toggle-nav")) {
				nav.classList.remove("toggle-nav");
				burger.classList.remove("active");
			} else {
				nav.classList.add("toggle-nav");
				burger.classList.add("active");
			}
		
		/* Code executed if nav open but burger not clicked. */	
		} else if (e.target.tagName.toLocaleLowerCase() === "nav") {
			console.log("nav clicked, do nothing!");
		} 
		
		/* Code executed if menu item is clicked when burger open. */
		else if (nav.classList.contains("toggle-nav")) {
			console.log("nav.classList.contains(toggle-nav)");
			console.log(e.target.tagName);
			
			nav.classList.remove("toggle-nav");
			burger.classList.remove("active");
		}
		
	}

})()
