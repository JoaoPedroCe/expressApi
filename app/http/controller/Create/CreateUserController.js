const Controller = require("../../Controller");
const { send } = require("../../handler/response");

class CreateUserController extends Controller {
  async handle(req, res) {
    super.sendResponse(res, { name: "Vicky" });
  }
}

module.exports = CreateUserController;
