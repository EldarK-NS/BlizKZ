import {NetAPI} from 'repositories/index';
import {HttpClient, LocalClient} from 'services/index';
import LocalAPI from 'repositories/LocalAPI';
import CompanyTypes from 'repositories/CompanyTypes';
import CompanyTypesStore from 'store/CompanyTypesStore';
import LoadingStore from 'store/LoadingStore';

const services = {
  httpClient: HttpClient,
  localClient: new LocalClient(),
};

const repositories = {
  http: new NetAPI(services.httpClient),
  local: new LocalAPI(services.localClient),
  companyTypes: new CompanyTypes(services.httpClient),
};
const loadingStore = new LoadingStore();
const stores = {
  companyTypesStore: new CompanyTypesStore(
    repositories.companyTypes,
    loadingStore,
  ),
};

export default {
  services,
  repositories,
  stores,
};
