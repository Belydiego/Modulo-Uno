// ejercicio 1
let contador = 0;
let list = [];

while (contador < 130) {
  let resultado = { numero: Math.random() };
  contador++;

  list[list.length] = resultado; //list.push(resultado) push(propiedad), resultado(parametro)
}
console.log(list);

// ejercicio 2
const arr = [
  22, 58, 72, 70, 39, 93, 23, 37, 5, 62, 8, 34, 12, 43, 97, 36, 86, 78, 21, 63,
  57, 65, 46, 18, 91, 38, 76, 51, 35, 9, 92, 41, 13, 84, 83, 71, 30, 94, 10, 33,
  24, 29, 52, 88, 17, 68, 60, 67, 14, 27, 40, 1, 54, 26, 64, 19, 15, 25, 81, 48,
  59, 31, 49, 99, 45, 55, 66, 95, 87, 75, 16, 98, 79, 96, 77, 90, 61, 56, 11,
  85, 100, 4, 80, 74, 44, 7, 28, 50, 6, 47, 82, 2, 73, 42, 3, 89, 32, 69, 20,
  53,
];

let counter = 0;
let listPar = [];

while (counter < arr.length) {
  const resto = arr[counter] % 2;
  if (resto === 0) {
    listPar[listPar.length] = arr[counter];
  }
  counter++;
}
console.log(listPar);
