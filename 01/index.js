const tabuada = (numero, callback) => {
    let resultado = '';
    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i} \n`;
    }
    callback(resultado);
};

tabuada(5, (resultado) => {
    console.log(resultado)
});