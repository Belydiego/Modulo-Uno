// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función textosCortos y pasar el test.

function textosCortos(arrayDeObjetos) {
  const arrayDeObjetosFinal = [];
  let counter = 0;

  for (let index = 0; index < arrayDeObjetos.length; index++) {
    const arrayOperacional = arrayDeObjetos[index];

    if (arrayOperacional.texto.split(" ").length <= 10) {
      arrayDeObjetosFinal[counter] = arrayOperacional;

      const titulo = arrayOperacional.titulo;
      const tituloTrimiado = titulo.trim();
      const primerCaracter = tituloTrimiado.charAt(0).toUpperCase(); // primer caracter separado y transformado a mayuscula
      const restoDelTexto = tituloTrimiado.slice(1);

      arrayDeObjetosFinal[counter].titulo = primerCaracter + restoDelTexto; // pisamos con el titulo modificado
      counter++;
    }
  }
  return arrayDeObjetosFinal;
}

//test: no modificar
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
