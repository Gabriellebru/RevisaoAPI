const express = require("express");
const cors = require('cors');
const rotas = require("./Routes/clienteRota");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/rota", rotas);

module.exports = app.listen(process.env.PORT || 3333, () => {
    console.log("Server running");
});