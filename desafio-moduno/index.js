const pelis = require("./pelis");

function parsearARGV(argumentos) {
  let obj = {};
  argumentos.forEach((item, indice) => {
    if (item.startsWith("--")) {
      const itemSinGuion = item.slice(2);
      obj[itemSinGuion] = argumentos[indice + 1];
    }
  });
  return obj;
}

function main() {
  const comandosAEjecutar = parsearARGV(process.argv);

  pelis.searchByCriteria(comandosAEjecutar);
}

main();
