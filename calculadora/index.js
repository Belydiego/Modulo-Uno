const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  const primerNumero = Number.parseFloat(texto[0]);
  const operacion = texto[1];
  const segundoNumero = Number.parseFloat(texto[2]);
  return {
    primerNumero: primerNumero,
    operacion: operacion,
    segundoNumero: segundoNumero,
  };
}

function ejecutarOperacion(objOperaciones) {
  const map = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "*": operaciones.multiplicar,
    "/": operaciones.dividir,
  };
  const simboloOperacional = map[objOperaciones.operacion];
  return simboloOperacional(
    objOperaciones.primerNumero,
    objOperaciones.segundoNumero
  );
}

function main() {
  const argumento = process.argv[2];
  const argumentosSeparados = argumento.split(/([+-/*])/);
  const operacionParseada = parsearTerminos(argumentosSeparados);

  console.log(ejecutarOperacion(operacionParseada));
}
main();
