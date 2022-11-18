// este modulo tiene como proposito recibir el input por parte del usuario, entenderlo y delegar la operacion matematica a quien corresponda

const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  console.log(texto);
  return {
    // valores mock (valores maqueta)
    primerTermino: 2,
    segundoTermino: 3,
    operacion: "+",
  };
}

function ejecutarOperacion(objOperaciones) {
  return;
}

function main() {
  operacionParceada = parsearTerminos(process.argv[2]);
}
main();
