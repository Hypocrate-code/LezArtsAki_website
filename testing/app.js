const navbar = document.querySelector(".navbar-container");
const secondNavbar = document.querySelector(".navbar-container-secondary");
const secondNavbarBtn = document.querySelector(".navbar-btn");
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= navbar.scrollHeight - 20) {
        secondNavbarBtn.classList.add('visible')
    }
    else {
        if (secondNavbar.classList.contains('visible')) {
            secondNavbar.classList.remove('visible');
            switchClass(secondNavbarBtn, "active", "inactive")
        }
        secondNavbarBtn.classList.remove('visible');
    }
})
secondNavbarBtn.addEventListener('click', ()=>{
    switchClass(secondNavbarBtn, "active", "inactive")
    secondNavbar.classList.toggle('visible')
})
function switchClass(el, class1, class2) {
    if (el.classList.contains(class1)) {
        el.classList.remove(class1);
        el.classList.add(class2);
    } else {
        el.classList.remove(class2);
        el.classList.add(class1);
    }
}