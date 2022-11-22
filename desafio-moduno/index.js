const pelis = require("./pelis");

function parsearARGV() {
  const argumentoParseado = sucess.argv(2);
  //... acá ocurre la magia
  return {
    search: "magic",
    sort: "rating",
  };
}

function main() {
  const comandosAEjecutar = parsearARGV(process.argv);

  pelis.searchByCriteria(comandosAEjecutar);
}

main();
