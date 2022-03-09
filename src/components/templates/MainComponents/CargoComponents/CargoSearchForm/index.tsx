import {LogBox, StyleSheet, View, YellowBox} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MyBottomSheet from 'atoms/MyBottomSheet';
import PlaceAutocomplite from 'organisms/PlaceComponent';
import InputPlaceComponent from 'atoms/InputPlaceComponent';
import InputComponent from 'molecules/InputComponent';
import TextComponent from 'atoms/TextComponent';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyButton from 'atoms/MyButton';
import DateComponent from 'atoms/DateComponent';
import {colors} from 'theme/colors';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import DropDown from 'atoms/DropDown';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

const CargoSearchForm = () => {
  //!Store
  const {
    stores: {transportTypesStore},
  } = useContext(AppContext);
  //!Warning
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    transportTypesStore.getList();
  }, []);

  //!TransportType
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [typeId, setTypeId] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleClick = (v: number) => {
    setTypeId(v);
    setDropdownOpen(!dropdownOpen);
    setShowModal(true);
  };

  //! set Date
  const [inputStart, setInputStart] = useState<null | Date>(null);
  const [inputFinish, setInputFinish] = useState<null | Date>(null);

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

  //!Control
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  //!ConfirmButton
  const confirmFilter = (data: any) => {
    console.log(data);
  };

  console.log('showModal', showModal);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={10}>
        <InputPlaceComponent
          onpress={() => {
            setOpenModal(!openModal), setShowModal(true);
          }}
          placeFrom={startPlace.placeName ? startPlace.placeName : ''}
          placeTo={finishPlace.placeName ? finishPlace.placeName : ''}
        />
        <TextComponent
          text={'Дата, Транспорт, Количество мест'}
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
        <View
          style={[styles.rowBackground, {zIndex: showModal === true ? 0 : 3}]}>
          <TextComponent
            text={'Тип транспорта'}
            text_color={'text'}
            type={'h4'}
            font_family={'reg'}
            position={'left'}
            Style={{marginLeft: 16, marginTop: 10}}
          />
          <DropDown
            data={toJS(transportTypesStore.itemsList)}
            open={dropdownOpen}
            setOpen={() => {
              setDropdownOpen(!dropdownOpen), setShowModal(false);
            }}
            handleClick={v => handleClick(v)}
            placeholder={
              toJS(transportTypesStore.itemsList).length
                ? toJS(transportTypesStore.itemsList)[0].name
                : 'Выбрать тип транспорта'
            }
            Style={{
              paddingHorizontal: 16,
              marginTop: 5,
              alignItems: 'center',
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputComponent
            placeholder={'от'}
            name={'quantity_start'}
            control={control}
            rules={undefined}
            filter_mode={true}
            filter_title={'Количество мест'}
            Style_container={{width: '50%'}}
            style_input={{paddingLeft: 16, paddingBottom: 10}}
          />
          <InputComponent
            placeholder={'до'}
            name={'quantity_end'}
            control={control}
            rules={undefined}
            filter_mode={true}
            filter_title={''}
            Style_container={{width: '50%'}}
            style_input={{paddingRight: 16, paddingBottom: 10}}
          />
        </View>
        <TextComponent
          text={'Объем, Масса'}
          text_color={'second'}
          type={'h4'}
          font_family={'semi'}
          position={'center'}
          Style={{paddingVertical: 5}}
        />
        <View>
          <View style={styles.inputContainer}>
            <InputComponent
              placeholder={'от'}
              name={'volume_start'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={'Объем груза, м3'}
              Style_container={{width: '50%'}}
              style_input={{paddingLeft: 16}}
            />
            <InputComponent
              placeholder={'до'}
              name={'volume_end'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={''}
              Style_container={{width: '50%'}}
              style_input={{paddingRight: 16}}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              placeholder={'от'}
              name={'net_start'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={'Масса груза, т'}
              Style_container={{width: '50%'}}
              style_input={{paddingLeft: 16, paddingBottom: 10}}
            />
            <InputComponent
              placeholder={'до'}
              name={'net_end'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={''}
              Style_container={{width: '50%'}}
              style_input={{paddingRight: 16, paddingBottom: 10}}
            />
          </View>
        </View>
        <TextComponent
          text={'Ширина, Длина, Высота'}
          text_color={'second'}
          type={'h4'}
          font_family={'semi'}
          position={'center'}
          Style={{paddingVertical: 5}}
        />
        <View>
          <View style={styles.inputContainer}>
            <InputComponent
              placeholder={'от'}
              name={'width_start'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={'Ширина, м'}
              Style_container={{width: '50%'}}
              style_input={{paddingLeft: 16}}
            />
            <InputComponent
              placeholder={'до'}
              name={'width_end'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={''}
              Style_container={{width: '50%'}}
              style_input={{paddingRight: 16}}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              placeholder={'от'}
              name={'length_start'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={'Длина, м'}
              Style_container={{width: '50%'}}
              style_input={{paddingLeft: 16}}
            />
            <InputComponent
              placeholder={'до'}
              name={'length_end'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={''}
              Style_container={{width: '50%'}}
              style_input={{paddingRight: 16}}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              placeholder={'от'}
              name={'height_start'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={'Высота, м'}
              Style_container={{width: '50%'}}
              style_input={{paddingLeft: 16, paddingBottom: 10}}
            />
            <InputComponent
              placeholder={'до'}
              name={'height_end'}
              control={control}
              rules={undefined}
              filter_mode={true}
              filter_title={''}
              Style_container={{width: '50%'}}
              style_input={{paddingRight: 16, paddingBottom: 10}}
            />
          </View>
        </View>
        <MyButton
          onpress={handleSubmit(confirmFilter)}
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
    </View>
  );
};

export default observer(CargoSearchForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBackground: {
    width: '100%',
    backgroundColor: colors.form_background,
  },
});
