// Crear clase
const EventEmitter = require("events");

// crear instancia de clase evento
const emitterProducts = new EventEmitter();

// realizar evento compra
emitterProducts.on("buy", (total, numProdcuts) => {
  console.log(`Total de la compra: ${total}`);
  console.log(`Número de productos: ${numProdcuts}`);
});

emitterProducts.emit("buy", 500, 5);
