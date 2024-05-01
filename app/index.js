const express = require("express");
const { apiRoutes } = require("./routes");
const { port } = require("../config/env");
const app = express();

app.listen(port);
apiRoutes(app);
