import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StorageStackNavigatorParamsList} from 'nav/types';
import HeaderBar from 'atoms/HeaderBar';
export interface IResultsScreenProps {
  navigation: NativeStackNavigationProp<
    StorageStackNavigatorParamsList,
    'Form'
  >;
}

const ResultsScreen: React.FC<IResultsScreenProps> = ({navigation}) => {
  return (
    <View>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'Storage'}
        nav_title={'назад'}
      />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
