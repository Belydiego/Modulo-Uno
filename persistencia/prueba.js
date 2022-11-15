function main() {
  let dato = 4;
  const texto = '{"valor": 33}';

  const objeto = JSON.parse(texto);

  console.log(dato);
  console.log(objeto);
}
main();
