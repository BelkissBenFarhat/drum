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
  
