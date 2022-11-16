const fs = require("fs");
function main() {
  let dato = 34;
  const texto = '{"valor": 34}';

  const objeto = JSON.parse(texto);
  const archivo = fs.readFileSync("cosas.json");

  console.log(dato);
  console.log(objeto);
  console.log(archivo.toString()); // transforma lo importado en fs a string
  objetoConvertido = JSON.parse(archivo.toString()); // json.parse lo transforma en objeto
  console.log(objetoConvertido); // tranf en objeto realizamos la operacion que querramos. ejem: objetoConvertido.nombre imprime Diego.
}

main();
