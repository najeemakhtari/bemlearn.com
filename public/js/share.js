'use strict'

const closeBtn = document.getElementById('close')
const mobileNav = document.getElementById('mobile-nav')
const navBtn = document.getElementById('nav-btn')




closeBtn.addEventListener('click', ()=>{
    mobileNav.classList.add('-left-full')
    mobileNav.classList.remove('-left-0')

})

navBtn.addEventListener('click', ()=>{
    mobileNav.classList.add('-left-0')
    mobileNav.classList.remove('-left-full')
   
})