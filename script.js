document.addEventListener("DOMContentLoaded",()=>{


/* =========================
ENTER UNIVERSE
========================= */


window.enterUniverse=function(){

document
.getElementById("opening")
.classList.add("hidden");


document
.getElementById("galaxy-map")
.classList.remove("hidden");


};






/* =========================
OPEN CHAPTER
========================= */


window.openChapter=function(id){


document
.querySelectorAll(".chapter")
.forEach(section=>{

section.classList.add("hidden");

});


let section=document.getElementById(id);


if(section){

section.classList.remove("hidden");

section.classList.add("show");

window.scrollTo({

top:0,

behavior:"smooth"

});

}


};







/* =========================
BOB EFFECT
========================= */


let qualities=
document.getElementById(
"qualities-container"
);


if(qualities){


document.getElementById("bob-intro")
.innerHTML=
bobContent.bobEffect.intro;



bobContent.bobEffect.qualities.forEach(q=>{


let card=document.createElement("div");


card.innerHTML=`

<h3>${q.title}</h3>

<p>${q.text}</p>

`;


qualities.appendChild(card);


});


}








/* =========================
BOB WINS
========================= */


let wins=
document.getElementById(
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


let memories=
document.getElementById(
"memory-container"
);



if(memories){


bobContent.memories.forEach(memory=>{


let card=document.createElement("div");


card.className="photo-card";


card.innerHTML=`

<img src="${memory.image}">

<p>
${memory.caption}
<br>
${memory.date}
</p>

`;


memories.appendChild(card);


});


}








/* =========================
DISTANCE
========================= */


let distance=
document.getElementById(
"distance-container"
);



if(distance){


bobContent.longDistance.forEach(item=>{


let card=document.createElement("div");


card.className="photo-card";


card.innerHTML=`

<img src="${item.image}">

<p>${item.caption}</p>

`;


distance.appendChild(card);


});


}








/* =========================
TIME CAPSULE
========================= */


let capsule=
document.getElementById(
"capsule-container"
);



if(capsule){


bobContent.timeCapsule.forEach(letter=>{


let card=document.createElement("div");


let today=new Date();


let unlock=
letter.unlockDate
?
new Date(letter.unlockDate)
:
null;



if(unlock && today < unlock){


let diff=
unlock-today;


let days=
Math.floor(
diff/(1000*60*60*24)
);



card.innerHTML=`

<h3>🔒 ${letter.title}</h3>

<p>
Locked until:
<br>
${letter.unlockDate}
</p>

<p>
Opens in ${days} days ✨
</p>

`;


}


else{


card.innerHTML=`

<h3>💌 ${letter.title}</h3>

<p>
${letter.message}
</p>

`;


}



capsule.appendChild(card);



});


}








/* =========================
LETTERS
========================= */


let letters=
document.getElementById(
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
MUSEUM
========================= */


let museum=
document.getElementById(
"museum-container"
);



if(museum){


bobContent.museum.forEach(item=>{


let card=document.createElement("div");


card.innerHTML=

`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;


museum.appendChild(card);


});


}








/* =========================
GARDEN
========================= */


let garden=
document.getElementById(
"garden-container"
);



if(garden){


bobContent.garden.forEach(item=>{


let flower=document.createElement("div");


flower.className="flower";


flower.innerHTML=item;


garden.appendChild(flower);


});


}








/* =========================
FUTURE
========================= */


let future=
document.getElementById(
"future-container"
);



if(future){


bobContent.future.forEach(item=>{


let card=document.createElement("div");


card.innerHTML=item;


future.appendChild(card);


});


}








/* FINAL MESSAGE */


let final=
document.getElementById(
"final-message"
);



if(final){

final.innerHTML=
bobContent.finalMessage;

}


});








/* =========================
CANDLE + CONFETTI
========================= */


function blowCandle(){


let flame=
document.querySelector(".flame");


if(flame){

flame.remove();

}



for(let i=0;i<150;i++){


let piece=
document.createElement("div");


piece.className=
"confetti-piece";


piece.style.left=
Math.random()*100+"vw";


piece.style.background=
[
"#ffffff",
"#ffd166",
"#ff9acb",
"#6db6ff",
"#c77dff"

]
[
Math.floor(
Math.random()*5
)
];



piece.style.animationDuration=
(
2+
Math.random()*3
)
+"s";



document.body.appendChild(piece);



setTimeout(()=>{

piece.remove();

},5000);



}


}


window.blowCandle=blowCandle;
