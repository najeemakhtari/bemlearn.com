'use strict'

import { addNewProduct, getProducts } from "../../../js/utilities.js"

const addBtn = document.getElementById('add')
const addForm = document.getElementById('add-form')
const productsWrapper = document.getElementById('products')
const loading = document.getElementById('loading')
const name = document.getElementById('name')
const actualPrice = document.getElementById('actual-price')
const sellPrice = document.getElementById('sell-price')
const videoLink = document.getElementById('video-link')
const detail = document.getElementById('detail')
const submit = document.getElementById('submit')



addBtn.addEventListener('click', ()=>{
    addForm.classList.remove('hidden')
})

const token = document.cookie.split('=')[1]

window.addEventListener('load', ()=>{
    window.deleteProduct = deleteProduct 


    getProducts(token).then(res => {
        console.log(res)
        loading.style.display = 'none'
        res.data.forEach(item => {
 
         productsWrapper.insertAdjacentHTML('beforeend', 
         `
         <div class="flex flex-col sm:flex-row items-center justify-between my-1 bg-slate-300 py-6 px-3 rounded-xl text-center text-sm">      
         <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">${item.id}</div>
         <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">${item.name}</div>
         <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">N/A</div>
         <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">${item.actual_price}</div>
         <div class="w-full h-7 flex justify-center items-center sm:w-[14%]">${item.sell_price}</div>
         <span class="w-full sm:w-[14%] bg-red-500 rounded-lg py-3 hover:cursor-pointer" onclick='deleteProduct(${item.id})'>Delete</span>

         <a href="#" class="w-full sm:w-[14%] bg-sky-400 rounded-lg py-3">Edit</a>  
    
     </div>
     
         `
        )
        })
    })
})

//// delete product
const deleteProduct = (id)=>{
    
    if(confirm('Are you sure to delete this product?')){

     fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/products/${id}`, {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    }).then(res => res.json()).then(response =>{
        iziToast.success({
            title: 'Success',
            transitionIn: 'bounceInLeft',
            position:'topRight',
            message: `Product deleted successfully!`,
            color:'#4ade80'
        })
        setTimeout(() => {
            location.href = './'
        }, 2000);
      
    }).catch(err =>{
        iziToast.error({
            transitionIn: 'bounceInLeft',
            position:'topRight',
            title: 'Error',
            message: 'An error occured, Please try again',
           color:'#f87171'
        });
    })    
}
}

//// add new product
submit.addEventListener('click', ()=>{
    if(actualPrice.value.length < 1 || sellPrice.value.length < 1 || name.value.length < 1 || videoLink.value.length <1 || detail.value.length < 1){
        iziToast.error({
            transitionIn: 'bounceInLeft',
            position:'topRight',
            title: 'Error',
            message: 'Fill all fields!',
           color:'#f87171'
        });
    }else{
        let newProductData = {
            name: name.value.trim(),
            actual_price: actualPrice.value.trim(),
            sell_price: sellPrice.value.trim(),
            details: detail.value.trim(),
            video: videoLink.value.trim()
        }
        addNewProduct(newProductData, token).then(res => {
       
            iziToast.success({
                title: 'Success',
                transitionIn: 'bounceInLeft',
                position:'topRight',
                message: `New product added successfully!`,
                color:'#4ade80'
            })

            setTimeout(() => {
                    location.href='./'
            }, 2000);


        }).catch(err => {
            iziToast.error({
                transitionIn: 'bounceInLeft',
                position:'topRight',
                title: 'Error',
                message: 'There is an error, Please try again!',
               color:'#f87171'
            });
        })
    }
})