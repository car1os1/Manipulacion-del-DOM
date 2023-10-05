const navEmail = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', toogleNav)

function toogleNav() {
    deskMenu.classList.toggle('inactive')
}
