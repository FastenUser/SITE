let menuBtn = document.querySelector('.burber')
let menu = document.querySelector('.header-list')

menuBtn.addEventListener ('click', function (){
    console.log('CHEESE BURGER')
    menu.classList.toggle('active')
    menuBtn.classList.toggle('change')
})

