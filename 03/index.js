const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const tempo = (10 / jogadores.length) * 1000;
let contador = 0;

const rodada = () => {
    if (contador < jogadores.length) {
        console.log(jogadores[contador]);
        contador++;
    } else {
        console.log("A rodada terminou!");
        clearInterval(id);
    }

};

const id = setInterval((rodada), tempo);