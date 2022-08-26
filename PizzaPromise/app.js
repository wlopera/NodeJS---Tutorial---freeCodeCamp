const statusOrder = () => {
  return Math.random() < 0.8;
};

const orderPizzaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusOrder()) {
      resolve("!Pedido exitoso. Su Pizza esta en camino!");
    } else {
      reject("Ocurrio un error. Intenete nuevamente...!");
    }
  }, 3000);
});

const acceptOrder = (messageAccept) => {
  console.log(messageAccept);
};

const rejectOrder = (messageReject) => {
  console.log(messageReject);
};

// Pedido metodo 1
orderPizzaPromise.then(acceptOrder, rejectOrder);

// Pedido metodo 2
orderPizzaPromise.then(acceptOrder).catch(rejectOrder);

// Pedido metodo 3
orderPizzaPromise
  .then((messageAccept) => {
    console.log(messageAccept);
  })
  .then(null, (messageReject) => {
    console.log(messageReject);
  });

// Pedido metodo 4
orderPizzaPromise
  .then((messageAccept) => {
    console.log(messageAccept);
  })
  .catch((messageReject) => {
    console.log(messageReject);
  });
