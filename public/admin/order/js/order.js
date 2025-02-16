'use strict'

import { getOrders} from "../../../js/utilities.js"

const orderWrapper = document.getElementById('orders-wrapper')
const loading = document.getElementById('loading-order')
const noOrder = document.getElementById('no-order')



const token = document.cookie.split('=')[1]

window.addEventListener('load', ()=>{
    getOrders(token).then(res => {
        loading.style.display = 'none'
        if(res.data.length <= 0){
           noOrder.textContent = 'There is no order to show'
        }else{
        orderWrapper.style.display = 'flex'
        console.log(res.data)
        orderWrapper.insertAdjacentHTML('beforeend', 
        `
        <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">res</div>
        <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">Akhtari</div>
        <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">+98747892329</div>
        <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">Fist course</div>
        <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">100</div>
        <a href="#" class="w-full sm:w-[14%] bg-sky-400 rounded-lg py-3">Click to check</a>
        <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">Ahmad</div>
        `

        )
    }
    
    })
})