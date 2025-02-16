'use strict'

import { addMarketer, getAllMarketers } from "../../../js/utilities.js"



const addBtn = document.getElementById('add')
const addForm = document.getElementById('add-form')
const fnameInput = document.getElementById('fname')
const lnameInput = document.getElementById('lname')
const emailInput = document.getElementById('email')
const whatsappInput = document.getElementById('whatsapp')
const walletInput = document.getElementById('wallet')
const passwordInput = document.getElementById('password')
const submitBtn = document.getElementById('submit')
const mareketersListWrapper = document.getElementById('marketers-list')
const loadingSvg = document.getElementById('loading')
const submitLoading = document.getElementById('submit-loading')
const submitText = document.getElementById('submit-text')

let affiliateId = null;
const token = document.cookie.split('=')[1]

window.addEventListener('load',()=>{
    getAllMarketers(token).then(res => {
        loadingSvg.style.display = 'none'
     
res.data.forEach(marketer => {

    mareketersListWrapper.insertAdjacentHTML('beforeend', 

    `
    <div class="flex flex-col sm:flex-row items-center justify-between my-1 bg-slate-300 py-6 px-3 rounded-xl text-center text-sm">
    <div class="w-full h-7 flex justify-center items-center sm:w-[12.5%]">${marketer.user.first_name} ${marketer.user.last_name}</div>
    <div class="w-full h-7 flex justify-center items-center sm:w-[12.5%]">${marketer.whatsapp_phone_number}</div>
    <div class="w-full h-7 flex justify-center items-center sm:w-[12.5%]">${marketer.affiliate_code}</div>
    <div class="w-full h-7 flex justify-center items-center sm:w-[12.5%]">${marketer.balance}</div>
    <div class="w-full h-7 flex justify-center items-center sm:w-[12.5%]">${marketer.sum_sell}</div>
    <div class="w-full h-7 flex justify-center items-center sm:w-[12.5%]">${marketer.sum_withdraw}</div>
 
    <span class="w-full sm:w-[12.5%] bg-red-500 rounded-lg py-3 hover:cursor-pointer" onclick='deleteMarketer(${marketer.id})'>Delete</span>
</div>
    `
    )
})
});

    })
  
const deleteMarketer = (id)=>{
    if(confirm('Are your sure to delete this marketer?')){
    fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/marketers/${id}`, {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    }).then(res => res.json()).then(response => {
        iziToast.success({
                title: 'Success',
                transitionIn: 'bounceInLeft',
                position:'topRight',
                message: `Marketer Deleted`,
                color:'#4ade80'
            });
            setTimeout(() => {
                location.href = './'
            }, 2000);
    })
}
}
window.deleteMarketer = deleteMarketer

addBtn.addEventListener('click', ()=>{
    addForm.classList.remove('hidden')
    fetch(`https://www.uuidtools.com/api/generate/v4`).then(res => res.json()).then(response => affiliateId = response[0])

})



submitBtn.addEventListener('click', ()=>{

    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\+?[0-9]+$/;
    const whatsappValidation = phoneRegex.test(whatsappInput.value.trim())
    const emailInputValidation = emailRegex.test(emailInput.value.trim())
    if(fnameInput.value == '' || lnameInput.value == '' || emailInput.value == '' || whatsappInput.value == '' || 
        walletInput.value == '' || passwordInput.value == ''
    ){
        iziToast.error({
            transitionIn: 'bounceInLeft',
            position:'topRight',
            title: 'Error',
            message: 'Fill all fields!',
           color:'#f87171'
        });
    }else if(!emailInputValidation){
        iziToast.error({
            transitionIn: 'bounceInLeft',
            position:'topRight',
            title: 'Error',
            message: 'Please write correct email format!',
           color:'#f87171'
        });
    }else if(!whatsappValidation || whatsappInput.value.trim() < 6){
        iziToast.error({
            transitionIn: 'bounceInLeft',
            position:'topRight',
            title: 'Error',
            message: 'Please write correct whatsapp number!',
           color:'#f87171'
        });
    }else{
        submitText.style.display = 'none'
        submitLoading.style.display ='block'
        let newMarketerData = {
            "first_name": fnameInput.value.trim(),
            "last_name": lnameInput.value.trim(),
            "email": emailInput.value.trim(),
            "password": passwordInput.value.trim(),
            "password_confirmation": passwordInput.value.trim(),
            "whatsapp_phone_number" : whatsappInput.value.trim(),
            "affiliate_code" : affiliateId,
            "balance" : "0",
            "crypto_wallet_address" : walletInput.value.trim()
}
            
            addMarketer(newMarketerData, token).then(res => {
                 iziToast.success({
                        title: 'Success',
                        transitionIn: 'bounceInLeft',
                        position:'topRight',
                        message: `New Marketer Created`,
                        color:'#4ade80'
                    })

                    setTimeout(() => {
                            location.href='./'
                    }, 2000);

            }).catch(err =>{
                iziToast.error({
                    transitionIn: 'bounceInLeft',
                    position:'topRight',
                    title: 'Error',
                    message: 'An error occured, try again!',
                   color:'#f87171'
                });
            })
          
        }
       
    
})