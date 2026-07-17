document.addEventListener("DOMContentLoaded",()=>{


let currentLoveMessage=0;


/* =====================
ENTER UNIVERSE
===================== */


window.enterUniverse=function(){

document
.getElementById("opening")
.classList.add("hidden");


document
.getElementById("galaxy-map")
.classList.remove("hidden");


};







/* =====================
OPEN CHAPTER
===================== */


window.openChapter=function(id){


document
.getElementById("galaxy-map")
.classList.add("hidden");



document
.querySelectorAll(".chapter")
.forEach(section=>{

section.classList.add("hidden");

});



let chapter=document.getElementById(id);


if(chapter){

chapter.classList.remove("hidden");

chapter.classList.add("show");


window.scrollTo({

top:0,

behavior:"smooth"

});

}


};








/* =====================
BACK TO GALAXY
===================== */


window.backGalaxy=function(){


document
.querySelectorAll(".chapter")
.forEach(section=>{

section.classList.add("hidden");

});



document
.getElementById("galaxy-map")
.classList.remove("hidden");


window.scrollTo({

top:0,

behavior:"smooth"

});


};










/* =====================
BOB EFFECT
===================== */


let qualities=
document.getElementById(
"qualities-container"
);



if(qualities){


document.getElementById("bob-intro")
.innerHTML=
bobContent.bobEffect.intro;



bobContent.bobEffect.qualities.forEach(item=>{


let div=document.createElement("div");


div.innerHTML=`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;


qualities.appendChild(div);


});


}









/* =====================
BOB WINS
===================== */


let wins=
document.getElementById(
"wins-container"
);



if(wins){


bobContent.bobWins.forEach(item=>{


let div=document.createElement("div");


div.innerHTML=`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;


wins.appendChild(div);


});


}









/* =====================
WHY I LOVE YOU
===================== */


let loveBox=
document.getElementById(
"love-message"
);



if(loveBox){


generateLoveMessage();


}





window.generateLoveMessage=function(){


let messages=
bobContent.whyILoveYou.messages;


currentLoveMessage++;


if(currentLoveMessage>=messages.length){

currentLoveMessage=0;

}



let box=
document.getElementById(
"love-message"
);



box.innerHTML=

messages[currentLoveMessage];


};









/* =====================
MEMORY GALAXY
===================== */


let memory=
document.getElementById(
"memory-container"
);



if(memory){


bobContent.memories.forEach(item=>{


let card=document.createElement("div");


card.className="photo-card";


card.innerHTML=`

<img src="${item.image}">

<p>${item.caption}</p>

`;


memory.appendChild(card);


});


}








/* =====================
DISTANCE
===================== */


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








/* =====================
TIME CAPSULE
===================== */


let capsule=
document.getElementById(
"capsule-container"
);



if(capsule){


bobContent.timeCapsule.forEach(letter=>{


let card=document.createElement("div");


let today=new Date();

let unlock=
letter.unlockDate?
new Date(letter.unlockDate):
null;



if(unlock && today<unlock){


let days=
Math.ceil(
(unlock-today)/
(1000*60*60*24)
);



card.innerHTML=

`

<h3>🔒 ${letter.title}</h3>

<p>
Locked until ${letter.unlockDate}
</p>

<p>
Opens in ${days} days ✨
</p>

`;



}

else{


card.innerHTML=

`

<h3>💌 ${letter.title}</h3>

<p>${letter.message}</p>

`;

}


capsule.appendChild(card);


});


}









/* =====================
LETTERS
===================== */


let letters=
document.getElementById(
"letters-container"
);



if(letters){


bobContent.letters.forEach(item=>{


let div=document.createElement("div");


div.innerHTML=

`

<h3>${item.title}</h3>

<p>${item.message}</p>

`;



letters.appendChild(div);


});


}









/* =====================
MUSEUM
===================== */


let museum=
document.getElementById(
"museum-container"
);



if(museum){


bobContent.museum.forEach(item=>{


let div=document.createElement("div");


div.innerHTML=

`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;


museum.appendChild(div);


});


}









/* =====================
GARDEN
===================== */


let garden=
document.getElementById(
"garden-container"
);



if(garden){


bobContent.garden.forEach(item=>{


let div=document.createElement("div");


div.className="flower";

div.innerHTML=item;


garden.appendChild(div);


});


}








/* =====================
FUTURE
===================== */


let future=
document.getElementById(
"future-container"
);



if(future){


bobContent.future.forEach(item=>{


let div=document.createElement("div");


div.innerHTML=item;


future.appendChild(div);


});


}








document
.getElementById("final-message")
.innerHTML=
bobContent.finalMessage;



});









/* =====================
CANDLE
===================== */


window.blowCandle=function(){


let flame=
document.querySelector(".flame");


if(flame){

flame.remove();

}



for(let i=0;i<120;i++){


let piece=document.createElement("div");


piece.className="confetti-piece";


piece.style.position="fixed";

piece.style.top="-20px";


piece.style.left=
Math.random()*100+"vw";


piece.style.width="10px";

piece.style.height="15px";


piece.style.background=

[
"#ff9fc7",
"#ffd166",
"#ffffff",
"#c77dff"

][Math.floor(Math.random()*4)];



piece.style.animation=
"fall 3s linear";



document.body.appendChild(piece);



setTimeout(()=>{

piece.remove();

},4000);


}


};
