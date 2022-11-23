const pelis = require("./pelis");

function parsearARGV(argumentos) {
  let obj = {};
  argumentos.forEach((item, indice) => {
    // la logica de esta funcion me cuesta comprenderla un poco
    if (item.startsWith("--")) {
      const itemSinGuion = item.slice(2);
      obj[itemSinGuion] = argumentos[indice + 1];
    }
  });
  return obj;
}

function main() {
  const comandosAEjecutar = parsearARGV(process.argv);

  const resultadoFinal = pelis.searchByCriteria(comandosAEjecutar);
  console.table(resultadoFinal);
}

main();
