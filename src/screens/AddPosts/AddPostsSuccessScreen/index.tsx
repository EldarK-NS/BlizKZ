import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PlaceAutocomplite from 'organisms/PlaceComponent';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

const AddPostsSuccessScreen = () => {
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
    <View>
      <PlaceAutocomplite
        setStartPlace={(v: IPlces) => setStartPlace(v)}
        setFinishPlace={(v: IPlces) => setFinishPlace(v)}
      />
    </View>
  );
};

export default AddPostsSuccessScreen;

const styles = StyleSheet.create({});
