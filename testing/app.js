const navbar = document.querySelector(".navbar-container");
const secondNavbar = document.querySelector(".navbar-container-secondary");
const secondNavbarBtn = document.querySelector(".navbar-btn");
const toExtendAfter = Array.from(document.querySelectorAll('.bar_to_show'));
const carousel = document.querySelector(".carousel-container")


window.addEventListener('load', ()=> {
    // alert(window.innerWidth)
    showOrHideNavbarBtn();
    if (carousel.children[0].children[carousel.children[0].children.length - 2].complete) {
        carousel.classList.add('active');
    }
    else {
        carousel.children[0].children[carousel.children[0].children.length - 2].addEventListener('load', ()=> {
            carousel.classList.add('active');
        })
    }
})

window.addEventListener('scroll', ()=>showOrHideNavbarBtn())
window.addEventListener('resize', ()=>showOrHideNavbarBtn())
secondNavbarBtn.addEventListener('click', ()=>{
    switchClass(secondNavbarBtn, "active", "inactive")
    secondNavbar.classList.toggle('visible')
    // if (secondNavbarBtn.classList.contains('active')) {
    //     window.addEventListener('click', (e)=> {
    //         if (e.clientX >= secondNavbar.clientWidth) {
    //             switchClass(secondNavbarBtn, "active", "inactive")
    //             secondNavbar.classList.toggle('visible')
    //             // removeEventListener("click", window)
    //         }
            
    //     })
    // }
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

const scaleBar = new IntersectionObserver(function(entries, scaleBar) {
    entries.forEach(el => {
        if(!el.isIntersecting) {return;}
        el.target.classList.remove('bar_to_show');
        scaleBar.unobserve(el.target)
    });
}, {rootMargin: "-100px"});


toExtendAfter.forEach(el => scaleBar.observe(el))