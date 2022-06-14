require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./src/routes/routes");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));