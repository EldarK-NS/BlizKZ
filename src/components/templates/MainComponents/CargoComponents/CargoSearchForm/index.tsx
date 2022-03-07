import {LogBox, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyBottomSheet from 'atoms/MyBottomSheet';
import PlaceAutocomplite from 'organisms/PlaceComponent';
import InputPlaceComponent from 'atoms/InputPlaceComponent';
import InputComponent from 'molecules/InputComponent';
import TextComponent from 'atoms/TextComponent';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyButton from 'atoms/MyButton';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

const CargoSearchForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

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

  const confirmFilter = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={10}>
        <InputPlaceComponent
          onpress={() => setOpenModal(!openModal)}
          placeFrom={startPlace.placeName ? startPlace.placeName : ''}
          placeTo={finishPlace.placeName ? finishPlace.placeName : ''}
        />
        <TextComponent
          text={'Транспорт, Количество мест'}
          text_color={'second'}
          type={'h4'}
          font_family={'semi'}
          position={'center'}
          Style={{paddingVertical: 5}}
        />
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

export default CargoSearchForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
