

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;
let contador = 0;

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos`);
const inicioAlarme = () => {
    contador++;

    if (contador >= tempoParaAlarmarEmSegundos && contador < (tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos)) {
        console.log("Beep beep!");
    } else if (contador >= tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos) {
        if (numeroDeSonecas === 0) {
            console.log("Fim de Timer!");
            clearInterval(idTimer);
        } else {
            console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);
            tempoParaAlarmarEmSegundos += tempoSonecaEmSegundos + tempoAlarmandoEmSegundos;
            numeroDeSonecas--;
        }

    }
};
const idTimer = setInterval((inicioAlarme), 1000);