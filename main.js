const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', desktopMenu);

function desktopMenu(){
    desktopmenu.classList.toggle('inactive');
}