"use strict";

/* Controls behaviour of accordion elements. */
(function(){
	
	/* Assign variables to specified elements within HTML. */
	let openBtn = document.getElementById("open-btn");
	let collapseBtn = document.getElementById("collapse-btn");
  let topBtn = document.getElementById("go-top-btn");
  let accordions = document.getElementsByClassName("accordion-tab");

	/* Add event listeners to buttons */
	openBtn.addEventListener("click", openAll);	
	collapseBtn.addEventListener("click", collapseAll);
  topBtn.addEventListener("click", goToTop);
  
	/* Add on click event listener to all accordions by using a loop. */
  for (let i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener("click", function(e){ toggleAccordion(e); }, false);    
  }
	
	/* Function for all accordions to be opened when open all button is clicked. */ 
	function openAll(){
		console.log("open all!");
		
		for (let i = 0; i < accordions.length; i++) {
				accordions[i].parentElement.classList.add("active");			
		}
	}
	
	/* Function for all open accordions to be closed when close all button is clicked. */ 
	function collapseAll(){
		console.log("Collapse All");
		for (let i = 0; i < accordions.length; i++) {
			if (accordions[i].parentElement.classList.contains("active")){
				accordions[i].parentElement.classList.remove("active");
			}
		}
	}
  
	/* Function to return user to top of page when return to top button is clicked. */
  function goToTop(){
    console.log("Go To Top");
    document.documentElement.scrollTop = 0;
  }
  
	/* Function to open individual accordions.
	
	Code inspired from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol 
	
	*/
  function toggleAccordion(e) {
    //Store click element
    
    let acc;
      
    /* e.path not working on other browsers, must add node.parent to an array and to create e.path
    console.log(e.path); */
    
    /* length - 2 as e.path contains window which does not have a classList property to read. */
    for (let i = 0; i < e.path.length - 2; i++){
      
			/* If element is an accordion, execute the statement. */
      if (e.path[i].classList.contains("accordion-tab")) {
      
				/* Assign variable to specific accotdion. */
        acc = e.path[i];
   
				/* Active class activated to open accordion clicked. */
				acc.parentElement.classList.toggle("active");

        /* Once correct element found end loop. */
        break;
      }
    }
  }
  
})()