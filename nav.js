const humbeger = document.querySelector(".humbeger")
const navlinks = document.querySelector(".nav-links")
humbeger.addEventListener("click", ()=>{
    navlinks.classList.toggle("active")
    humbeger.classList.toggle("active")
})
