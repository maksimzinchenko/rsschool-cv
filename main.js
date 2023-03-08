window.addEventListener("load", onLoadFunction);
document.getElementById('menu_list__wrapper').addEventListener('click', hideOverlay)

function onLoadFunction(e) {
    onResizeFunction();
    window.addEventListener("resize", onResizeFunction);
}

function redrawMenuButton() {
    const btnMenu = document.getElementById('menu__button')
    if (screen.width < 400) {
        btnMenu.innerText = "#";
        btnMenu.style.width = "40px";
    } else {
        btnMenu.innerText = "Menu";
        btnMenu.style.width = "100px";
    }
}

function onResizeFunction(e) {
    redrawMenuButton();
}

function toggleMenu(e) {
    const menuWrapper = document.getElementById('menu_list__wrapper')
    if (menuWrapper.style.display == "none" || menuWrapper.style.display == '') {
        menuWrapper.style.display = "block";
    } else {
        menuWrapper.style.display = "none";
    }
}

function hideOverlay(e) {
    const menuWrapper = document.getElementById('menu_list__wrapper')
    menuWrapper.style.display = "none";
}

