import {NetAPI} from '..';
import {ITransportType} from 'models/transport_types';
import {RequestPromise} from 'models/main';

export default class TransportTypes extends NetAPI {
  url_list = '/getTypeTransport';

  async getTransportTypesList(): RequestPromise<ITransportType[]> {
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
