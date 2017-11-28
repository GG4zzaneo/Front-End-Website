"use strict";
(function(){
  let accordions = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordions.length; i++) { 
    //Add on click event to all accordion containers
    accordions[i].addEventListener("click", function(e){ toggleAccordion(e); }, false);    
  }
  
  function toggleAccordion(e) {
    //Store click element
    
    let acc, panel;
      
    console.log(e.path);
    
    //length - 2 as e.path contains window which does not have a classList property to read
    for (let i = 0; i < e.path.length - 2; i++){
      
      if (e.path[i].classList.contains("accordion")) {
      
        acc = e.path[i];
        
        console.log(e.path[i]);

        acc.parentElement.classList.toggle("active");

        panel = acc.nextElementSibling;

        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        } 
        //Once correct element found end loop
        break;
      }
    }
  }
  
})()