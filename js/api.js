"use strict";

/* Local storage used to remember last ABOUT tab user visited so it can be loaded again on revisting page. 

Guardian API used to retreieve news according to user input. */
(function () {

	/* Assign variables to specified elements within HTML. */

  let newsContainer = document.getElementById("content-5");
  let queryBox = document.getElementById("search-input");
  let searchBtn = document.getElementById("search-btn");
  let clearBtn = document.getElementById("clear-btn");
  let resultContainer = document.getElementById("search-results");

  /* Assign variable to API key. */
  let baseURL = "https://content.guardianapis.com/search?api-key=d2224436-13b9-4c2b-acc4-eb76d807dac4&q=";


	// Add event listeners to buttons.
	searchBtn.addEventListener("click", function (e) {
			getSearchResults(e);
	});

	queryBox.addEventListener("keydown", function (e) {
		if (e.which === 13) {
			//Enter key pressed
			getSearchResults(e);
		 }
	});

	clearBtn.addEventListener("click", clearSearchResults);

	/* Function to retreive results of user search from guardian site. JSON retieved depending on search provided by user. Data fills results container and results become visible within container.*/
	function getSearchResults(ev) {
		let url = baseURL + queryBox.value;
		let request = new Request(url);
		fetch(request)
		.then(function (response) {
			// console.log(`response: ${response.status}`);
			return response.json();
		})
		.then(function (data) {
			//console.log(data);
			let key;
			let theData = "";
			let tmp = data.response.results;
			//Convert response json data to a string of html elements
			for (key in tmp) {
				theData += `<li><span>${tmp[key].sectionName}</span><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a><span>${tmp[key].webPublicationDate.substr(0,10)}</span></li>`;
			}

			//console.log(theData);
			resultContainer.innerHTML = theData;

			//show results
			newsContainer.classList.add("toggle-results");
		});

		ev.preventDefault();

	}

		/* Empty inner HTML of search results to clear screen.
		 Query box emptied to remove previous search term. */
	function clearSearchResults() {
		queryBox.value = "";
		resultContainer.innerHTML = "";
		newsContainer.classList.remove("toggle-results");
	}

}());