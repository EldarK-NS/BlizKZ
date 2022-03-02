import {StyleSheet, View} from 'react-native';
import React from 'react';
import HeaderBar from 'atoms/HeaderBar';
import {colors} from 'theme/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CargoStackNavigatorParamsList} from 'nav/types';
import CargoSearchForm from 'templates/MainComponents/CargoComponents/CargoSearchForm';
export interface IFormScreenProps {
  navigation: NativeStackNavigationProp<CargoStackNavigatorParamsList, 'Form'>;
}

const FormScreen: React.FC<IFormScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'Cargo'}
        nav_title={'назад'}
      />
      <CargoSearchForm />
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
