function startJourney(){

document
.getElementById("journey")
.scrollIntoView({
behavior:"smooth"
});

const music =
document.getElementById("bgMusic");

music.volume=0.5;

music.play();

}

function openLetter(){

document
.getElementById("letterPopup")
.style.display="flex";

}

function closeLetter(){

document
.getElementById("letterPopup")
.style.display="none";

}

function openImage(src){

document
.getElementById("imageModal")
.style.display="flex";

document
.getElementById("fullImage")
.src=src;

}

function closeImage(){

document
.getElementById("imageModal")
.style.display="none";

}

function celebrateFriendship(){

alert(
"Thank you for being part of my story 💙"
);

createConfetti();

}

function createConfetti(){

for(let i=0;i<80;i++){

let conf=document.createElement("div");

conf.innerHTML="🎉";

conf.style.position="fixed";
conf.style.left=Math.random()*100+"vw";
conf.style.top="-20px";
conf.style.fontSize="30px";

document.body.appendChild(conf);

let fall=Math.random()*3000+2000;

conf.animate(
[
{transform:"translateY(0)"},
{transform:"translateY(110vh)"}
],
{
duration:fall
}
);

setTimeout(()=>{
conf.remove();
},fall);

}
}

const stops = document.querySelectorAll('.stop');

window.addEventListener('scroll', () => {

    stops.forEach(stop => {

        const position = stop.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            stop.classList.add('show');
        }

    });

});

const cards =
document.querySelectorAll(".station-card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top =
card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.classList.add("show");

}

});

});