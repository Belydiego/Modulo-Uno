// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función textosCortos y pasar el test.

function textosCortos(collection) {
  const arrayVacio = [];
  let counter = 0;
  for (let index = 0; index < collection.length; index++) {
    const arrayDeTextosYTitulo = collection[index];
    console.log(arrayDeTextosYTitulo);
    if (arrayDeTextosYTitulo.texto.split(" ").length <= 0) {
      const titulo = arrayDeTextosYTitulo.titulo;
      const tituloTrimiado = titulo.trim();

      arrayVacio[counter] = arrayDeTextosYTitulo;
    }
  }
}

// test: no modificar
function testTextosCortos() {
  const textosDePrueba = [
    { titulo: " un titulo ", texto: "uno dos tres cuatro cinco" },
    {
      titulo: "what ever",
      texto: "uno dos tres cuatro cinco seis siete ocho nueve diez once",
    },
  ];
  const respuesta = textosCortos(textosDePrueba);

  if (respuesta.length == 1 && respuesta[0].titulo == "Un titulo") {
    console.log("testTextosCortos passed");
  } else {
    throw "testTextosCortos failed";
  }
}

function main() {
  testTextosCortos();
}

main();
