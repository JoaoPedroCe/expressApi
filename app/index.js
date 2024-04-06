const express = require("express");
const { apiRoutes } = require("./routes");
const app = express();
const port = 3000;

app.listen(port);
apiRoutes(app);
