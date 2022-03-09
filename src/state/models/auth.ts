export interface ISigninData {
  password: string | number;
  phone: string | number;
}
export interface IRegisterPerson {
  success: boolean;
  token: string;
  fullName: string;
  phone: string;
  email: string;
  user_type: {
    '2': string;
  };
  user_type_id: number;
}
export interface IRegisterCompany {
  success: boolean;
  token: string;
  email: string;
  phone: string;
  companyName: string;
  companyType: string;
  fullName: string;
  bin: number;
}
export interface ILogin {
  success: boolean;
  token: string;
  email: string;
  phone: string;
  fullName: string;
  message: string;
}
