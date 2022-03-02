import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBar from 'atoms/HeaderBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TransportsStackNavigatorParamsList} from 'nav/types';
export interface IResultsScreenProps {
  navigation: NativeStackNavigationProp<
    TransportsStackNavigatorParamsList,
    'Results'
  >;
}

const ResultsScreen: React.FC<IResultsScreenProps> = ({navigation}) => {
  return (
    <View>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'Transport'}
        nav_title={'назад'}
      />
      ;
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
