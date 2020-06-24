var botonPomodoro = document.getElementById("pomodoro");
var botonHome = document.getElementById("home");
var botonPlay = document.getElementById("icon-play");
var reloj = document.getElementById("reloj");

let tiempoPedido = 3;

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
            timer = "se";
        }
    }, 1000);
}