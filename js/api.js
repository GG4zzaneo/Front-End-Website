"use strict";

(function () {

  let checkBoxContainer = document.getElementById("check-box-container");
  let newsContainer = document.getElementById("content-5");
  let queryBox = document.getElementById("search-input");
  let searchBtn = document.getElementById("search-btn");
  let clearBtn = document.getElementById("clear-btn");
  let resultContainer = document.getElementById("search-results");

  let baseURL = "https://content.guardianapis.com/search?api-key=d2224436-13b9-4c2b-acc4-eb76d807dac4&q=";
  
  
  if (localStorage.tabSelected === undefined) {
    console.log(document.getElementById("tab-1").checked);
    document.getElementById("tab-1").checked = true;
  } else {
    document.getElementById(localStorage.tabSelected).checked = true;
  }

  checkBoxContainer.addEventListener("click", function(e){
    /*Event listener added to container to reduce memory used to store function code for each element*/
    if (e.target.classList.contains("tab-input")) {
      localStorage.tabSelected = e.target.getAttribute("id");
      console.log(e.target.getAttribute("id"));
    }
  });

  searchBtn.addEventListener("click", function (e) {
    getSearchResults(e);
  });

  queryBox.addEventListener("keydown", function (e) {
    if (e.which === 13) {
      getSearchResults(e);
    }
  });

  clearBtn.addEventListener("click", clearSearchResults);

  function getSearchResults(ev) {
    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        // console.log(`response: ${response.status}`);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let key;
        let theData = "";
        let tmp = data.response.results;
        for (key in tmp) {
          theData += `<li><span>${tmp[key].sectionName}</span><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a><span>${tmp[key].webPublicationDate.substr(0,10)}</span></li>`;
        }
        //console.log(theData);
        resultContainer.innerHTML = theData;

        newsContainer.classList.add("toggle-results");

      });

    newsContainer.addEventListener("transitionend", function () {
      window.scrollTo(0, window.innerHeight);
      newsContainer.removeEventListener("transitionend", false);
    });



    ev.preventDefault();
  }

  function clearSearchResults() {
    queryBox.value = "";
    resultContainer.innerHTML = "";
    newsContainer.classList.remove("toggle-results");
  }

}());
