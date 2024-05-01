const UserRepository = require("../repository/UserRepository");

class UserService {
  constructor() {
    super.userRepository = new UserRepository();
  }

  async handle(data) {
    const { message } = await this.userRepository.Create(data);
    return { message };
  }
}

module.exports = UserService;
