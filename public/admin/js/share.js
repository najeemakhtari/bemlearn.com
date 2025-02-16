'use strict'



const mobileNav = document.getElementById('mobile-nav-btn')
const desktopNav = document.getElementById('desktop-nav')

mobileNav.addEventListener('click', ()=>{
    desktopNav.classList.toggle('-left-full')
  
})






