'use strict'

import { marketerLogin } from "../../js/utilities.js";


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
    const userNameRegex = /^\+?[0-9]+$/;
    const userInputValidation = userNameRegex.test(userInput.value)
  
        if(!userInput.value){
            userNameError.classList.remove('hidden')
            userErrorMsg.textContent = 'Please enter user name'
        
        }else if(!userInputValidation){
            userNameError.classList.remove('hidden')
            userErrorMsg.textContent = 'Please write correct number format'
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
            console.log(userInput.value, passwordInput.value)
            marketerLogin(userInput.value.trim(), passwordInput.value.trim()).then(res => {
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
                        message: 'User name or password is incorrect',
                       color:'#f87171'
                    });
                }
                loginBtn.style.opacity = '1'
                loadingGif.classList.add('hidden')
                loginText.classList.remove('hidden')
            })
           
        }

        
   
    



 })



