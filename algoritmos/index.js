let counter = 0;
const lista = [];

while (counter < 40) {
  const numeros = Math.random();
  const division = numeros * 30 + 10;
  const resultado = Math.floor(division);
  lista.push(resultado);
  counter++;
}

console.log(lista.length);
console.log(lista);

for (let contadorUno = 0; contadorUno < lista.length; contadorUno++) {
  for (let contadorDos = 0; contadorDos < lista.length; contadorDos++) {
    const esMayor = lista[contadorDos] > lista[contadorDos + 1];
    if (esMayor) {
      let aux = lista[contadorDos + 1];
      lista[contadorDos + 1] = lista[contadorDos];
      lista[contadorDos] = aux;
    }
  }
}
console.log(lista);
