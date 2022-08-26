const productOrder = (product) => {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando ${product} de mantenimiento`);
    setTimeout(() => {
      if (product === "taza") {
        resolve("Ordenando una taza con el logo de mantenimiento");
      } else {
        reject("Este producto no esta disponible actualmente.");
      }
    }, 2000);
  });
};

const processOrder = (response) => {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${response}"`);
    setTimeout(() => {
      resolve("Gracias por su compra. Disfruta tu producto de mantenimiento");
    }, 4000);
  });
};

const realizeOrder = async (product) => {
  try {
    const response = await productOrder(product);
    console.log("Respuesta Recibida");
    console.log(response);
    const responseProcess = await processOrder(response);
    console.log(responseProcess);
  } catch (err) {
    console.log(err);
  }
};

// Proceso totalmente sincronizado
realizeOrder("taza");

// // Llamar procesos encadenamente (chaining promise)
// productOrder("taza")
//   .then((response) => {
//     console.log("Respuesta recibida");
//     console.log(response);
//     return processOrder(response);
//   })
//   .then((responseProcess) => {
//     console.log(responseProcess);
//   })
//   .catch((err) => console.log(err));

// // prueba de error (resolver)
// productOrder("lápiz")
//   .then((response) => {
//     console.log("Respuesta recibida");
//     console.log(response);
//     return processOrder(response);
//   })
//   .then((responseProcess) => {
//     console.log(responseProcess);
//   })
//   .catch((err) => console.log(err));
