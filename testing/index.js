function cuentaPalabras(texto) {
  const cuantasPalabrasHay = texto.split(" "); // array de palabras
  let counter = 0;
  // for para saber cuantas cuantas palabras tiene ese array
  for (let index = 0; index < cuantasPalabrasHay.length; index++) {
    const numeroDePalabras = cuantasPalabrasHay[index];

    // if dentro del for para saber cuantas palabras tienen A
    if (numeroDePalabras[0] == "a") {
      counter++;
    }
  }
  console.log(counter);
  console.log(cuantasPalabrasHay.length);

  return {
    cantidadDePalabras: cuantasPalabrasHay.length,
    palabrasConA: counter,
  };
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();
