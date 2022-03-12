import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {useForm} from 'react-hook-form';
import MyDropDown from 'atoms/MyDropDown';
import MyButton from 'atoms/MyButton';
import MyBottomSheet from 'atoms/MyBottomSheet';
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
  }, []);

  useEffect(() => {
    auxiliaryStore.getSubTypeOfTransport(transportId);
  }, [transportId]);

  //!OpenBottomSheet
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  //!Modal for CheckBox Form
  const [chekBoxOpen, setCheckBoxOpen] = useState<boolean>(false);

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
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}>
      <InputPlaceComponent
        onpress={() => {
          setOpenModal(!openModal);
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
        text={'Документу, Условия погрузки, Условия транспортировки'}
        text_color={'second'}
        type={'h4'}
        font_family={'semi'}
        position={'center'}
        Style={{paddingVertical: 5, width: '80%', alignSelf: 'center'}}
      />
      <ButtonForAdditData
        button_title="Выбрать дополнительные условия"
        Style={{paddingHorizontal: 16, paddingVertical: 10}}
        onpress={() => console.log('pressed')}
      />
      <MyButton
        onpress={handleSubmit(confirmPost)}
        title={'НАЙТИ ГРУЗЫ'}
        size={'full'}
        background={'blue'}
        Style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}
      />
      <MyBottomSheet open={openModal}>
        <PlaceAutocomplite
          setStartPlace={(v: IPlces) => setStartPlace(v)}
          setFinishPlace={(v: IPlces) => setFinishPlace(v)}
        />
      </MyBottomSheet>
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
});
