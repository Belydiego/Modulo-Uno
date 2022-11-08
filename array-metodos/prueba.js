function main() {
  const arrayDeNumeros = [34, 26, 5, 15, 17];

  console.log(arrayDeNumeros);

  arrayDeObj = arrayDeNumeros.map(function (item) {
    //return "número " + item; // concatena en forma de string
    return { numero: item }; // retorna en forma de objeto declarando una propiedad a eleccion y el parametro como valor
  });

  console.log(arrayDeObj);

  const elementoEncontrado = arrayDeObj.find(function (item) {
    return item.numero == 26; // otra forma: item["numero"] o item[el nombre de una variable que recibamos que tenga como valor la propiedad numero]
  });
  console.log(elementoEncontrado);

  const elementoFiltrado = arrayDeObj.filter(function (item) {
    return item["numero"] > 15; // filter siempre devuelve un array vacio a menos que retornemos una condicion
  });
  console.log(elementoFiltrado);

  const nombreDeLaPropiedad = "numero";
  const elementoOrdenado = arrayDeObj.sort(function (a, b) {
    if (a[nombreDeLaPropiedad] > b[nombreDeLaPropiedad]) {
      return 1;
    }
    if (a[nombreDeLaPropiedad] < b[nombreDeLaPropiedad]) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(elementoOrdenado);
}
main();
