import {action, makeObservable, observable} from 'mobx';
import AuthMock from 'repositories/AuthMock';
import {IRegisterCompany, IRegisterPerson} from 'models/auth';
import BaseStore from 'store/BaseStore';
import AuthStore from 'store/AuthStore';

export default class RegistrationStore extends BaseStore {
  success = false;
  registerLogin = '';

  constructor(private authMock: AuthMock, private authStore: AuthStore) {
    super();
    makeObservable(this, {
      registerLogin: observable,
      success: observable,
    });
  }
}
