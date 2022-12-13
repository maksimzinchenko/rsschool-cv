window.addEventListener("load", onLoadFunction);

function onLoadFunction(e) {
    onResizeFunction();
    window.addEventListener("resize", onResizeFunction);
}

function redrawMenuButton(){
    const btnMenu = document.getElementById('menu__button')
    if (screen.width < 400) {
        btnMenu.innerText = "#";
        btnMenu.style.width = "40px";
    } else {
        btnMenu.innerText = "> Menu";
        btnMenu.style.width = "100px";
    }
}

function onResizeFunction(e) {
    redrawMenuButton();
}