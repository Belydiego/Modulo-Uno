//Ejercicio for in

const arrDos = [121, 465, 2, 45, 87, 1243, 56, 432];

for (const posicion in arrDos) {
  if (arrDos[posicion] > 100) {
    arrDos[posicion] = "Es mayor a 100";
  }
}
console.log(arrDos);
