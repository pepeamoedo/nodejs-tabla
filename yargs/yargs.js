const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Numero que va a ser multiplicado.",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Muestra la tabla en pantalla.",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "Determina hasta que número llega la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número.";
    }
    return true;
  }).argv;

  module.exports = argv;