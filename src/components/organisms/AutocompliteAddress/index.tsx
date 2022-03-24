import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
function AutocompliteAddress({
  setStartPlace,
  setFinishPlace,
}: IPlaceAutocomliteProps): JSX.Element {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Населенный пункт (город, село, ПГТ)"
        onPress={(data, details = null) => {
          let startString = '';
          if (details && details.formatted_address.includes('Казахстан')) {
            startString = `${details.address_components[0].long_name}, KZ`;
          } else if (
            details &&
            !details.formatted_address.includes('Казахстан')
          ) {
            startString = `${details.address_components[0].long_name}, ${details.address_components[2].short_name}`;
          }
          setStartPlace({id: data.place_id, placeName: startString});
          console.log('1:', data);
          console.log('2:', details);
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
        placeholder="Адрес (улица, переулок, строение, номер)"
        onPress={(data, details = null) => {
          //   if (details.formatted_address.includes('Казахстан')) {
          //     setFinishPlaceString(
          //       `${details.address_components[0].long_name}, KZ`,
          //     );
          //   } else {
          //     setFinishPlaceString(
          //       `${details.address_components[0].long_name}, ${details.address_components[2].short_name}`,
          //     );
          //   }
          //   setFinishPlace(data.place_id);
          console.log('3:', data);
          console.log('4:', details);
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
          type: 'address',
        }}
      />
      {/* <TouchableOpacity onPress={GoBack} style={styles.confirm}>
        <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
      </TouchableOpacity> */}
    </View>
  );
}
export default AutocompliteAddress;

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
  confirm: {
    marginTop: 430,
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
    fontFamily: 'IBMPlexSans-Regular',
  },
});
