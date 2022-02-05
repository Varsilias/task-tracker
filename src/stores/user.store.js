import { observable, action } from 'mobx';

export default class UserStore {
  @observable username = null;

  constructor(authService) {
    this.authService = authService;
  }

  @action
  async signin(username, password) {
    this.username = await this.authService.signin(username, password);
  }

  @action
  async signup(email, username, password) {
    return this.authService.signup(email, username, password);
  }

  @action
  signout() {
    this.username = null;
    this.authService.removeToken();
  }
}
