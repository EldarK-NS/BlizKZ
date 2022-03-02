import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuctionStackNavigatorParamsList} from 'nav/types';
import HeaderBar from 'atoms/HeaderBar';
export interface IFormScreenProps {
  navigation: NativeStackNavigationProp<
    AuctionStackNavigatorParamsList,
    'Form'
  >;
}

const FormScreen: React.FC<IFormScreenProps> = ({navigation}) => {
  return (
    <View>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'Auction'}
        nav_title={'назад'}
      />
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({});
