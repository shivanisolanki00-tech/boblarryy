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

},1000*(index+1));

});


setTimeout(function(){

document.getElementById("story").scrollIntoView({
behavior:"smooth"
});

},1200);

}



function blowCandle(){

let flame = document.querySelector(".flame");

if(flame){
flame.style.display="none";
}

createConfetti();

}



function createConfetti(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.className="confetti-piece";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=
[
"pink",
"yellow",
"white",
"violet",
"skyblue"
][Math.floor(Math.random()*5)];


confetti.style.animationDuration=
(2+Math.random()*3)+"s";


document.body.appendChild(confetti);


}

}
