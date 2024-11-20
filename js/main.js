// toogle navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
// remove toggle icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['student at IDN Boarding School', 'Aspiring Software Engineer', 'successful people'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true


});


