var PATH = 'audio/oof.mp3';
var myAudio = new Audio(chrome.runtime.getURL(PATH));


var links = document.getElementsByTagName('a');
var buttons = document.getElementsByTagName('button');

for(var i = 0 ; i < links.length; i++) {
    links[i].addEventListener('click', playAudio);
}

for(var i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playAudio);
}

async function playAudio() {
    await myAudio.play();
}