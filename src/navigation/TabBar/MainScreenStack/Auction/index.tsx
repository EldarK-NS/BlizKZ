import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuctionStackNavigatorParamsList} from 'nav/types';
import FormScreen from 'screens/MainScreen/AuctionSearch/FormScreen';
import ResultsScreen from 'screens/MainScreen/AuctionSearch/ResultsScreen';

const Stack = createNativeStackNavigator<AuctionStackNavigatorParamsList>();

const AuctionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default AuctionStack;

const styles = StyleSheet.create({});
