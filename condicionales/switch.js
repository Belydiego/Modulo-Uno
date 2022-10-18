const precios = {
  zapatillas: 3200,
  pantalones: 4600,
  remeras: 2300,
  medias: 500,
};

const carritoDeCompra = "camperas";

switch (carritoDeCompra) {
  case "zapatillas":
    console.log(
      "Vas a comprar " +
        carritoDeCompra +
        " a un precio de: " +
        precios.zapatillas
    );
    break;

  case "pantalones":
    console.log(
      "Vas a comprar " +
        carritoDeCompra +
        " a un precio de: " +
        precios.pantalones
    );
    break;

  case "remeras":
    console.log(
      "Vas a comprar " + carritoDeCompra + " a un precio de: " + precios.remeras
    );
    break;

  case "medias ":
    console.log(
      "Vas a comprar " + carritoDeCompra + " a un precio de: " + precios.medias
    );
    break;

  default:
    console.log("Este producto no esta disponible");
    break;
}
