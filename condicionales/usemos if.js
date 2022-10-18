const aspiranteABeca = {
  nombre: "Diego",
  ingresos: 20000,
  hermanosEnElColegio: 3,
  KmDistanciaAlColegio: 10,
  becaCompleta: false,
  mediaBeca: false,
  puntos: 0,
};

if (aspiranteABeca.hermanosEnElColegio > 0) {
  //Por cada hermano en el colegio, suma un punto.
  aspiranteABeca.puntos =
    aspiranteABeca.puntos + aspiranteABeca.hermanosEnElColegio;
}

if (aspiranteABeca.KmDistanciaAlColegio > 0) {
  //Por cada km hacia el colegio, suma un punto.
  aspiranteABeca.puntos =
    aspiranteABeca.puntos + aspiranteABeca.KmDistanciaAlColegio;
}

if (aspiranteABeca.ingresos >= 20000) {
  //Por cada $20000 de ingresos, resta un punto.
  resultadoResta = Math.floor(aspiranteABeca.ingresos / 20000);
  aspiranteABeca.puntos = aspiranteABeca.puntos - resultadoResta;
}

if (aspiranteABeca.puntos >= 7) {
  //Para tener la beca, tiene que tener un mínimo de 7 puntos.
  aspiranteABeca.becaCompleta = true;
  aspiranteABeca.mediaBeca = false;
} else if (aspiranteABeca.puntos >= 4 && aspiranteABeca.puntos < 7) {
  //Para la media beca, tiene que tener un mínimo de 4 puntos.
  aspiranteABeca.mediaBeca = true;
  aspiranteABeca.becaCompleta = false;
} else if (aspiranteABeca.puntos < 4) {
  //Debajo de los 4 puntos, no obtiene la beca.
  aspiranteABeca.becaCompleta = false;
  aspiranteABeca.mediaBeca = false;
}

if (aspiranteABeca.becaCompleta) {
  console.log(
    "Felicitaciones " + aspiranteABeca.nombre + ": Obtuviste la beca"
  );
} else if (aspiranteABeca.mediaBeca) {
  console.log(
    "Felicitaciones " + aspiranteABeca.nombre + ": Obtuviste media beca"
  );
} else {
  console.log(
    "Lamentamos informarte " + aspiranteABeca.nombre + ": No obtuviste la beca"
  );
}
