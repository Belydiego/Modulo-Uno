// Este archivo recibe  los input del usuario y se encarga de imprimir los resultados en la terminal y con ayuda de otros modulos
//controller

const products = require("./products");

function main() {
  products.getOne(12);
  console.log("Un producto ", products.getOne(12));

  products.getAll();
  console.log("Todos los productos", products.getAll());

  products.getAllWith(13);
  console.log("Con stock ", products.getAllWith(13));
}

main();
