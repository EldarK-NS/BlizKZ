import {makeAutoObservable} from 'mobx';
import LocalClient from 'services/LocalClient';
import AuthMock from 'repositories/AuthMock';

export default class AuthStore {
  private action: (() => void) | null = null;
  token = '';
  loading = false;
  isAuthorized = false;

  constructor(private $storage: LocalClient, private authMock: AuthMock) {
    makeAutoObservable(this);
  }

  async setToken(token = '') {
    this.token = token;
    return token
      ? this.$storage.set('token', token)
      : this.$storage.remove('token');
  }

  async checkToken() {
    this.loading = true;
    const token = await this.$storage.get('token');
    // console.log('check token: ', token);

    if (token) {
      this.token = token;
    }

    this.loading = false;
  }

  setIsAuthorized(val: boolean) {
    this.isAuthorized = val;
  }

  // Вызов действия если пользователь прошел автоиризацию
  callAction() {
    if (this.action) {
      this.action();
    }
    this.action = null;
  }

  // Действия который может совершить только авторизованный пользователь
  guardAction(action: () => void) {
    if (this.isAuthorized) {
      action();
    } else {
      this.action = action;
    }
  }
}
