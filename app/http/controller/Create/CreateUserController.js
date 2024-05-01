const UserService = require("../../../services/UserService");
const Controller = require("../../Controller");

class CreateUserController extends Controller {
  constructor() {
    super();
  }

  async handle(req, res) {
    const service = new UserService();
    const { message } = await service.handle();
    super.sendResponse(res, { name: message });
  }
}

module.exports = CreateUserController;
