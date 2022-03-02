import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyBottomSheet from 'atoms/MyBottomSheet';
import PlaceAutocomplite from 'organisms/PlaceComponent';
import InputPlaceComponent from 'atoms/InputPlaceComponent';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

const CargoSearchForm = () => {
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
});
