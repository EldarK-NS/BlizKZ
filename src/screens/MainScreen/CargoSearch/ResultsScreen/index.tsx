import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CargoStackNavigatorParamsList} from 'nav/types';

export interface IFormScreenProps {
  navigation: NativeStackNavigationProp<
    CargoStackNavigatorParamsList,
    'Results'
  >;
}

const ResultsScreen = () => {
  return (
    <View>
      <Text>ResultsScreen</Text>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
