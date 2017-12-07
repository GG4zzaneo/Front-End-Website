"use strict";

(function () {


	let body = document.getElementsByTagName("body")[0];
	let burger = document.getElementById("burger-menu");

	let nav = document.getElementsByTagName("nav")[0];

	body.addEventListener("click", function (e) {
		toggleMenu(e);
	});

	function toggleMenu(e) {
		console.log(e.target);

		if (e.target.id === "burger-menu" || e.target.classList.contains("burger-line")) {
			console.log("buger or burger line");
			
			if (nav.classList.contains("toggle-nav")) {
				nav.classList.remove("toggle-nav");
				burger.classList.remove("active");
			} else {
				nav.classList.add("toggle-nav");
				burger.classList.add("active");
			}
		} else if (e.target.tagName.toLocaleLowerCase() === "nav") {
			console.log("nav clicked, do nothing!");
		} else if (nav.classList.contains("toggle-nav")) {
			console.log("nav.classList.contains(toggle-nav)");
			console.log(e.target.tagName);
			
			nav.classList.remove("toggle-nav");
			burger.classList.remove("active");
		}


	}


})()
