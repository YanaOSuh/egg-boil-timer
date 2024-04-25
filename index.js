// МЕНЯЕТСЯ ЦВЕТ ДИВА С ЯЙЦОМ ПРИ НАВЕДЕНИИ МЫШИ
// const eggs = document.querySelectorAll("#eggs");
//     eggs.forEach(item => {
//     item.addEventListener("mouseover", () => {
//     removeFocus();
//     item.classList.add("selected");
//     })
//     removeFocus = () => {
//         eggs.forEach (item => {
//         item.classList.remove("selected");
//     })
//     }
// })

const btnStart = document.querySelector('#btnStart');
const btnReset = document.querySelector('#btnReset');
const ring = document.querySelector("#readySound");
const eggsAreReady = document.querySelector(".eggsAreReady");

const btnOne = document.querySelector("#sixMinEgg");
const btnTwo = document.querySelector("#eightMinEgg");
const btnThree = document.querySelector("#tenMinEgg");
const btnFour = document.querySelector("#twelveMinEgg");
const btnFive = document.querySelector("#fourteenMinEgg");

btnStart.addEventListener("click", () => {
    let amountTime = 0;
    let timerId;
    if(btnOne.checked) {
        timer(1)
    }
    if(btnTwo.checked) {
        timer(2)
    }
    if(btnThree.checked) {
        timer(10)
    }
    if(btnFour.checked) {
        timer(12)
    }
    if(btnFive.checked) {
        timer(14)
    }

function timer(time) {
    amountTime = time * 60;
    stopTimer()
    function calculateTime() {
        const countdown = document.querySelector("#countdown");
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
        amountTime--;

        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
            eggsAreReady.style.display = "block";
            btnStart.removeAttribute("disabled");
        }
        else {
            amountTime = amountTime;
        }
        if (amountTime === 3) {
            ring.src = "Alarm Clock.mp3";
            ring.play(); 
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        else {
            seconds = seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        else {
            minutes = minutes;
        }
        countdown.textContent = `${minutes} : ${seconds}`;
    }
    timerId = setInterval(calculateTime, 1000);
    btnStart.setAttribute("disabled", "true");
}

function stopTimer() {
    clearInterval(timerId);
}
})

btnReset.addEventListener ("click", ()=>{
    document.location.reload();
    btnStart.removeAttribute("disabled");
});
