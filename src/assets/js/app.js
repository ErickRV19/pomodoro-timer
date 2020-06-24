var botonPomodoro = document.getElementById("pomodoro");
var botonHome = document.getElementById("home");
var botonPlay = document.getElementById("icon-play");
var botonStop = document.getElementById("stop");
var mensaje = document.getElementById("messages");
var reloj = document.getElementById("reloj");
var audio1 = new Audio("/src/assets/audio/finish timer.mp3");
var audio2 = new Audio("/src/assets/audio/finish pomo.mp3");

let tiempoPedido = 3;
let countPomo = 0;

window.onload = function() {
    botonPlay.src = "/src/assets/images/icon-play.png";
    let status = 0;
};
botonPomodoro.onclick = function irATimer() {
    window.location.href = "/src/assets/pages/timer.html";
};

botonHome.onclick = function irAHome() {
    window.location.href = "/src/assets/pages/home.html";
};
// botonStop.onclick = function stop() {
//     audio1.stop();
// };

function pomo() {
    if (status == 0) {
        display = document.getElementById("reloj");
        console.log("play");
        startTimer(tiempoPedido, display);
        botonPlay.src = "/src/assets/images/icon-pause.png";
        status = 1;
    } else {
        console.log("pausado");
        botonPlay.src = "/src/assets/images/icon-play.png";
        status = 0;
    }
}

function finishTimer() {
    audio1.play();
    console.log("se termino el tiempo");
    mensaje.innerHTML = "Se acabo el tiempo.. ! Toma un descanso";
    botonPlay.src = "/src/assets/images/icon-play.png";
    status = 0;
}
botonPlay.addEventListener("click", pomo);

function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            countPomo += 1;
            timer = 0;
            finishTimer();
        }
    }, 1000);

    if (countPomo == 4) {
        audio2.play();
    }
}