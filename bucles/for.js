// ejercicio 1 for

let counter = 0;
let arrayUno = [];

while (counter < 87) {
  let numeroRandom = Math.round(Math.random() * 80 + 10);
  counter++;
  arrayUno[arrayUno.length] = numeroRandom;
}
console.log(arrayUno);

let numerosPar = 0;
let numerosImpar = 0;

for (let index = 0; index < arrayUno.length; index++) {
  const numeroActual = arrayUno[index];
  const division = numeroActual % 2;
  const resultado = division == 0;
  if (resultado) {
    numerosPar++;
  } else {
    numerosImpar++;
  }
}
console.log(numerosPar, numerosImpar);

//Ejercicio 2 for

const objectUno = {
  jswolulduo: "xajohreoec",
  xqannahpwr: "uwhoqkdcue",
  akuefkgvps: "fzgauhdzlj",
  ovrkqgtmad: "cvinwpgrxo",
  euqwramqxk: "znuwklbgeh",
  pbmprbciqs: "oxhixtyomr",
  zqogtnoran: "nvhvttipgg",
  jdkkvclxcw: "pcbhifqblg",
  hogbbupxim: "uzroqpfrnq",
};

const keys = Object.keys(objectUno);
const objectDos = {};

for (let index = 0; index < keys.length; index++) {
  const clave = keys[index];
  const valor = objectUno[clave];

  objectDos[valor] = clave;
}
console.log("Objeto uno: ", objectUno);
console.log("object dos: ", objectDos);
