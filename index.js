
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

function handleClick(){
    var buttonHTML = this.innerHTML;

    fazerSom(buttonHTML);
    
    buttonAnimation(buttonHTML);
    console.log(buttonHTML);

}
}

    document.addEventListener("keydown", function(event){

    fazerSom(event.key);

    buttonAnimation(event.key);
});

function fazerSom(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;            
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;      
        case "z":
            var audio = new Audio("sounds/short-augh.mp3");
            audio.play();
            break;
        case "x":
            var audio = new Audio("sounds/augh.mp3");
            audio.play();
            break;      
        default:
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);



}