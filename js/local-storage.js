"use strict";

/* Local storage used to store last ABOUT tab user visited so it can be loaded again on revisting page. 
 */
(function () {
	let checkBoxContainer = document.getElementById("check-box-container");

	if (localStorage.tabSelected === undefined) {
    console.log(document.getElementById("tab-1").checked);
    document.getElementById("tab-1").checked = true;
	} else {
		document.getElementById(localStorage.tabSelected).checked = true;
    }
		checkBoxContainer.addEventListener("click", function (e) {
		/*Event listener added to container to reduce memory used to store function code for each element*/
		if (e.target.classList.contains("tab-input")) {
			localStorage.tabSelected = e.target.getAttribute("id");
			console.log(e.target.getAttribute("id"));
		}
	});
	
}());	