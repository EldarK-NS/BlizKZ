import LocalClient from 'services/LocalClient';
import {makeAutoObservable} from 'mobx';

export default class SessionStore {
  phone = '';
  password = '';
  token = '';
  loading = false;
  constructor(private $storage: LocalClient) {
    makeAutoObservable(this);
  }
  async setPhone(phone: string) {
    this.phone = phone;
    this.$storage.set('phone', phone);
  }
  async setPassword(password: string) {
    this.password = password;
    this.$storage.set('password', password);
  }
  async setToken(token: string) {
    this.token = token;
    this.$storage.set('token', token);
  }

  async getPhone() {
    this.loading = true;
    const phone = await this.$storage.get('phone');
    if (phone) {
      this.phone = phone;
    }
    this.loading = false;
  }
  async getPassword() {
    this.loading = true;
    const password = await this.$storage.get('password');
    if (password) {
      this.password = password;
    }
    this.loading = false;
  }
  async getToken() {
    this.loading = true;
    const token = await this.$storage.get('token');
    if (token) {
      this.token = token;
    }
    this.loading = false;
  }
}
