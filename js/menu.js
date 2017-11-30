"use strict";

(function(){
    
  let burger = document.getElementById("burger-menu");

  let nav = document.getElementsByTagName("nav")[0];
  
  burger.addEventListener("click", toggleMenu);
  
  function toggleMenu() {
    if (nav.classList.contains("toggle-nav")){
      nav.classList.remove("toggle-nav");
      burger.classList.remove("active");
    } else {
      nav.classList.add("toggle-nav");
      burger.classList.add("active");
    }
  }
  
  
})()