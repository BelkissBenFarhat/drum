var numberOfButtons = document.querySelectorAll(".drum").length
let keyMap = {
    w: "crash.mp3",
    a: "kick-bass.mp3",
    s: "snare.mp3",
    d: "tom-1.mp3",
    j: "tom-2.mp3",
    k: "tom-3.mp3",
    l: "tom-4.mp3"
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
  
