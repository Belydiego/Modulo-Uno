const compuUno = {
  id: "1",
  title: "Notebook Asus",
  marca: "asus",
  estado: "nuevo",
  sellerId: 1,
  precio: 58999,
  stock: 33,
  vendidos: 400,
  cuotas: 6,
  aceptaTarjeta: true,
  envioGratis: true,
};

const compuDos = {
  id: "2",
  title: "Notebook Lenovo",
  marca: "lenovo",
  estado: "usado",
  sellerId: 2,
  precio: 99999,
  stock: 450,
  vendidos: 500,
  aceptaTarjeta: true,
  cuotas: 12,
  envioGratis: false,
};

//+declarar dos datos para ir sumando puntos/marcadores
let puntosCompuUno = 0;
let puntosCompuDos = 0;

//+calcular precio de cuota de cada compu
const precioCuotaCompuUno = compuUno.precio / compuUno.cuotas;
const precioCuotaCompuDos = compuDos.precio / compuDos.cuotas;

//+comparo los precios de cada cuota y le sumo 1 punto a la compu ganadora
if (precioCuotaCompuUno < precioCuotaCompuDos) {
  puntosCompuUno++;
} else {
  puntosCompuDos++;
}

//+le sumo un punto a las compus q tenga envio gratis
if (compuUno.envioGratis) {
  puntosCompuUno++;
}
if (compuDos.envioGratis) {
  puntosCompuDos++;
}

//le sumo 2 puntos a las compus que sean nuevas
if (compuUno.estado === "nuevo") {
  puntosCompuUno = puntosCompuUno + 2; // shortcuts puntosCompuUno +=2
}
if (compuDos.estado === "nuevo") {
  puntosCompuDos = puntosCompuDos + 2;
}

//le sumo la cantidad de puntos correspondientes por marca a cada compu, si no le corresponde a ninguna marca no sumo nada
switch (compuUno.marca) {
  case "asus":
    puntosCompuUno++;
    break;
  case "lenovo":
    puntosCompuUno++;
    break;
  case "dell":
    puntosCompuUno += 2;
    break;
  case "samsung":
    puntosCompuUno += 2;
    break;
  case "apple":
    puntosCompuUno += 3;
    break;
}

switch (compuDos.marca) {
  case "asus":
    puntosCompuDos++;
    break;
  case "lenovo":
    puntosCompuDos++;
    break;
  case "dell":
    puntosCompuDos += 2;
    break;
  case "samsung":
    puntosCompuDos += 2;
    break;
  case "apple":
    puntosCompuDos += 3;
    break;
}

//comparo las ventas y le sumo a quien tenga mas
if (compuUno.vendidos > compuDos.vendidos) {
  puntosCompuUno++;
} else if (compuDos.vendidos > compuUno.vendidos) {
  puntosCompuDos++;
}

console.log("Compu Uno: ", puntosCompuUno);
console.log("Compu Dos: ", puntosCompuDos);

let compuGanadora;
if (puntosCompuUno > puntosCompuDos) {
  compuGanadora = compuUno;
} else if (puntosCompuDos > puntosCompuUno) {
  compuGanadora = compuDos;
}
console.log("Compu ganadora: ", compuGanadora.id, compuGanadora.title);
