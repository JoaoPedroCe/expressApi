const Controller = require("../../Controller");

class CreateUserController extends Controller {
  async handle(req, res) {
    this.sendResponse(req, res);
  }
}

module.exports = CreateUserController;
