const AuthModel = {
  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  },

  saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  },

  register({ firstName, lastName, email, password }) {
    const users = this.getUsers();
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = { firstName, lastName, email, password };
    users.push(newUser);
    this.saveUsers(users);
    return { success: true };
  },

  login({ email, password }) {
    const users = this.getUsers();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) return { success: true, user };
    return { success: false, message: 'Invalid email or password' };
  }
};

export default AuthModel;
