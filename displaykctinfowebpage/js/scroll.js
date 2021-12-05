let header = document.querySelector('.headerContainer');

window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active',windowPosition)
})
let collapse = document.querySelector('.navbar-nav')
let navbarBtn = document.querySelector('.navbar-toggler-btn');
navbarBtn.addEventListener("click",function(){
    collapse.classList.toggle('hide')
})
