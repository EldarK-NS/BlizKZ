import NetAPI from '../NetAPI';
import {IRegisterCompany, ILogin, IRegisterPerson} from 'models/auth';
import {RequestPromise} from 'models/main';

export default class AuthMock extends NetAPI {
  private signinUrl = '/login';
  private registerCompanyUrl = '/entityRegistration';
  private registerPersonUrl = '/registration';

  public async signin(phone: string, password: string): RequestPromise<ILogin> {
    try {
      const response = await this.post(this.signinUrl, {
        phone: phone,
        password: password,
      });
      return response.data;
    } catch (e: any) {
      console.log(JSON.stringify(e.response, null, 2));
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }

  public async companyRegistration(
    fullname: string,
    phone: string,
    email: string,
    password: string,
    companyName: string,
    companyType: number,
    bin: number,
  ): RequestPromise<IRegisterCompany> {
    try {
      const response = await this.post(this.registerCompanyUrl, {
        fullName: fullname,
        phone: phone,
        email: email,
        password: password,
        companyName: companyName,
        companyType: companyType,
        bin: bin,
      });
      return response.data;
    } catch (e: any) {
      console.log(JSON.stringify(e.response, null, 2));
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  public async personRegistration(
    fullname: string,
    phone: string,
    email: string,
    password: string,
  ): RequestPromise<IRegisterPerson> {
    try {
      const response = await this.post(this.registerPersonUrl, {
        fullName: fullname,
        phone: phone,
        email: email,
        password: password,
      });
      return response.data;
    } catch (e: any) {
      console.log(JSON.stringify(e.response, null, 2));
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
}
