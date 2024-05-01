const Controller = require("../../Controller");
const { send } = require("../../handler/response");

class CreateUserController extends Controller {
  async handle(req, res) {
    console.log(req.body);
    return send(res, { body: "Create User" });
  }
}

module.exports = CreateUserController;
