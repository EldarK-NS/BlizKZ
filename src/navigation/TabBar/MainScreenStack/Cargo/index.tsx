import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CargoStackNavigatorParamsList} from 'nav/types';
import FormScreen from 'screens/MainScreen/CargoSearch/FormScreen';
import ResultsScreen from 'screens/MainScreen/CargoSearch/ResultsScreen';

const Stack = createNativeStackNavigator<CargoStackNavigatorParamsList>();

const CargoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default CargoStack;

const styles = StyleSheet.create({});
