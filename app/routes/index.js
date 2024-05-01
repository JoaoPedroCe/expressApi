const CreateUserController = require("../http/controller/Create/CreateUserController");

const createUserController = new CreateUserController();

function apiRoutes(app) {
  app.post("/users", createUserController.handle);
}

module.exports = { apiRoutes };
