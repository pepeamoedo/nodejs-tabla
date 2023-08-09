const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, list = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${i * base}\n`;
    }

    if(list){
        console.log(`
================
La base = ${base}
================
    `);

        console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}-${hasta}.txt`, salida);
    return `tabla-${base}-${hasta}.txt`;
    

  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
