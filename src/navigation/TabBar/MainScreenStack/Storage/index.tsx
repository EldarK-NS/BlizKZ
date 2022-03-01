import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StorageStackNavigatorParamsList} from 'nav/types';
import FormScreen from 'screens/MainScreen/StorageSearch/FormScreen';
import ResultsScreen from 'screens/MainScreen/StorageSearch/ResultsScreen';

const Stack = createNativeStackNavigator<StorageStackNavigatorParamsList>();

const StorageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Form">
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default StorageStack;

const styles = StyleSheet.create({});
