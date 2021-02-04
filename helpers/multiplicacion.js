const { throws } = require('assert');
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 6, listar = false, hasta = 10) => {

    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'X'.yellow} ${i} ${'='.red} ${base * i}\n`;
        }
        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync('tabla-5.txt', salida);

        return "Tabla de 5 creada";
    } catch (err) {
        throw err;
    }

}
module.exports = {
    crearArchivo
}