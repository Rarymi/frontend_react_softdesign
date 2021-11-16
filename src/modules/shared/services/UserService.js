class UserService {
  getLoggedUser() {
    return localStorage.getItem('user');
  }
  removeUser() {
    localStorage.removeItem('user');
  }
  setUser(username) {
    localStorage.setItem('user', username);
  }
}
export default new UserService();
