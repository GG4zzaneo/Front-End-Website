"use strict";
(function(){
  let accordions = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordions.length; i++) { 
    //Add on click event to all accordion containers
    accordions[i].addEventListener("click", function(e){ toggleAccordion(e); });    
  }
  
  function toggleAccordion(e) {
    //Store click element
    let acc = e.target;
    
    acc.classList.toggle("active");
    
    let panel = acc.nextElementSibling;
    
    console.log(panel);
        
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    } 
  }
  
})()