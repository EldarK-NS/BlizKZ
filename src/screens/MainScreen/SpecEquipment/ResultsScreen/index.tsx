import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SpecEqupmentStackNavigatorParamsList} from 'nav/types';
import HeaderBar from 'atoms/HeaderBar';
export interface IResultsScreenProps {
  navigation: NativeStackNavigationProp<
    SpecEqupmentStackNavigatorParamsList,
    'Results'
  >;
}

const ResultsScreen: React.FC<IResultsScreenProps> = ({navigation}) => {
  return (
    <View>
      <HeaderBar
        type="normal"
        navigation={navigation}
        title={'SpecEqupment'}
        nav_title={'назад'}
      />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
