'use strict'
import { addNewAdmin, getAllAdmin } from "../../../js/utilities.js"

const addBtn = document.getElementById('add')
const addForm = document.getElementById('add-form')
const adminWrapper = document.getElementById('admin-wrapper')
const fnameInput = document.getElementById('fname')
const lnameInput = document.getElementById('lname')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const submitBtn = document.getElementById('submit-btn')
const loadingSvg = document.getElementById('loading')

addBtn.addEventListener('click', ()=>{
    addForm.classList.remove('hidden')
})

const emailRegex = /^\S+@\S+\.\S+$/;
////add new admin
submitBtn.addEventListener('click', ()=>{
    const firstName = fnameInput.value.trim()
    const lastName = lnameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()
    
    const emailValidation = emailRegex.test(email)

    if(firstName && lastName && password && emailValidation){
        const newAdminData = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password,
            "password_confirmation": password
        }

         addNewAdmin(newAdminData, token).then(res=> {
            if(res.message == 'Admin created successfully.'){
                iziToast.success({
                        title: 'Success',
                        transitionIn: 'bounceInLeft',
                        position:'topRight',
                        message: `Admin created successfuly`,
                        color:'#4ade80'
                    });
            }else{
                iziToast.error({
                    transitionIn: 'bounceInLeft',
                    position:'topRight',
                    title: 'Error',
                    message: 'Sorry something is wrong, try again',
                   color:'#f87171'
                });
            }
            setTimeout(() => {
                location.href='./'
            }, 2000);
         })
    }else{
        iziToast.error({
            transitionIn: 'bounceInLeft',
            position:'topRight',
            title: 'Error',
            message: 'Please fill form correctley!',
           color:'#f87171'
        });
    }
    
   
})
//// get token
const token = document.cookie.split('=')[1]

window.addEventListener('load', ()=>{

    getAllAdmin(token).then(res => {
        loadingSvg.style.display = 'none'
        res.data.forEach(admin => {
            adminWrapper.insertAdjacentHTML('afterbegin', 
            `
            <div class="flex flex-col sm:flex-row items-center justify-between my-1 bg-slate-300 py-6 px-3 rounded-xl text-center text-sm">
                <div class="w-full h-7 flex justify-center items-center sm:w-[19.5%]">${admin.id}</div>
                <div class="w-full h-7 flex justify-center items-center sm:w-[19.5%]">${admin.first_name} ${admin.last_name}</div>
                <div class="w-full h-7 flex justify-center items-center sm:w-[19.5%]">${admin.email}</div>
                <span class="w-full sm:w-[19.5%] bg-sky-400 rounded-lg py-3 hover:cursor-pointer" onclick=''>Change password</span>
                <span class="w-full sm:w-[19.5%] bg-red-500 rounded-lg py-3 hover:cursor-pointer" onclick='deleteAdmin(${admin.id})'>Delete</span>
            </div>
            `
        )
        });
    })
})

  /////delete admin
const deleteAdmin = (id)=>{
    if(confirm('Are you sure for deleting admin?')){
    fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/admins/${id}`, {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    }).then(res => res.json()).then(response => {
        if(response.message == 'Admin deleted successfully.'){
            iziToast.success({
                title: 'Success',
                transitionIn: 'bounceInLeft',
                position:'topRight',
                message: `Admin deleted successfully`,
                color:'#4ade80'
            });
            setTimeout(() => {
                location.href ='./'
            }, 2000);
        }else{
            iziToast.error({
                transitionIn: 'bounceInLeft',
                position:'topRight',
                title: 'Error',
                message: 'Sorry something is wrong, try again',
               color:'#f87171'
            });
        }
    })
}
   
}
window.deleteAdmin = deleteAdmin