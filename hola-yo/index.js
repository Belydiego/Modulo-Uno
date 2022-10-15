console.log(process.argv);

const nombreDePersona = process.argv[2];

const saludo = "Hola " + nombreDePersona;

const numeroDeLetras = " Tu nombre tiene " + nombreDePersona.length + " letras";

const saludoFinal = saludo + numeroDeLetras;

console.log(saludoFinal);
