const express = require("express");
const path = require("path");
const app = express();

const routes = require("./routes/route.js");

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(8000);

