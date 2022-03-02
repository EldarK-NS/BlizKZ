import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TransportsStackNavigatorParamsList} from 'nav/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import HeaderBar from 'atoms/HeaderBar';

export interface IFormScreenProps {
  navigation: NativeStackNavigationProp<
    TransportsStackNavigatorParamsList,
    'Form'
  >;
}

const FormScreen: React.FC<IFormScreenProps> = ({navigation}) => {
  return (
    <View>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'Transport'}
        nav_title={'назад'}
      />
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({});
