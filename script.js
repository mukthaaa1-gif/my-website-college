document.addEventListener("DOMContentLoaded", function () {

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach((el)=>{

const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;
const revealPoint = 150;

if(revealTop < windowHeight - revealPoint){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});

});