const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"progressbar",},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",},scrollbar:{el:".swiper-scrollbar",},});function toggleDropdown(){var dropdownMenu=document.getElementById("dropdownMenu");if(dropdownMenu.style.display==="block"){dropdownMenu.style.display="none"}else{dropdownMenu.style.display="block"}}
window.onclick=function(event){if(!event.target.matches(".dropdown-toggle")){var dropdowns=document.getElementsByClassName("dropdown-menu");for(var i=0;i<dropdowns.length;i++){var openDropdown=dropdowns[i];if(openDropdown.style.display==="block"){openDropdown.style.display="none"}}}}