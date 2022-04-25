const swiper = new Swiper('.assistents__swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const openContent = document.querySelectorAll('.services__header')

openContent.forEach(el => {
    el.addEventListener('click', (event) => {
        el.nextElementSibling.classList.toggle('hidden')
    })
})



