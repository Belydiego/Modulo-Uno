const array = [
  [3, 567, 23],
  [23, 54, 23],
  [27, 457, 67],
  [34, 675, 12],
];

const newArray = [];
let counter = 0;

for (let index = 0; index < array.length; index++) {
  for (const indexDeSubArray in array[index]) {
    const valor = array[index][indexDeSubArray];
    newArray[counter] = valor;
    counter++;
  }
}
console.log(newArray);
