function main() {
  const arrayDeObjetos = [];

  for (let index = 0; index < 20; index++) {
    const numeroRandom = Math.ceil(Math.random() * 99);
    arrayDeObjetos.push({
      numero: numeroRandom,
      texto: "collection",
    });
  }
  const listapares = arrayNumerosPares(arrayDeObjetos);

  console.log(arrayDeObjetos);
  console.table(listapares);
}
main();

function arrayNumerosPares(collection) {
  const listaPar = [];

  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];

    if (element.numero % 2 == 0) {
      listaPar.push(element);
    }
  }
  return listaPar;
}
