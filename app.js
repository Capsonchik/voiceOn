const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // autoHeight: true, 
    slidesPerView: 3,
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


const openContent = document.querySelectorAll('.services__header')

openContent.forEach(el => {
    el.addEventListener('click', (event) => {
        el.nextElementSibling.classList.toggle('hidden')
    })
})



