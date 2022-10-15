const list = [1, 2, 26, 34];

const person = {
  firstname: "Diego",
  lastName: "Martinez",
  years: 34,
  dog: true,
};

console.log(list[1], person.firstname);

console.table(person);
console.assert(person.years > 40);
console.count(34);

console.time();
console.table(list);
console.timeEnd();

function mostrandoCosasEnLaTerminal(mensaje) {
  const saludo = "hola soy Diego";
  console.log(saludo);
}

mostrandoCosasEnLaTerminal();
