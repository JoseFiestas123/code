// Progress Bar

const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((item)=> 
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item)=>
item.addEventListener("click",activeLink));

let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');

let progressValue = 0;
let progressEndValue = 93;
let speed = 50;

let progress = setInterval(() => {
progressValue++;
valueContainer.textContent = `♦ ${progressValue} ♦`;
progressBar.style.background = `conic-gradient(
var(--neon) ${progressValue * 3.6}deg,
rgb(8, 8, 8) ${progressValue * 3.6}deg
)`;
if (progressValue == progressEndValue) {
clearInterval(progress);
}
}, speed);

// Carousel

$(document).ready(function(){
$('.testimonial-content').owlCarousel({
loop:true,
nav:false,
dots:true,
margin:50,
responsive:{
0:{
    items:1
},
600:{
    items:1
},
1000:{
    items:2
}
}
})    
});