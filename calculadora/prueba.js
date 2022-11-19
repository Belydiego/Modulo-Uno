// este modulo tiene como proposito recibir el input por parte del usuario, entenderlo y delegar la operacion matematica a quien corresponda

//const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  return {
    // valores mock (valores maqueta) para probar si funciona
    primerTermino: 2,
    segundoTermino: 3,
    operacion: "+",
  };
}

function ejecutarOperacion(objOperaciones) {
  const map = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "*": operaciones.multiplicar,
    "/": operaciones.dividir,
  };
}

function main() {
  const OperacionLeida = ejecutarOperacion(parsearTerminos(process.argv[2]));
}
main();
