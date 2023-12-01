// when the menu button is clicked, show menu
// hide closed icon, show opened icon
// when the new button is clicked, hide menu
// switch icons

function app(){

    const menuOpenedBtn = document.querySelector(".nav-menu-btn-open");
    const menuClosedBtn = document.querySelector(".nav-menu-btn-closed");
    const menu = document.querySelector(".nav-menu");
    const notMenuArea = document.querySelector(".not-menu-area");
    const allMenuItems = document.querySelectorAll(".nav-menu-item");

    const HIDDEN_CLASS = "hidden";

    function openMenu () {
        menu.classList.remove(HIDDEN_CLASS);
        menuClosedBtn.classList.add(HIDDEN_CLASS);
        menuOpenedBtn.classList.remove(HIDDEN_CLASS);
        notMenuArea.classList.remove(HIDDEN_CLASS);

        notMenuArea.addEventListener('click', closeMenu);
    }

    function closeMenu () {
        menu.classList.add(HIDDEN_CLASS);
        notMenuArea.classList.add(HIDDEN_CLASS);
        menuClosedBtn.classList.remove(HIDDEN_CLASS);
        menuOpenedBtn.classList.add(HIDDEN_CLASS);
    }

    menuClosedBtn.addEventListener('click', openMenu);
    menuOpenedBtn.addEventListener('click', closeMenu);

    allMenuItems.forEach(menuItem => {
        menuItem.addEventListener('click', closeMenu);
    })


}

app();