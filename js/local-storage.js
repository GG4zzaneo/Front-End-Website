"use strict";

/* Local storage used to store last ABOUT tab user visited so it can be loaded again on revisting page. 
 */
(function () {
	
	/* Assign variables to specified elements within HTML. */	
	let checkBoxContainer = document.getElementById("check-box-container");

	/* Conditions specifying if tab is selected or not and actions to take in each situation. Tab-1 is checked by default, else the clicked tab is registered. */
	if (localStorage.tabSelected === undefined) {
    console.log(document.getElementById("tab-1").checked);
    document.getElementById("tab-1").checked = true;
	} else {
		document.getElementById(localStorage.tabSelected).checked = true;
    }
		checkBoxContainer.addEventListener("click", function (e) {
		/* Event listener added to container to reduce memory used to store function code for each element. */
		if (e.target.classList.contains("tab-input")) {
			localStorage.tabSelected = e.target.getAttribute("id");
			console.log(e.target.getAttribute("id"));
		}
	});
	
}());	