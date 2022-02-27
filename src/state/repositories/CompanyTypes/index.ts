import {NetAPI} from '..';
import {ICompanyType} from 'models/company_type';
import {RequestPromise} from 'models/main';

export default class CompanyTypes extends NetAPI {
  url_list = '/getCompanyTypes';

  async getCompanyTypesList(): RequestPromise<ICompanyType[]> {
    try {
      const response = await this.get(`${this.url_list}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
}
