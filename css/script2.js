const container = document.querySelector(".container");
const innertext = document.querySelector("#innertext");
const oro = document.querySelector(".oro");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathingAnimation();

function breathingAnimation () {
    innertext.innerHTML = "Breathe In!";
    oro.innerText = "You're doing well, keep on going"
    container.className = "container grow";

    setTimeout (() => {
        innertext.innerText = "Hold On";
        oro.innerHTML = "Amaxing, great just keep at it";
        setTimeout (() => {
            innertext.innerText = "Breathe Out!";
            oro.innerText = "Finally i knew you would make it";
            container.className = "container shrink";
        }, holdTime);
    }, breatheTime);
}

setInterval(breathingAnimation, totalTime);

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;

// let p = document.createElement("p");
// const word = document.querySelector(".words");

// word.appendChild(p);

// recognition.addEventListener("result", e => {
//     console.log(e);
// })
