import {NetAPI} from '..';
import {IAuxiliaryType} from 'models/auxiliary_type';
import {RequestPromise} from 'models/main';

export default class AuxiliaryDataMock extends NetAPI {
  postDocuments = '/postDocuments';
  postLoading = '/postLoading';
  postCondition = '/postCondition';
  postAddition = '/postAddition';
  getCurrency = '/getCurrency';
  getPaymentType = '/getPaymentType';
  getTypeTransport = '/getTypeTransport';
  getTypeSubTransport = '/getTypeSubTransport?category_id=';
  getFireSystem = '/getFireSystem';
  getVentilation = '/getVentilation';
  getClassStorage = '/getClassStorage';
  getTypeStorage = '/getTypeStorage';
  getEquipmentCategory = '/getEquipmentCategory';
  getSubEquipmentCategory = '/getSubEquipmentCategory';
  getEquipmentRent = '/getEquipmentRent';
  getEquipmentType = '/getEquipmentType';

  async getCargoDocuments(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.postDocuments}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getLoadings(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.postLoading}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getPostConditions(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.postCondition}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getPostAdditConditions(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.postAddition}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getCurrencyList(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getCurrency}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getPaymentTypeList(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getPaymentType}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getTransportType(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getTypeTransport}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getSubTransportType(id: string): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getTypeSubTransport}${id}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getStorageFireSystem(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getFireSystem}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getStorageVentilation(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getVentilation}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getStorageClass(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getClassStorage}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getStorageType(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getTypeStorage}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getCategoryOfEquipment(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getEquipmentCategory}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getEquipmentSubCategory(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getSubEquipmentCategory}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getRentEquipment(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getEquipmentRent}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getTypeOfEquipment(): RequestPromise<IAuxiliaryType[]> {
    try {
      const response = await this.get(`${this.getEquipmentType}`);
      return response.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
}
