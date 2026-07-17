document.addEventListener("DOMContentLoaded",()=>{


/* =========================
OPEN UNIVERSE
========================= */


window.enterUniverse=function(){

document.getElementById("opening")
.classList.add("hidden");


document.getElementById("galaxy-map")
.classList.remove("hidden");


};





/* =========================
CHAPTER OPENING
========================= */


window.openChapter=function(id){


document.querySelectorAll(".chapter")
.forEach(section=>{

section.classList.add("hidden");

});


let chapter=document.getElementById(id);


if(chapter){

chapter.classList.remove("hidden");

chapter.classList.add("show");


chapter.scrollIntoView({

behavior:"smooth"

});

}



};







/* =========================
BOB EFFECT
========================= */


let qualityBox=document.getElementById(
"qualities-container"
);



if(qualityBox && bobContent){


bobContent.bobEffect.qualities.forEach(item=>{


let card=document.createElement("div");


card.innerHTML=`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;


qualityBox.appendChild(card);


});



document.getElementById("bob-intro")
.innerHTML=
bobContent.bobEffect.intro;


}









/* =========================
BOB WINS
========================= */


let wins=document.getElementById(
"wins-container"
);


if(wins){


bobContent.bobWins.forEach(item=>{


let card=document.createElement("div");


card.innerHTML=`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;


wins.appendChild(card);


});


}










/* =========================
MEMORY GALAXY
========================= */


let memoryBox=document.getElementById(
"memory-container"
);



if(memoryBox){


bobContent.memories.forEach(memory=>{


let card=document.createElement("div");


card.className="photo-card";


card.innerHTML=`

<img src="${memory.image}">


<p>${memory.caption}</p>

`;


memoryBox.appendChild(card);


});


}









/* =========================
DISTANCE PORTAL
========================= */


let distanceBox=document.getElementById(
"distance-container"
);



if(distanceBox){


bobContent.longDistance.forEach(item=>{


let card=document.createElement("div");


card.className="photo-card";


card.innerHTML=`

<img src="${item.image}">

<p>${item.caption}</p>

`;


distanceBox.appendChild(card);


});


}








/* =========================
LETTERS
========================= */


let letters=document.getElementById(
"letters-container"
);



if(letters){


bobContent.letters.forEach(letter=>{


let card=document.createElement("div");


card.innerHTML=`

<h3>${letter.title}</h3>

<p>${letter.message}</p>

`;


letters.appendChild(card);


});


}








/* =========================
FUTURE
========================= */


let future=document.getElementById(
"future-container"
);



if(future){


bobContent.future.forEach(item=>{


let card=document.createElement("div");


card.innerHTML=item;


future.appendChild(card);


});


}







});









/* =========================
CANDLE + CONFETTI
========================= */


function blowCandle(){


let flame=document.querySelector(".flame");


if(flame){

flame.remove();

}



for(let i=0;i<150;i++){


let confetti=document.createElement("div");


confetti.className="confetti-piece";


confetti.style.left=
Math.random()*100+"vw";


confetti.style.background=
[
"#ff69b4",
"#ffd166",
"#ffffff",
"#c77dff",
"#06d6a0"

][Math.floor(Math.random()*5)];



confetti.style.animationDuration=
(2+Math.random()*3)+"s";



document.body.appendChild(confetti);



setTimeout(()=>{

confetti.remove();

},5000);



}


}


window.blowCandle=blowCandle;
