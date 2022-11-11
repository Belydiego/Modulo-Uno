const products = [
  { id: 12, nombre: "producto 12", stock: 12 },
  { id: 13, nombre: "producto 13", stock: 13 },
  { id: 14, nombre: "producto 14", stock: 14 },
];

function getOne(id) {
  return products.find(function (obj) {
    return obj.id == id;
  });
}
exports.getOne = getOne;

exports.getAll = function () {
  return products;
};

exports.getAllWith = function (minStock) {
  return products.filter(function (item) {
    return item.stock >= minStock;
  });
};
