const { send } = require("./handler/response");

class Controller {
  sendResponse(res, body = {}) {
    return send(res, body);
  }
}

module.exports = Controller;
