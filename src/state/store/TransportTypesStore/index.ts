import {action, makeObservable, observable} from 'mobx';
import BaseStore from 'store/BaseStore';
import TransportTypes from 'repositories/TransportTypes';
import {ITransportType} from 'models/transport_types';
import LoadingStore from 'store/LoadingStore';

export default class TransportTypesStore extends BaseStore {
  itemsList: ITransportType[] = [];
  constructor(
    private transportTypes: TransportTypes,
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
      request: () => this.transportTypes.getTransportTypesList(),
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
