const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log('Archivo creado:', `${ archivo }`.cyan))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');
        break;
}

//let base = 4;

//console.log(argv);
// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = argv[2]
// let base = parametro.split('=')[1];

//console.log(base);

