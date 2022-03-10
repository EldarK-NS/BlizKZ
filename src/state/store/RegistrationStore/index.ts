import {action, makeObservable, observable} from 'mobx';
import AuthMock from 'repositories/AuthMock';
import {IRegisterCompany, IRegisterPerson, ILogin} from 'models/auth';
import BaseStore from 'store/BaseStore';
import SessionStore from 'store/SessionStore';
import LoadingStore from 'store/LoadingStore';

export default class RegistrationStore extends BaseStore {
  success = false;
  registerLogin = '';
  isAuthorized = false;
  authorizedData: ILogin | IRegisterCompany | IRegisterPerson | null = null;

  constructor(
    private authMock: AuthMock,
    private sessionStore: SessionStore,
    private loadingStore: LoadingStore,
  ) {
    super();
    makeObservable(this, {
      companySubmit: action,
      personSubmit: action,
      login: action,
      isAuthorized: observable,
      authorizedData: observable,
    });
  }

  companySubmit(
    fullname: string,
    phone: string,
    email: string,
    password: string,
    companyName: string,
    companyType: number,
    bin: number,
  ) {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () =>
        this.authMock.companyRegistration(
          fullname,
          phone,
          email,
          password,
          companyName,
          companyType,
          bin,
        ),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.authorizedData = res;
        this.isAuthorized = true;
      },
      onFinally: () => {
        if (this.authorizedData) {
          this.sessionStore.setToken(this.authorizedData?.token);
          this.sessionStore.setPhone(this.authorizedData.phone);
          this.sessionStore.setPassword(password);
        }
        this.loadingStore.setLoading(false);
      },
    });
  }
  personSubmit(
    fullname: string,
    phone: string,
    email: string,
    password: string,
  ) {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () =>
        this.authMock.personRegistration(fullname, phone, email, password),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.authorizedData = res;

        this.isAuthorized = true;
      },
      onFinally: () => {
        if (this.authorizedData) {
          this.sessionStore.setToken(this.authorizedData?.token);
          this.sessionStore.setPhone(this.authorizedData.phone);
          this.sessionStore.setPassword(password);
        }
        this.loadingStore.setLoading(false);
      },
    });
  }
  login(phone: string, password: string) {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.authMock.signin(phone, password),
      success: res => {
        console.log(JSON.stringify(res, null, 2));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.authorizedData = res;
        this.isAuthorized = true;
      },
      onFinally: () => {
        if (this.authorizedData) {
          this.sessionStore.setToken(this.authorizedData?.token);
          this.sessionStore.setPhone(this.authorizedData.phone);
          this.sessionStore.setPassword(password);
        }
        this.loadingStore.setLoading(false);
      },
    });
  }
}
