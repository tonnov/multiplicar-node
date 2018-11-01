const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('==============================================='.green);
    console.log(`================== Tabla de ${ base } =================`.cyan);
    console.log('==============================================='.green);
    
    for (let i = 1; i <= limite; i++) {
        let res = base * i;
        console.log(`${ base } * ${ i } = ${ res }`);
    }
}

let crearArchivo = (base, limite) => {
    //console.log(base,' -- ', limite);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            //console.log(`${ base } * ${ i } = ${ res }`);
             data += `${ base } * ${ i } = ${ res }\n`;
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}