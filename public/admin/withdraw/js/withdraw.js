'use strict'

const withdrawItem = document.querySelectorAll('.withdraw-item')
const withdrawDetail = document.getElementById('withdraw-detail')


withdrawItem.forEach(item =>{
    item.addEventListener('click', (event)=>{
        event.target.parentElement.nextElementSibling.classList.toggle('hidden')
    })
})