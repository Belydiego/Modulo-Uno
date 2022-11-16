const fs = require("fs");

function getDatos() {
  const datos = fs.readFileSync("datos.json");
  const collection = JSON.parse(datos);
  return collection; // se transforma en un array de objetos
}

// getAll tiene que devolver el array de objetos completo, por eso directamente retorna la funcion getDatos.
exports.getAll = function (collection) {
  getDatos();
  return getDatos();
};

exports.getOlderThan = function (mayorque) {
  return getDatos().filter(function (item) {
    return item.edad > 10;
  });
};
