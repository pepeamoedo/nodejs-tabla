const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./yargs/yargs");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchico) => console.log(nombreArchico.rainbow, "Creado."))
  .catch((err) => console.log(err));
