function concatenarNombres(nombre, segundoNombre, apellido) {
  nombreCompleto = nombre + " " + segundoNombre + " " + apellido;
  return nombreCompleto;
}

const sumarNumeros = function (numeroUno, numeroDos, numeroTres) {
  return numeroUno + numeroDos * numeroTres;
};

function objetoNuevo(persona, nombre) {
  persona.nombre = nombre;
  return persona;
}

function main() {
  const resultado = sumarNumeros(26, 34, 15);
  console.log(resultado);

  const texto = concatenarNombres("Diego", "jesús", "Martínez");

  console.log(texto);

  const persona = {
    apellido: "Doblas",
  };
  const objetoFinal = objetoNuevo(persona, "Belén");

  console.log(objetoFinal);
}

main();
