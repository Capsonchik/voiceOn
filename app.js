const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const openContent = document.querySelectorAll('.services__header')

openContent.forEach(el => {
    el.addEventListener('click', (event) => {
        el.nextElementSibling.classList.toggle('hidden')
    })
})


const assistents = [
  {
    name: 'Yandex',
    text: 'test'
  }
]


