import {makeAutoObservable} from 'mobx';

export default class LoadingStore {
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(val: boolean) {
    this.loading = val;
  }
}
