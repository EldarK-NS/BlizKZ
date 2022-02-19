import {action, makeObservable, observable} from 'mobx';
import {RequestPromise, Response} from 'models/main';

interface MakeRequestData<D> {
  request: () => RequestPromise<D>;
  success?: (response: Response<D>) => void;
  error?: (error: string) => void;
  onFinally?: () => void;
  loadingOff?: true;
  log?: boolean;
}

export default class BaseStore {
  loading = false;
  error = '';

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      clear: action,
    });
  }

  clear() {
    this.loading = false;
    this.error = '';
  }

  makeRequest<D>({
    request,
    success,
    error,
    onFinally,
    loadingOff,
  }: MakeRequestData<D>) {
    if (!loadingOff) {
      this.loading = true;
    }
    this.error = '';

    request()
      .then(res => {
        if (success) {
          success(res);
        }
      })
      .catch(err => {
        const errorMesssage = err?.error || 'Undefined error "BaseStore"';
        this.error = errorMesssage;
        if (error) {
          error(errorMesssage);
        }
      })
      .finally(() => {
        if (onFinally) {
          onFinally();
        }

        if (!loadingOff) {
          this.loading = false;
        }
      });
  }

  setError(err: string) {
    this.error = err;
  }
}
