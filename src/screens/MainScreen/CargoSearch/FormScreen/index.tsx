import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from 'atoms/HeaderBar';
import {colors} from 'theme/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CargoStackNavigatorParamsList} from 'nav/types';
import MyBottomSheet from 'atoms/MyBottomSheet';
import PlaceAutocomplite from 'organisms/PlaceComponent';

interface IPlces {
  id: string | null;
  placeName: string | null;
}
export interface IFormScreenProps {
  navigation: NativeStackNavigationProp<CargoStackNavigatorParamsList, 'Form'>;
}

const FormScreen: React.FC<IFormScreenProps> = ({navigation}) => {
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

  console.log(startPlace, finishPlace);

  return (
    <View style={styles.container}>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'Cargo'}
        nav_title={'назад'}
      />
      <Pressable onPress={() => setOpenModal(!openModal)}>
        <Text>open</Text>
      </Pressable>
      <MyBottomSheet open={openModal}>
        <PlaceAutocomplite
          setStartPlace={(v: IPlces) => setStartPlace(v)}
          setFinishPlace={(v: IPlces) => setFinishPlace(v)}
        />
      </MyBottomSheet>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
});
