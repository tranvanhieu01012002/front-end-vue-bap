export default class Auth {
  public readonly isLogin: boolean;
  constructor() {
    this.isLogin = !!localStorage.getItem("token");
  }
}
