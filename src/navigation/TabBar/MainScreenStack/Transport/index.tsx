import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransportsStackNavigatorParamsList} from 'nav/types';
import FormScreen from 'screens/MainScreen/TransportSearch/FormScreen';
import ResultsScreen from 'screens/MainScreen/TransportSearch/ResultsScreen';

const Stack = createNativeStackNavigator<TransportsStackNavigatorParamsList>();

const TransportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Form">
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default TransportStack;

const styles = StyleSheet.create({});
