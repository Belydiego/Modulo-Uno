function parsearArgumentos(obj) {
  const objNuevo = {};

  obj.forEach(function (item, ind) {
    if (item.startsWith("--")) {
      item.slice(2);
      objNuevo[item.slice(2)] = obj[ind + 1];
    }
  });
  return objNuevo;
}

function main() {
  const objetoFinal = parsearArgumentos(process.argv.slice(2));
  console.log(objetoFinal);
}
main();
