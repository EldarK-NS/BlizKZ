import {action, makeObservable, observable} from 'mobx';
import BaseStore from 'store/BaseStore';
import CompanyTypes from 'repositories/CompanyTypes';
import {IAuxiliaryType} from 'models/auxiliary_type';
import LoadingStore from 'store/LoadingStore';

export default class CompanyTypesStore extends BaseStore {
  itemsList: IAuxiliaryType[] = [];
  constructor(
    private companyTypes: CompanyTypes,
    private loadingStore: LoadingStore,
  ) {
    super();
    makeObservable(this, {
      getList: action,
      itemsList: observable,
    });
  }

  getList() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.companyTypes.getCompanyTypesList(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.itemsList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
}
