import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SpecEqupmentStackNavigatorParamsList} from 'nav/types';
import FormScreen from 'screens/MainScreen/SpecEquipment/FormScreen';
import ResultsScreen from 'screens/MainScreen/SpecEquipment/ResultsScreen';

const Stack =
  createNativeStackNavigator<SpecEqupmentStackNavigatorParamsList>();

const SpecEquipmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default SpecEquipmentStack;

const styles = StyleSheet.create({});
