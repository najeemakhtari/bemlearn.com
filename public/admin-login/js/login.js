'use strict'

import { adminLogin } from "../../js/utilities.js";


const showPassElem = document.getElementById('show-pass');
const hidePassElem = document.getElementById('hide-pass');
const passwordInput = document.getElementById('password')
const userInput = document.getElementById('username')
const loginBtn =document.getElementById('login')
const userNameError =document.getElementById('username-error')
const userErrorMsg = document.getElementById('error-msg')
const passErrorMsg = document.getElementById('pass-error-msg')
const passwordError = document.getElementById('pass-error')
const loadingGif = document.getElementById('loading-gif')
const loginText = document.getElementById('login-text')
////// toggle show and hide password
const showAndHidePassword = (attr, fontAdd, fontDel, show, hide)=>{
    passwordInput.setAttribute('type', attr)
    passwordInput.classList.add(fontAdd)
    passwordInput.classList.remove(fontDel)
    show.classList.add('hidden')
    hide.classList.remove('hidden')
}


showPassElem.addEventListener('click', ()=>{
   showAndHidePassword('text', 'font-thin','font-bold', showPassElem, hidePassElem)
})
hidePassElem.addEventListener('click', ()=>{
    showAndHidePassword('password', 'font-bold', 'font-thin', hidePassElem, showPassElem)
 })

let userFlag = false;
let passwordFlag = false;


 loginBtn.addEventListener('click', ()=>{
    const emailRegex = /^\S+@\S+\.\S+$/;
    const userInputValidation = emailRegex.test(userInput.value)
    
        if(!userInput.value){
            userNameError.classList.remove('hidden')
            userErrorMsg.textContent = 'Please enter your email address'
        
        }else if(!userInputValidation){
            userNameError.classList.remove('hidden')
            userErrorMsg.textContent = 'Please write correct email format'
        }else{
            userNameError.classList.add('hidden')
            userFlag = true;
        }
    
    
        if(!passwordInput.value){
            passwordError.classList.remove('hidden')
            passErrorMsg.textContent = 'Please enter your password'
        }else{
            passwordError.classList.add('hidden')
            passwordFlag = true;
        }

        
        if(userFlag && passwordFlag){
            loadingGif.classList.remove('hidden')
    loginBtn.style.opacity = '0.5'
    loginText.classList.add('hidden')
            adminLogin(userInput.value.trim(), passwordInput.value.trim()).then(res => {
                document.cookie = `userAuth=${res.token}; path=/`
                if(res.message == 'Login successful.'){
                    iziToast.success({
                        title: 'Success',
                        transitionIn: 'bounceInLeft',
                        position:'topRight',
                        message: 'You logged in!',
                        color:'#4ade80'
                        
                    });
                    setTimeout(() => {
                            location.href= '../admin/'
                    }, 3000);
                }else{
                    iziToast.error({
                        transitionIn: 'bounceInLeft',
                        position:'topRight',
                        title: 'Error',
                        message: 'Email or password is incorrect',
                       color:'#f87171'
                    });
                }
                loginBtn.style.opacity = '1'
                loadingGif.classList.add('hidden')
                loginText.classList.remove('hidden')
            })
           
        }

        
   
    



 })



