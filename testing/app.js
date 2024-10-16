
// *************** VARIABLE DECLARATIONS ****************

const navbar = document.querySelector(".navbar-container");
const secondNavbar = document.querySelector(".navbar-container-secondary");
const secondNavbarBtn = document.querySelector(".navbar-btn");
const toExtendAfter = Array.from(document.querySelectorAll('.bar_to_show'));
const carousel = document.querySelector(".carousel-container")
const arrayTimelineEl = Array.from(document.querySelectorAll('.timeline-el'))
const contactAnchorInSecondNav = document.querySelector('.navbar-el-secondary:nth-last-child(1) a')
const allImages = Array.from(document.querySelectorAll("img"))


// *************** ON LOAD, RESIZE, SCROLL EXECUTIONS ****************

setLineHeight()

window.addEventListener('load', ()=> {
    
    if (window.outerWidth <= 700) {        
        allImages.forEach(img => {
            if (img.src.includes('.svg')) {
                return;
            }
            imgSrcSplited = img.src.split('/')
            imgSrcSplited.splice(-1, 0, "low_version_for_mobile")
            newImgSrc = imgSrcSplited.join('/')
            img.src = newImgSrc
        })
    }
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

window.addEventListener('resize', ()=>{
    showOrHideNavbarBtn()
    setLineHeight();
})
window.addEventListener('scroll', ()=>{
    showOrHideNavbarBtn()
    window.removeEventListener("click", checkClickNavbar)
})


// *************** FRONTEND EXECUTIONS ****************


contactAnchorInSecondNav.addEventListener('click', ()=>{
    switchClass(secondNavbarBtn, "active", "inactive")
    secondNavbar.classList.toggle('visible')
})

secondNavbarBtn.addEventListener('click', ()=>{
    switchClass(secondNavbarBtn, "active", "inactive")
    secondNavbar.classList.toggle('visible')
    if (secondNavbarBtn.classList.contains('active')) {
        window.addEventListener('click', checkClickNavbar)
    }
})

function checkClickNavbar(e) {
    if (e.clientX >= secondNavbar.clientWidth) {
        switchClass(secondNavbarBtn, "active", "inactive")
        secondNavbar.classList.toggle('visible')
        window.removeEventListener("click", checkClickNavbar)
    }
}

function setLineHeight() {
    arrayTimelineEl.forEach(el=>{
        styleOfTimelineDate = getComputedStyle(el)
        newHeight = parseInt(styleOfTimelineDate['height']) + parseInt(styleOfTimelineDate["marginTop"]) + "px"
        el.children[0].style.setProperty('--height-of-line', newHeight)
    })
}

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

const timeLineEl = new IntersectionObserver(function(entries, timeLineEl) {
    entries.forEach(el => {
        if(!el.isIntersecting) {return;}
        el.target.classList.add('active');
        timeLineEl.unobserve(el.target)
    });
}, {rootMargin: "-120px"});


toExtendAfter.forEach(el => scaleBar.observe(el))
arrayTimelineEl.forEach(el => timeLineEl.observe(el))
