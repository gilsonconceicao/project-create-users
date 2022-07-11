const btn = document.querySelector('#btn-navBar'); 

btn.addEventListener('click', function () {

    const navBar = document.querySelector('.menu-navbar-conteiner')

    navBar.classList.toggle('active-navbar')

    if (btn.innerHTML == '<i class="fa-solid fa-bars"></i>') {
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }

})