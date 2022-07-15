

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let contador = 0;

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos`);
const inicioAlarme = () => {
    contador++;

    if (contador >= tempoParaAlarmarEmSegundos && contador < (tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos)) {
        console.log("Beep beep!");
    } else if (contador >= tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos) {
        clearInterval(id);
    }
};
const id = setInterval((inicioAlarme), 1000);
