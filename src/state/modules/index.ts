import {NetAPI, NotificationMock} from 'repositories/index';
import {HttpClient, LocalClient} from 'services/index';
import LocalAPI from 'repositories/LocalAPI';

const services = {
  httpClient: HttpClient,
  localClient: new LocalClient(),
};

const repositories = {
  http: new NetAPI(services.httpClient),
  local: new LocalAPI(services.localClient),
};

const stores = {};

export default {
  services,
  repositories,
  stores,
};
