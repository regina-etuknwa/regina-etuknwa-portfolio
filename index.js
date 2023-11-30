// when the menu button is clicked, show menu
// hide closed icon, show opened icon
// when the new button is clicked, hide menu
// switch icons

function app(){

    const menuOpenedBtn = document.querySelector(".nav-menu-btn-open");
    const menuClosedBtn = document.querySelector(".nav-menu-btn-closed");
    const menu = document.querySelector(".nav-menu");

    function openMenu () {
        menu.classList.remove("hidden");
        menuClosedBtn.classList.add("hidden");
        menuOpenedBtn.classList.remove("hidden");
    }

    function closeMenu () {
        menu.classList.add("hidden");
        menuClosedBtn.classList.remove("hidden");
        menuOpenedBtn.classList.add("hidden");
    }

    menuClosedBtn.addEventListener('click', openMenu);
    menuOpenedBtn.addEventListener('click', closeMenu);

}

app();