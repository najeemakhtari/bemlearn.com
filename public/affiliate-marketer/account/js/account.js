'use strict'

const newPassWrapper = document.getElementById('change-pass')
const changePassBtn = document.getElementById('change-pass-btn')
const submitPassBtn = document.getElementById('submit-pass')



changePassBtn.addEventListener('click', ()=>{
    newPassWrapper.classList.remove('hidden')
    newPassWrapper.classList.add('flex')
    changePassBtn.classList.add('hidden')
    submitPassBtn.classList.remove('hidden')
    
})
