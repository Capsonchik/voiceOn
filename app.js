const swiper = new Swiper('.swiper1', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const secondSwiper = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 3,
  nested: true,
  watchOverflow: true,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



const assistentsBlock = document.querySelectorAll('.assistents__hover')

assistentsBlock.forEach(el => {
  el.addEventListener('click', event => {
    removeActiveClass()
    addActiveClass(event)
    const text = document.querySelectorAll('.pick__text')
    
    text.forEach(el => {
      el.classList.add('hidden')
      checkAttribute(el)
    })
  })
})

const removeActiveClass = () => {
  assistentsBlock.forEach(el => {
    el.classList.remove('active')
  })
}

const addActiveClass = (event) => {
  event.target.classList.add('active')
}

const checkAttribute = (el) => {
  if(el.getAttribute('name') == event.target.getAttribute('name')){
    el.classList.remove('hidden')
  }
}
