import {NetAPI} from 'repositories/index';
import {HttpClient, LocalClient} from 'services/index';
import LocalAPI from 'repositories/LocalAPI';
import CompanyTypes from 'repositories/CompanyTypes';
import CompanyTypesStore from 'store/CompanyTypesStore';
import LoadingStore from 'store/LoadingStore';
import TransportTypes from 'repositories/TransportTypes';
import TransportTypesStore from 'store/TransportTypesStore';
import AuthMock from 'repositories/AuthMock';
import RegistrationStore from 'store/RegistrationStore';
import SessionStore from 'store/SessionStore';
import AuxiliaryDataMock from 'repositories/AuxiliaryDataMock';
import AuxiliaryDataStore from 'store/AuxiliaryDataStore';
const services = {
  httpClient: HttpClient,
  localClient: new LocalClient(),
};

const repositories = {
  http: new NetAPI(services.httpClient),
  local: new LocalAPI(services.localClient),
  companyTypes: new CompanyTypes(services.httpClient),
  transportTypes: new TransportTypes(services.httpClient),
  authMock: new AuthMock(services.httpClient),
  auxiliaryMock: new AuxiliaryDataMock(services.httpClient),
};

const loadingStore = new LoadingStore();
const sessionStore = new SessionStore(services.localClient);
const stores = {
  companyTypesStore: new CompanyTypesStore(
    repositories.companyTypes,
    loadingStore,
  ),
  transportTypesStore: new TransportTypesStore(
    repositories.transportTypes,
    loadingStore,
  ),
  sessionStore,
  registartionStore: new RegistrationStore(
    repositories.authMock,
    sessionStore,
    loadingStore,
  ),
  auxiliaryStore: new AuxiliaryDataStore(
    repositories.auxiliaryMock,
    loadingStore,
  ),
};

export default {
  services,
  repositories,
  stores,
};
