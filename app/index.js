const express = require("express");
const { apiRoutes } = require("./routes");
const { port } = require("../config/env");
const app = express();

console.log(process.env.HOST);

app.listen(port);
apiRoutes(app);
