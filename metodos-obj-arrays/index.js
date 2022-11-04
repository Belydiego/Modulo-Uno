// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función soloObjetosConNombreYApellido()
// y pasar el test.

function soloObjetosConNombreYApellido(collection) {
  const arrayDeObj = collection.filter(function (item) {
    return item.nombre && item.apellido;
  });
  return arrayDeObj;
}

// Escribir la función soloLosNombres()
// y pasar el test.

function soloLosNombres(collection) {
  const arrayDeStrings = collection.map(function (objeto) {
    return objeto.nombre;
  });

  const nombresConMayusculas = arrayDeStrings.map(function (nombre) {
    const primerCaracter = nombre.charAt(0);
    const mayuscula = primerCaracter.toUpperCase();
    const restoDelTexto = nombre.slice(1);
    return mayuscula + restoDelTexto;
  });
  return nombresConMayusculas;
}

// Tests. No modificar!
function testSoloObjetosConNombreYApellido() {
  const datosDePrueba = [
    { a: 1 },
    { nombre: true },
    { nombre: "Paula", apellido: "Gil" },
    { nombre: "Marce", apellido: "Zapaia" },
  ];
  const respuesta = soloObjetosConNombreYApellido(datosDePrueba);
  const hasPau = respuesta.find((r) => r.nombre == "Paula");
  const hasMarce = respuesta.find((r) => r.nombre == "Marce");

  if (respuesta.length == 2 && hasMarce && hasPau) {
    console.log("testSoloObjetosConNombreYApellido passed");
  } else {
    throw "testSoloObjetosConNombreYApellido failed";
  }
}

function testSoloLosNombres() {
  const datosDePrueba = [{ nombre: "paula" }, { nombre: "dana" }];

  const respuesta = soloLosNombres(datosDePrueba);

  if (respuesta.includes("Paula") && respuesta.includes("Dana")) {
    console.log("testSoloLosNombres passed");
  } else {
    throw "testSoloLosNombres failed";
  }
}

function main() {
  testSoloObjetosConNombreYApellido();
  testSoloLosNombres();
}

main();
