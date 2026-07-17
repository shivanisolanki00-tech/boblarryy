function startJourney(){


let sections = [
"story",
"memory",
"letters",
"birthday"
];


sections.forEach(function(section,index){


setTimeout(function(){


document.getElementById(section).classList.add("show");


},1500*(index+1));


});



setTimeout(function(){


document.getElementById("story").scrollIntoView({

behavior:"smooth"

});


},1600);



}





function blowCandle(){



let flame=document.querySelector(".flame");


flame.style.display="none";



createConfetti();



setTimeout(function(){


alert("Your wish has been sent to the universe ✨❤️");


},500);



}







function createConfetti(){


let container=document.getElementById("confetti");



for(let i=0;i<150;i++){


let piece=document.createElement("div");


piece.className="confetti-piece";



piece.style.left=Math.random()*100+"vw";


piece.style.top="-20px";



piece.style.backgroundColor=
[
"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ffffff",
"#c77dff"
]
[Math.floor(Math.random()*6)];



piece.style.animationDelay=
Math.random()*2+"s";



piece.style.transform=
"rotate("+Math.random()*360+"deg)";



container.appendChild(piece);



}



}
