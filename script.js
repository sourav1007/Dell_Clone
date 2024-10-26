let bar = document.querySelector(".bar");
let nav = document.querySelector(".nav");
let cross = document.querySelector(".cross")
let karts = document.getElementsByClassName("kart")
let overlay = document.querySelector(".overlay");
let body = document.getElementById("body")


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
        bar.classList.add("iconNone")
        cross.classList.add("iconBlock")
        overlay.classList.add("overlay-show")
        body.classList.add("scroll")
    })
}
if (cross) {
    cross.addEventListener("click", () => {
        nav.classList.remove("active");
        cross.classList.remove("iconBlock");
        bar.classList.remove("iconNone");
        overlay.classList.remove("overlay-show")
        body.classList.remove("scroll")



    })

}


let cards = document.querySelectorAll(".cards");
let heart = document.querySelectorAll(".heart")
let wishlist=document.querySelector(".wishlist")
// function like(a) {

//     heart[a].classList.toggle("red");
// }

for (let i = 0; i < cards.length; i++) {
    heart[i].addEventListener("click", () => {
        heart[i].classList.toggle("red");
      


    })
}
// _______________________________________________________________________________


function show(e) {
    e.target.parentElement.nextElementSibling.classList.toggle("show");
    e.target.classList.toggle("rotate");

}
// __COUNTER
// let number=document.querySelector(".number").innerHTML;
// let num=0;
// setInterval(()=>{
//     if(num<53) {
//         document.querySelector(".number").innerHTML = ++num;
//     }
    
// },10)



// ___FORM BACKDROP____
let formbackdrop=document.querySelector(".form-backdrop")
setTimeout(()=>{
    formbackdrop.classList.add("form-backdropshow")
    body.classList.add("scroll")


},2000)

function closeform(){
    formbackdrop.classList.remove("form-backdropshow")
    body.classList.remove("scroll")
     
}


