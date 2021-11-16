import Users from 'assets/data/Users.json';
import UserService from './UserService';

const findUserByUsername = (username) =>
  Users.find((u) => String(u.username) === String(username));

const findUserByEmail = (username) =>
  Users.find((u) => String(u.email) === String(username));

class AuthService {
  authenticate(username, password) {
    if (!findUserByEmail(username) && !findUserByUsername(username)) return;
    const user = findUserByEmail(username) || findUserByUsername(username);
    if (!(String(user.password) === String(password))) return;
    UserService.setUser(username);
  }
}

export default new AuthService();
