let dom = new Object();
window.addEventListener("load", init);

function init() {
    dom.nav = document.querySelector('.navbar.navbar-style');
}

function expandmenu() {
    let menu = document.getElementById('micon');
    if (menu.classList.contains('collapse')) {
        menu.classList.remove('collapse');
    } else {
        menu.classList.add('collapse');
    }
}
window.onscroll = function() {
    try {
        if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
            dom.nav.classList.add('animated', 'slideInDown', 'navbar-fixed-top');
        } else {
            dom.nav.classList.remove('animated', 'slideInDown', 'navbar-fixed-top');
        }
    } catch (e) {
        console.log(e);
    }
}