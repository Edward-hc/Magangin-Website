const AuthModel = {
  users: [],

  register({ firstName, lastName, email, password }) {
    const userExists = this.users.some(user => user.email === email);
    if (userExists) return { success: false, message: 'Email already registered' };

    this.users.push({ firstName, lastName, email, password });
    return { success: true };
  },

  login({ email, password }) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) return { success: true, user };
    return { success: false, message: 'Invalid email or password' };
  }
};

export default AuthModel;
