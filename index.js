var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i < numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        animationbutton(buttonInnerHTML)
        
});
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animationbutton(event.key)
})



function makesound(key){
    switch(key){
            case "w" :  var audio = new Audio("sounds/tom-1.mp3");
                        audio.play();
                        break;
            case "a" :  var audio = new Audio("sounds/tom-2.mp3");
                        audio.play();
                        break;
            case "s" :  var audio = new Audio("sounds/tom-3.mp3");
                        audio.play();
                        break;
            case "d" :  var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
            case "j" :  var audio = new Audio("sounds/snare.mp3");
                        audio.play();
                        break;
            case "k" :  var audio = new Audio("sounds/crash.mp3");
                        audio.play();
                        break;
            case "l" :  var audio = new Audio("sounds/kick-bass.mp3");
                        audio.play();
                        break;
            default : console.log(buttonInnerHTML);
        }
}

function animationbutton(key){
    var activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    },100);
}
