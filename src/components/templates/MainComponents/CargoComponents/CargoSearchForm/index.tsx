import {
  LogBox,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  YellowBox,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
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
import Entypo from 'react-native-vector-icons/Entypo';

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

  console.log('!!!!!!!!', startPlace, finishPlace);

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

  //!Open modals
  const [modalPlaceVisible, setModalPlacelVisible] = useState<boolean>(false);

  console.log('showModal', showModal);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={10}>
        <InputPlaceComponent
          onpress={() => {
            setModalPlacelVisible(!modalPlaceVisible);
            setShowModal(true);
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
