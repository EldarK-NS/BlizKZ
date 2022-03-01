import {string} from 'prop-types';
export interface ISigninData {
  password: string | number;
  phone: string | number;
}

export interface IRegisterPerson {
  fullName: string;
  phone: string | number;
  email: string;
  password: string | number;
}
export interface IRegisterCompany {
  fullName: string;
  phone: string | number;
  email: string;
  password: string | number;
  companyName: string;
  companyType: number;
  bin: number;
}
