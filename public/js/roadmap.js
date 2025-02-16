'use strict'


const roadmapElems = document.querySelectorAll('.roadmap')


roadmapElems.forEach(item => {
    item.addEventListener('click', (event)=>{
        const title = event.currentTarget.dataset.set;
        Swal.fire({

            html:`<video class='w-full h-full rounded-lg' controls autoplay src='./videos/1-introduction.mp4'></video>`,
            showConfirmButton: false,
            showCloseButton: true,
            width: 800,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    })
})



const accardionItemElem = document.querySelectorAll('.accardion-item')



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

