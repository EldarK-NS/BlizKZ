import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {useForm} from 'react-hook-form';
import MyDropDown from 'atoms/MyDropDown';
import MyButton from 'atoms/MyButton';
import PlaceAutocomplite from 'organisms/PlaceComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputPlaceComponent from 'atoms/InputPlaceComponent';
import TextComponent from 'atoms/TextComponent';
import {colors} from 'theme/colors';
import DateComponent from 'atoms/DateComponent';
import InputComponent from 'molecules/InputComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AddPostScreenNavigatorParamsList} from 'nav/types';
import {RouteProp} from '@react-navigation/native';
import ButtonForAdditData from 'atoms/ButtonForAdditData';
import CheckBoxForm from 'atoms/CheckBoxForm';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

interface ICargoFormProps {
  navigation: NativeStackNavigationProp<
    AddPostScreenNavigatorParamsList,
    'AddPostForm'
  >;
  route: RouteProp<AddPostScreenNavigatorParamsList, 'AddPostForm'>;
}

const CargoForm = ({navigation, route}: ICargoFormProps): JSX.Element => {
  const {
    stores: {auxiliaryStore},
  } = useContext(AppContext);

  //!Data for transport sub type
  const [transportId, setTransportId] = useState<string>('');

  useEffect(() => {
    auxiliaryStore.getCurrency();
    auxiliaryStore.getPayments();
    auxiliaryStore.getTypeOfTransport();
    auxiliaryStore.getDocs();
    auxiliaryStore.getConditions();
    auxiliaryStore.getLoadings();
    auxiliaryStore.getAdditConditions();
  }, []);

  useEffect(() => {
    auxiliaryStore.getSubTypeOfTransport(transportId);
  }, [transportId]);

  //!StartPlace
  const [startPlace, setStartPlace] = useState<IPlces>({
    id: null,
    placeName: null,
  });
  //!FinishPlace
  const [finishPlace, setFinishPlace] = useState<IPlces>({
    id: null,
    placeName: null,
  });

  //! set Date
  const [inputStart, setInputStart] = useState<null | Date>(null);
  const [inputFinish, setInputFinish] = useState<null | Date>(null);

  //!DropDown zIndex
  const [activeDD, setActiveDD] = useState<string>('');

  //!Open modals
  const [modalPlaceVisible, setModalPlacelVisible] = useState<boolean>(false);
  const [modalCheckBoxVisible, setModalCheckBoxlVisible] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const confirmPost = (data: any) => {
    console.log('DATA!!!s', data);
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}
      style={{flex: 1}}>
      <InputPlaceComponent
        onpress={() => {
          setModalPlacelVisible(!modalPlaceVisible);
        }}
        placeFrom={startPlace.placeName ? startPlace.placeName : ''}
        placeTo={finishPlace.placeName ? finishPlace.placeName : ''}
      />
      <TextComponent
        text={'Дата, Описание, Bec'}
        text_color={'second'}
        type={'h4'}
        font_family={'semi'}
        position={'center'}
        Style={{paddingVertical: 5}}
      />

      <View style={styles.rowBackground}>
        <DateComponent
          setInputStart={setInputStart}
          setInputFinish={setInputFinish}
          inputStart={inputStart}
          inputFinish={inputFinish}
          placeholderStart={'Дата погрузки'}
          placeholderFinish={'Дата выгрузки'}
        />
      </View>
      <InputComponent
        placeholder={'Наименование, краткое описание!'}
        filter_mode={true}
        filter_title="Описание груза"
        name={'description'}
        control={control}
        rules={{required: 'Добавьте описание груза!'}}
        Style_container={{paddingHorizontal: 16, paddingVertical: 5}}
      />
      <InputComponent
        placeholder="Вес груза"
        filter_mode={true}
        filter_title={'Вес, (т)'}
        name={'net'}
        control={control}
        rules={{required: 'Укажите вес груза!'}}
        keyboardType="numeric"
        Style_container={{paddingHorizontal: 16, paddingVertical: 10}}
      />
      <TextComponent
        text={'Транспорт'}
        text_color={'second'}
        type={'h4'}
        font_family={'semi'}
        position={'center'}
        Style={{paddingVertical: 5}}
      />
      <View
        style={[
          styles.rowBackground,
          {zIndex: activeDD === 'transport_type' ? 3 : 0},
        ]}>
        <MyDropDown
          data={toJS(auxiliaryStore.transportTypeList)}
          placeholder={'Выберите категорию транпорта'}
          name={'transport_type'}
          control={control}
          rules={{
            required: 'Укажите категорию транспорта!',
          }}
          layoutFunc={(v: string) => setActiveDD(v)}
          Style={{paddingHorizontal: 16, paddingVertical: 10}}
          with_title={true}
          title="Категория транспорта"
          additType={(v: string) => setTransportId(v)}
        />
      </View>
      <View
        style={[
          styles.rowBackground,
          {zIndex: activeDD === 'transport_sub_type' ? 3 : 0},
        ]}>
        <MyDropDown
          data={toJS(auxiliaryStore.transportSubTypeList)}
          placeholder={'Выберите тип транспорта'}
          name={'transport_sub_type'}
          control={control}
          rules={{
            required: 'Укажите тип транспорта!',
          }}
          layoutFunc={(v: string) => setActiveDD(v)}
          Style={{paddingHorizontal: 16, paddingVertical: 10}}
          with_title={true}
          title="Тип транспорта"
          additType={(v: string) => setTransportId(v)}
        />
      </View>
      <TextComponent
        text={'Цена, Валюта, Способ оплаты'}
        text_color={'second'}
        type={'h4'}
        font_family={'semi'}
        position={'center'}
        Style={{paddingVertical: 5}}
      />
      <InputComponent
        placeholder="Укажите цену "
        filter_mode={true}
        filter_title={'Ваша цена'}
        name={'price'}
        control={control}
        rules={{required: 'Укажите цену за транспортировку груза!'}}
        keyboardType="numeric"
        Style_container={{paddingHorizontal: 16, paddingVertical: 10}}
      />
      <View
        style={[
          styles.rowBackground,
          {zIndex: activeDD === 'currency' ? 3 : 0},
        ]}>
        <MyDropDown
          data={toJS(auxiliaryStore.currencyList)}
          placeholder={'Выберите валюту'}
          name={'currency'}
          control={control}
          rules={{
            required: 'Укажите валюту платежа!',
          }}
          layoutFunc={(v: string) => setActiveDD(v)}
          Style={{paddingHorizontal: 16, paddingVertical: 10}}
          with_title={true}
          title="Валюта"
        />
      </View>
      <View
        style={[
          styles.rowBackground,
          {zIndex: activeDD === 'payment_type' ? 3 : 0},
        ]}>
        <MyDropDown
          data={toJS(auxiliaryStore.paymentTypeList)}
          placeholder={'Выберите способ оплаты'}
          name={'payment_type'}
          control={control}
          rules={{
            required: 'Укажите способ оплаты!',
          }}
          layoutFunc={(v: string) => setActiveDD(v)}
          Style={{paddingHorizontal: 16, paddingVertical: 10}}
          with_title={true}
          title="Способ оплаты"
        />
      </View>
      <TextComponent
        text={'Документы, Условия погрузки, Условия транспортировки'}
        text_color={'second'}
        type={'h4'}
        font_family={'semi'}
        position={'center'}
        Style={{paddingVertical: 5, width: '80%', alignSelf: 'center'}}
      />
      <ButtonForAdditData
        button_title="Выбрать дополнительные условия"
        Style={{paddingHorizontal: 16, paddingVertical: 10}}
        // onpress={() => setShowCheckBox(!showCheckBox)}
        onpress={() => setModalCheckBoxlVisible(!modalCheckBoxVisible)}
      />
      <MyButton
        onpress={handleSubmit(confirmPost)}
        title={'НАЙТИ ГРУЗЫ'}
        size={'full'}
        background={'blue'}
        Style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCheckBoxVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalCheckBoxlVisible(!modalCheckBoxVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <CheckBoxForm
                title={'Документы'}
                data={toJS(auxiliaryStore.docsList)}
                control={control}
                name={'docs'}
              />
              <CheckBoxForm
                title={'Условия погрузки'}
                data={toJS(auxiliaryStore.loadingList)}
                control={control}
                name={'loadings'}
              />
              <CheckBoxForm
                title={'Условия транпортировки'}
                data={toJS(auxiliaryStore.conditionList)}
                control={control}
                name={'conditions'}
              />
              <CheckBoxForm
                title={'Доп условия'}
                data={toJS(auxiliaryStore.additConditionList)}
                control={control}
                name={'addit_conditions'}
              />
              <TouchableOpacity
                onPress={() => setModalCheckBoxlVisible(!modalCheckBoxVisible)}
                style={styles.confirm}>
                <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPlaceVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalPlacelVisible(!modalPlaceVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PlaceAutocomplite
              setStartPlace={(v: IPlces) => setStartPlace(v)}
              setFinishPlace={(v: IPlces) => setFinishPlace(v)}
            />
            <TouchableOpacity
              onPress={() => setModalPlacelVisible(!modalPlaceVisible)}
              style={[styles.confirm, {position: 'absolute', bottom: 100}]}>
              <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default observer(CargoForm);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBackground: {
    width: '100%',
    backgroundColor: colors.form_background,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 8,
  },
  confirm: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
});
