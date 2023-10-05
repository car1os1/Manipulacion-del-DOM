const navEmail = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')
const hamMenu = document.querySelector('.menu')
const mobiMenu = document.querySelector('.mobile-menu')

hamMenu.addEventListener('click', toogleMenu)
navEmail.addEventListener('click', toogleChange)

function toogleChange() {
    deskMenu.classList.toggle('inactive')
}

function toogleMenu() {
    mobiMenu.classList.toggle('inactive')
}