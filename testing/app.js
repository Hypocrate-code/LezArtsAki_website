const navbar = document.querySelector(".navbar-container");
const secondNavbar = document.querySelector(".navbar-container-secondary");
const secondNavbarBtn = document.querySelector(".navbar-btn");
const toExtendAfter = Array.from(document.querySelectorAll('.bar_to_show'));
window.addEventListener('load', ()=> showOrHideNavbarBtn())
window.addEventListener('scroll', ()=>showOrHideNavbarBtn())
window.addEventListener('resize', ()=>showOrHideNavbarBtn())
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

function showOrHideNavbarBtn() {
    if(navbar.display == "none" || window.scrollY >= navbar.scrollHeight - 20) {
        secondNavbarBtn.classList.add('visible')
    }
    else {
        if (secondNavbar.classList.contains('visible')) {
            secondNavbar.classList.remove('visible');
            switchClass(secondNavbarBtn, "active", "inactive")
        }
        secondNavbarBtn.classList.remove('visible');
    }
}

function scale_bar_on_io(el) {
    console.log(el);

}

const scaleBar = new IntersectionObserver(function(entries, scaleBar) {
    entries.forEach(el => {
        if(!el.isIntersecting) {return;}
        el.target.classList.remove('bar_to_show');
        scaleBar.unobserve(el.target)
    });
}, {rootMargin: "-100px"});


toExtendAfter.forEach(el => scaleBar.observe(el))