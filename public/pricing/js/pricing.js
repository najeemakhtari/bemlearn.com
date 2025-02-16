'use strict'

const accardionItemElem = document.querySelectorAll('.accardion-item')
const videoElem = document.querySelectorAll('.video')


accardionItemElem.forEach(item =>{
    item.addEventListener('click', (event)=>{
       
        event.currentTarget.classList.toggle('h-16')
        event.currentTarget.children[0].classList.toggle('font-thin')
        event.currentTarget.children[0].classList.toggle('text-white')
        event.currentTarget.children[0].classList.toggle('bg-slate-800')
        event.currentTarget.children[0].classList.toggle('bg-slate-700')
        event.currentTarget.children[0].children[1].classList.toggle('rotate-accardion')
    })
})

videoElem.forEach(item =>{
    item.addEventListener('mouseenter', (event)=>{
       event.target.setAttribute('controls', true)
    })
})
videoElem.forEach(item =>{
    item.addEventListener('mouseleave', (event)=>{
       event.target.removeAttribute('controls')
    })
})