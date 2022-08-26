const http = require("http");
const { infoCources } = require("./courses");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return processGET(req, res);

    case "POST":
      return processPOST(req, res);

    default:
      return sendResponeError(req, res);
  }
});

const processGET = (req, res) => {
  const path = req.url;

  // Prueba de agregar cabecera
  res.writeHead(200, { "Content-Type": "application/json" });

  if (path === "/") {
    return res.end("Bienvenidos a mi primer servidor y API creado en Node.js");
  } else if (path === "/api/courses") {
    return res.end(JSON.stringify(infoCources));
  } else if (path === "/api/courses/programmers") {
    return res.end(JSON.stringify(infoCources.programmers));
  } else if (path === "/api/courses/maths") {
    return res.end(JSON.stringify(infoCources.maths));
  }
  res.statusCode = 404;
  res.end("El recurso solicitado no existe");
};

const processPOST = (req, res) => {
  const path = req.url;

  if (path === "/api/courses/programmers") {
    return res.end(
      "El servidor recibio una solicitud POST /api/courses/programmers"
    );
  }

  res.statusCode = 404;
  res.end("El recurso solicitado no existe");
};

const sendResponeError = (req, res) => {
  const { method } = req;

  res.statusCode = 501;
  res.end(`El metodo ${method} no se pudo manejar por el servidor`);
};

server.listen(PORT, () => {
  console.log(`Servidor escuchado en http:\\localhost:${PORT}`);
});
