var numberOfButtons = document.querySelectorAll(".drum").length
let keyMap = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
}

function playSoundFromLetter(key) {
    var audio = keyMap[key]
    var sound = new Audio(audio)
    sound.play();
}

function keySound(event){
    //get key's inner html
    var pressedKey = event.key
    //accessing keyMap audio element by index name of pressedKey
    playSoundFromLetter(pressedKey)
}

function clickSound(){
    var buttonInnerHTML = this.innerHTML;
    playSoundFromLetter(buttonInnerHTML)
}

addEventListener("keydown", keySound)

for (i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickSound)
}
    
/* MY WAY 
//create array that has all buttons
var array = document.getElementsByTagName("button")
//iterate on all of the elements

for (i=0; i<array.length; i++){
    array[i].addEventListener("click", function(){
        alert("I got clicked")
        })
        
    }*/
    

    //     switch(buttonInnerHTML){
    //         case "w":
    //             var crash = new Audio("sounds/crash.mp3")
    //             crash.play();
    //         break;
    
    //         case "a":
    //             var kick = new Audio("sounds/kick-bass.mp3")
    //             kick.play();
    //         break;
    //         case "s":
    //             var snare = new Audio("sounds/snare.mp3")
    //             snare.play();
    //         break;
    
    //         case "d":
    //             var tom1 = new Audio("sounds/tom-1.mp3")
    //             tom1.play();
    //         break;
    //         case "j":
    //             var tom2 = new Audio("sounds/tom-2.mp3")
    //             tom2.play();
    //         break;
    
    //         case "k":
    //             var tom3 = new Audio("sounds/tom-3.mp3")
    //             tom3.play();
    //         break;
    
    //         case "l":
    //             var tom4 = new Audio("sounds/tom-4.mp3")
    //             tom4.play();
    //         break;
    //     }
        
        
    // }