const fs = require("fs");
const arrayDePelis = fs.readFileSync(__dirname + "/pelis.json");

const getAll = function () {
  const todasLaspelis = JSON.parse(arrayDePelis);
  return todasLaspelis;
};

const searchBy = function (texto, arrayDePelis) {
  const resultadoSearch = arrayDePelis.filter(
    (item) => item.title.toLowerCase() === texto.toLowerCase()
  );
  return resultadoSearch;
};

const sortBy = function (propiedad, arrayDePelis) {
  const resultadoSort = arrayDePelis.sort((a, b) =>
    a[propiedad] > b[propiedad] ? 1 : -1
  );
  return resultadoSort;
};

const searchByTag = function (tag, arrayDePelis) {
  const resultadotag = arrayDePelis.filter((item) => item.tags.includes(tag));
  return resultadotag;
};

const noFormat = function (arrayDePelis) {
  const resultadoNoFormat = JSON.stringify(arrayDePelis);
  return resultadoNoFormat;
};

exports.searchByCriteria = function (criterios) {
  let pelis = getAll();

  if (criterios.search) {
    pelis = searchBy(criterios.search, pelis);
  }
  if (criterios.sort) {
    pelis = sortBy(criterios.sort, pelis);
  }
  if (criterios.tag) {
    pelis = searchByTag(criterios.tag, pelis);
  }
  if (criterios.hasOwnProperty("no-format")) {
    pelis = noFormat(pelis);
    return console.log(pelis);
  }
  return console.table(pelis);
};
