function tabuada(numeros, callback) {
    let resultado = "";
    for (let numero of numeros) {
        for (let i = 0; i < 11; i++) {
            resultado += `${numero} x ${i} = ${numero * i} \n`;
        }
        resultado += "--------------------\n"
    }
    callback(resultado)
}


tabuada([1, 5, 2], (resultado) => {
    console.log(resultado);
});