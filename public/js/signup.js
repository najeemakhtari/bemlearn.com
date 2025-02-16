'use strict'


const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const passowrdInput = document.getElementById('password')
const confirmPassInput = document.getElementById('confirm-pass')
const registerBtn = document.getElementById('register')
const nameErrorElem = document.getElementById('name-error')
const nameErrorMsg = document.getElementById('name-error-msg')
const emailErrorElem = document.getElementById('email-error')
const emailErrorMsg = document.getElementById('email-error-msg')
const phoneErrorElem = document.getElementById('phone-error')
const phoneErrorMsg = document.getElementById('phone-error-msg')
const passwordErrorElem = document.getElementById('password-error')
const passwordErrorMsg = document.getElementById('password-error-msg')
const confirmErrorElem = document.getElementById('confirm-error')
const confirmErrorMsg = document.getElementById('confirm-error-msg')
const passShowEye = document.getElementById('password-show')
const passHideEye = document.getElementById('password-hide')
const confirmShowEye = document.getElementById('confirm-show')
const confirmHideEye = document.getElementById('confirm-hide')


const phoneRegex = /^\+?[0-9]+$/;
const emailRegex = /^\S+@\S+\.\S+$/;
let nameFlag = false
let emailFlag = false
let phoneFlag = false
let confirmFlag = false

nameInput.addEventListener('blur', (event)=>{
    if(event.target.value && event.target.value.length >4){
        nameErrorElem.classList.add('hidden')
        nameFlag = true
    }else{
        nameErrorElem.classList.remove('hidden')
        nameErrorMsg.textContent = 'Please enter your name'
        nameFlag = false
    }
})
emailInput.addEventListener('blur', event=>{
    let emailValidation = emailRegex.test(event.target.value)
    if(!event.target.value){
        emailErrorElem.classList.remove('hidden')
        emailErrorMsg.textContent = 'Please enter your email address'
        emailFlag = false;
    }else if(emailValidation){
        emailErrorElem.classList.add('hidden')
        emailFlag = true;
    }else{
        emailErrorElem.classList.remove('hidden')
        emailErrorMsg.textContent = 'Please enter correct email format'
        emailFlag = false;
    }
})
phoneInput.addEventListener('blur', event=>{
    let phoneValidation = phoneRegex.test(event.target.value)
    if(!event.target.value){
        phoneErrorElem.classList.remove('hidden')
        phoneErrorMsg.textContent = 'Please enter your phone number'
        phoneFlag = false;
    }else if(phoneValidation && event.target.value.length > 6){
        phoneErrorElem.classList.add('hidden')
        phoneFlag = true;
    }else{
        phoneErrorElem.classList.remove('hidden')
        phoneErrorMsg.textContent = 'Please enter correct phone number'
        phoneFlag = false;
    }
})
passowrdInput.addEventListener('blur', event=>{
    if(!event.target.value){
        passwordErrorElem.classList.remove('hidden')
        passwordErrorMsg.textContent = 'Please enter password'
    }else if(event.target.value.length <8){
        passwordErrorElem.classList.remove('hidden')
        passwordErrorMsg.textContent = 'Password should be more than 8'
    }else{
        passwordErrorElem.classList.add('hidden')

    }
})
confirmPassInput.addEventListener('blur', event=>{
    if(!event.target.value){
        confirmErrorElem.classList.remove('hidden')
        confirmErrorMsg.textContent = 'Please enter confirm password'
        confirmFlag = false;
    }else if(event.target.value !== passowrdInput.value){
        confirmErrorElem.classList.remove('hidden')
        confirmErrorMsg.textContent = 'Confirm password and password not match'
        confirmFlag = false;
    }else{
       confirmErrorElem.classList.add('hidden')
       confirmFlag = true;
    }
})

registerBtn.addEventListener('click', ()=>{
    
   if(nameFlag && emailFlag && phoneFlag && confirmFlag){
    registerBtn.innerHTML = ' <img src="./images/Infinity@1x-1.0s-200px-200px.svg" width="40">'
    setTimeout(() => {
        
        iziToast.success({
        title: 'Welcome',
        transitionIn: 'bounceInLeft',
        position:'topRight',
        message: 'Your account created',
        color:'#4ade80'
        
    });
    registerBtn.innerHTML = "Register"
    }, 3000);
    
   }else{
    iziToast.error({
        transitionIn: 'bounceInLeft',
        position:'topRight',
        title: 'Error',
        message: 'Please fill the form!',
       color:'#f87171'
    });
   }
})




const showAndHidePassword = (elem, attr, fontAdd, fontDel, show, hide)=>{
    elem.setAttribute('type', attr)
    elem.classList.add(fontAdd)
    elem.classList.remove(fontDel)
    show.classList.add('hidden')
    hide.classList.remove('hidden')
}

passHideEye.addEventListener('click', ()=>{
    showAndHidePassword(passowrdInput, 'text', 'font-thin', 'font-bold', passHideEye, passShowEye)

})
passShowEye.addEventListener('click', ()=>{
    showAndHidePassword(passowrdInput, 'password', 'font-bold', 'font-thin', passShowEye, passHideEye)

})

confirmHideEye.addEventListener('click', ()=>{
    showAndHidePassword(confirmPassInput, 'text', 'font-thin', 'font-bold', confirmHideEye, confirmShowEye)

})
confirmShowEye.addEventListener('click', ()=>{
    showAndHidePassword(confirmPassInput, 'password', 'font-bold', 'font-thin', confirmShowEye, confirmHideEye)

})






