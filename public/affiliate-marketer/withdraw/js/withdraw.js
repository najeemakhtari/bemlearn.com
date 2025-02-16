'use strict'


const withdrawBtn = document.getElementById('withdraw-btn')
const balance = document.getElementById('balance')
const loading = document.getElementById('loading')
const withdrawBtnText =  document.getElementById('withdraw-title')

let balanceValue  = parseInt(balance.textContent)
withdrawBtn.addEventListener('click', ()=>{
    withdrawBtnText.classList.add('hidden')
    loading.classList.remove('hidden')
    setTimeout(() => {
        if(balanceValue < 50){
            iziToast.error({
                transitionIn: 'bounceInLeft',
                position:'topRight',
                title: 'Error',
                message: 'Balance should be at least 50!',
               color:'#f87171'
            });
            
        }else{
    iziToast.success({
        title: 'Success',
        transitionIn: 'bounceInLeft',
        position:'topRight',
        message: 'Your withdraw request created!',
        color:'#4ade80'
        
    });
        }
        withdrawBtnText.classList.remove('hidden')
    loading.classList.add('hidden')
    }, 3000);
    
})





