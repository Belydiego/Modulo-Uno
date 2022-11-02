// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función soloObjetosConNombreYApellido()
// y pasar el test.
function soloObjetosConNombreyApellido(collection) {}

// Escribir la función soloLosNombres()
// y pasar el test.

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
