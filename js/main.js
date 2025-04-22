let btn =document.querySelector(".fa-up-long")
let navbar = document.querySelector(".navbar")

btn.addEventListener("click", ()=>{
    window.scrollTo({
        top :0,
        behavior :"smooth"
    })
})
window.addEventListener("scroll", ()=>{
    if ( window.scrollY > 80) {
        btn.style.display = "block"
    }else{
         btn.style.display = "none"
    }
})
