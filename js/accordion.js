"use strict";
(function(){
	let openBtn = document.getElementById("open-btn");
	let collapseBtn = document.getElementById("collapse-btn");
  let accordions = document.getElementsByClassName("accordion-tab");

	openBtn.addEventListener("click", openAll);	
	collapseBtn.addEventListener("click", collapseAll);
	
  for (let i = 0; i < accordions.length; i++) { 
    //Add on click event to all accordion containers
    accordions[i].addEventListener("click", function(e){ toggleAccordion(e); }, false);    
  }
	
	function openAll(){
		console.log("open all!");
		
		for (let i = 0; i < accordions.length; i++) {
				accordions[i].parentElement.classList.add("active");
				accordions[i].nextElementSibling.style.maxHeight = "1500px";				
		}
	}
	
	function collapseAll(){
		console.log("Collapse All");
		for (let i = 0; i < accordions.length; i++) {
			if (accordions[i].parentElement.classList.contains("active")){
				accordions[i].parentElement.classList.remove("active");
				accordions[i].nextElementSibling.style.maxHeight = null;
			}
		}
	}
  
  function toggleAccordion(e) {
    //Store click element
    
    let acc, panel;
      
    //e.path not working on other browsers, must add node.parent to an array and to create e.path
    console.log(e.path);
    
    //length - 2 as e.path contains window which does not have a classList property to read
    for (let i = 0; i < e.path.length - 2; i++){
      
      if (e.path[i].classList.contains("accordion-tab")) {
      
        acc = e.path[i];
        
        console.log(e.path[i]);

        acc.parentElement.classList.toggle("active");

        panel = acc.nextElementSibling;

        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          //panel.style.maxHeight = `${panel.scrollHeight}px`;
					//Allows content to expand with window on window resize
          panel.style.maxHeight = "1500px";
        } 
        //Once correct element found end loop
        break;
      }
    }
  }
  
})()