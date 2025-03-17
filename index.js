import express from "express";

import routeCliente from "./Routes/routeCliente.js";

const host = '0.0.0.0';
const port = 4020;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/clientes', routeCliente);

app.listen(port, host, () => {
    console.log(`Servidor backend rodando em http://${host}:${port}`);
});