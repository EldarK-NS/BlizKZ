import {action, makeObservable, observable} from 'mobx';
import BaseStore from 'store/BaseStore';
import AuxiliaryDataMock from 'repositories/AuxiliaryDataMock';
import {IAuxiliaryType} from 'models/auxiliary_type';
import LoadingStore from 'store/LoadingStore';

export default class AuxiliaryDataStore extends BaseStore {
  docsList: IAuxiliaryType[] = [];
  loadingList: IAuxiliaryType[] = [];
  conditionList: IAuxiliaryType[] = [];
  additConditionList: IAuxiliaryType[] = [];
  currencyList: IAuxiliaryType[] = [];
  paymentTypeList: IAuxiliaryType[] = [];
  transportTypeList: IAuxiliaryType[] = [];
  transportSubTypeList: IAuxiliaryType[] = [];
  fireSystemList: IAuxiliaryType[] = [];
  ventilationList: IAuxiliaryType[] = [];
  storageClassList: IAuxiliaryType[] = [];
  storageTypeList: IAuxiliaryType[] = [];
  equipmentCategoryList: IAuxiliaryType[] = [];
  equipmentSubCategoryList: IAuxiliaryType[] = [];
  equipmentRentList: IAuxiliaryType[] = [];
  equipmentTypeList: IAuxiliaryType[] = [];
  constructor(
    private auxiliaryMock: AuxiliaryDataMock,
    private loadingStore: LoadingStore,
  ) {
    super();
    makeObservable(this, {
      getDocs: action,
      getLoadings: action,
      getConditions: action,
      getAdditConditions: action,
      getCurrency: action,
      getPayments: action,
      getTypeOfTransport: action,
      getSubTypeOfTransport: action,
      getStorageFireSistem: action,
      getStorageVentSistem: action,
      getStorageClassList: action,
      getStorageTypeList: action,
      getCategoryEquipment: action,
      getSubCategoryEquipment: action,
      getEquipmentRentList: action,
      getEquipmentType: action,

      docsList: observable,
      loadingList: observable,
      conditionList: observable,
      additConditionList: observable,
      currencyList: observable,
      paymentTypeList: observable,
      transportTypeList: observable,
      transportSubTypeList: observable,
      fireSystemList: observable,
      ventilationList: observable,
      storageClassList: observable,
      storageTypeList: observable,
      equipmentCategoryList: observable,
      equipmentSubCategoryList: observable,
      equipmentRentList: observable,
      equipmentTypeList: observable,
    });
  }

  getDocs() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getCargoDocuments(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.docsList = res.data;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getLoadings() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getLoadings(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.loadingList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getConditions() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getPostConditions(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.conditionList = res.data;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getAdditConditions() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getPostAdditConditions(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.additConditionList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getCurrency() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getCurrencyList(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.currencyList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getPayments() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getPaymentTypeList(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.paymentTypeList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getTypeOfTransport() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getTransportType(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.transportTypeList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getSubTypeOfTransport(id: string) {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getSubTransportType(id),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.transportSubTypeList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getStorageFireSistem() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getStorageFireSystem(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.fireSystemList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getStorageVentSistem() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getStorageVentilation(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.ventilationList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getStorageClassList() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getStorageClass(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.storageClassList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getStorageTypeList() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getStorageType(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.storageTypeList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getCategoryEquipment() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getCategoryOfEquipment(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.equipmentCategoryList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getSubCategoryEquipment() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getEquipmentSubCategory(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.equipmentSubCategoryList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getEquipmentRentList() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getRentEquipment(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.equipmentRentList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
  getEquipmentType() {
    this.loadingStore.setLoading(true);
    this.makeRequest({
      request: () => this.auxiliaryMock.getTypeOfEquipment(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.equipmentTypeList = res;
      },
      onFinally: () => {
        this.loadingStore.setLoading(false);
      },
    });
  }
}
