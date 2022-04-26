const swiper = new Swiper('.swiper', {

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
