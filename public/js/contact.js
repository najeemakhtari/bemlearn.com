'use strict'


const nameInput   = document.getElementById('name')
const namePlaceHolder = document.getElementById('name-placeholder')
const emailInput   = document.getElementById('email')
const emailPlaceHolder = document.getElementById('email-placeholder')
const msgInput   = document.getElementById('msg')
const msgPlaceHolder = document.getElementById('msg-placeholder')



const placeHolderToggle  = (elem, addClass, removeClass)=>{
    elem.classList.remove(removeClass)
    elem.classList.add(addClass)
}

nameInput.addEventListener('focus', ()=>{
    placeHolderToggle(namePlaceHolder, '-top-2.5')
})
nameInput.addEventListener('blur', ()=>{
   placeHolderToggle(namePlaceHolder, 'top-[30%]', '-top-2.5')
})

emailInput.addEventListener('focus', ()=>[
    placeHolderToggle(emailPlaceHolder, '-top-2.5')
])

emailInput.addEventListener('blur', ()=>{
    placeHolderToggle(emailPlaceHolder, 'top-[30%]', '-top-2.5')
 })

 msgInput.addEventListener('focus', ()=>[
    placeHolderToggle(msgPlaceHolder, '-top-3', 'top-[3%]')
])

msgInput.addEventListener('blur', ()=>{
    placeHolderToggle(msgPlaceHolder, 'top-[3%]', '-top-3')
 })

