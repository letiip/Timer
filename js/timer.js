//Creamos nuestras variables
let inputs, clock, alarm, hours, minutes, seconds, repeater;

window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('number'));
    clock = document.querySelector('.clock');
    alarma = new Audio('sound/sonido.mp3')
});

function startTimer() {
    //Lee inputs
    parseTime();
    //Actualiza la vista 
    setTime();
    //arancar el timer
    coutdown();

}

function parseTime() {
    //cambiar de string a number (inputs es el nombre de nuestro array)
    hours = Number(inputs[0].value); //value para que nos de el valor
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function setTime() {
    //clock-elemento de html
    //creamos nueva clase numero en el que si las horas son mayores que 9
    //entonces las imprime y si es menores agregar un cero atras, ej 16 o 07
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span>
    <p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span>
    <p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`

    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`
}

function coutdown() {
    //para hacer la cuenta de cuanto falta (runner)
    repeater = setInterval(runner, 1000);
}

function runner() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarma.play();
            }
        }
    }

    setTime();
}

function stopTimer() {
    clearInterval(repeater);
    location.reload();
}