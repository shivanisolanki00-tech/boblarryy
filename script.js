function showStory(){

let sections = [
    "story",
    "memories",
    "letters",
    "final"
];


sections.forEach(function(id, index){

    setTimeout(function(){

        document.getElementById(id).classList.add("show");

    }, (index + 1) * 1500);

});


window.scrollTo({

top: window.innerHeight,

behavior:"smooth"

});

}
