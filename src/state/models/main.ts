export interface Response<D> {
  data: D;
  errors: {[key in string]: string[]};
  error: string;
}

export type RequestPromise<D> = Promise<Response<D> | D | {error: string}>;

export interface IAuthResponse {
  access_token: 'string';
  token_type: 'string';
}
