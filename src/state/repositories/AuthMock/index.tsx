import NetAPI from '../NetAPI';
import {IRegisterCompany, ISigninData, IRegisterPerson} from 'models/auth';
import {IAuthResponse, RequestPromise} from 'models/main';

export default class AuthMock extends NetAPI {
  private signinUrl = '/login';
  private registerCompanyUrl = '/entityRegistration';
  private registerPersonUrl = '/registration';

  public async signin(data: ISigninData): RequestPromise<IAuthResponse> {
    try {
      const response = await this.post(this.signinUrl, {
        phone: data.phone,
        password: data.password,
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
    data: IRegisterCompany,
  ): RequestPromise<IAuthResponse> {
    try {
      const response = await this.post(this.registerCompanyUrl, {
        fullname: data.fullName,
        phone: data.phone,
        email: data.email,
        password: data.password,
        companyName: data.companyName,
        companyType: data.companyType,
        bin: data.bin,
      });
      return response.data;
    } catch (e: any) {
      console.log(JSON.stringify(e.response, null, 2));
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  // public async personRegistration(
  //   data: IRegisterCompany,
  // ): RequestPromise<IAuthResponse> {
  //   try {
  //     const response = await this.get(this.registerPersonUrl, {
  //       fullname: data.fullName,
  //       phone: data.phone,
  //       email: data.email,
  //       password: data.password,
  //     });
  //     return response.data;
  //   } catch (e: any) {
  //     console.log(JSON.stringify(e.response, null, 2));
  //     return this.getFirstError(
  //       e.response.data.errors || e.response.data.error,
  //     );
  //   }
  // }
}
