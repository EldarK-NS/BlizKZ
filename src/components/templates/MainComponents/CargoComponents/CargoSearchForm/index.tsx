import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyBottomSheet from 'atoms/MyBottomSheet';
import PlaceAutocomplite from 'organisms/PlaceComponent';
import InputPlaceComponent from 'atoms/InputPlaceComponent';
import InputComponent from 'molecules/InputComponent';
import TextComponent from 'atoms/TextComponent';
import {useForm} from 'react-hook-form';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

const CargoSearchForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
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

  return (
    <View style={styles.container}>
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
        Style={{paddingVertical: 15}}
      />
      <View>
        <View style={styles.inputContainer}>
          <InputComponent
            placeholder={'от'}
            name={'quantity_start'}
            control={control}
            rules={undefined}
            filter_mode={true}
            filter_title={'Количество мест'}
            Style_container={{width: '50%'}}
            style_input={{paddingLeft: 16}}
          />
          <InputComponent
            placeholder={'до'}
            name={'quantity_end'}
            control={control}
            rules={undefined}
            filter_mode={true}
            filter_title={''}
            Style_container={{width: '50%'}}
            style_input={{paddingRight: 16}}
          />
        </View>
      </View>

      <MyBottomSheet open={openModal}>
        <PlaceAutocomplite
          setStartPlace={(v: IPlces) => setStartPlace(v)}
          setFinishPlace={(v: IPlces) => setFinishPlace(v)}
        />
      </MyBottomSheet>
    </View>
  );
};

export default CargoSearchForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
