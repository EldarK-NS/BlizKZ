import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API} from '@env';
import {colors} from 'theme/colors';

interface IPlces {
  id: string | null;
  placeName: string | null;
}

export interface IPlaceAutocomliteProps {
  setStartPlace: (v: IPlces) => void;
  setFinishPlace: (v: IPlces) => void;
}

export default function PlaceAutocomplite({
  setStartPlace,
  setFinishPlace,
}: IPlaceAutocomliteProps): JSX.Element {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Откуда"
        disableScroll
        onPress={(data, details = null) => {
          setStartPlace({id: data.place_id, placeName: data.description});
        }}
        styles={{
          textInput: styles.visibleContainer,
          container: {
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
          },
          listView: {
            position: 'absolute',
            top: 140,
          },
        }}
        fetchDetails
        query={{
          key: GOOGLE_API,
          language: 'ru',
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Куда"
        disableScroll
        onPress={(data, details = null) => {
          setFinishPlace({id: data.place_id, placeName: data.description});
        }}
        styles={{
          textInput: styles.visibleContainer,
          container: {
            position: 'absolute',
            top: 80,
            left: 10,
            right: 10,
            zIndex: 0,
          },
        }}
        fetchDetails
        query={{
          key: GOOGLE_API,
          language: 'ru',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  visibleContainer: {
    width: Dimensions.get('window').width - 20,
    height: 60,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
  },
});
