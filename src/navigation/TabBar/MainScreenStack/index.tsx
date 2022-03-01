import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreenNavigatorParamsList} from 'nav/types';
import CargoStack from './Cargo';
import TransportStack from './Transport';
import AuctionStack from './Auction';
import StorageStack from './Storage';
import SpecEquipmentStack from './SpecEquipment';
import MainScreen from 'screens/MainScreen';

const Stack = createNativeStackNavigator<MainScreenNavigatorParamsList>();

const MainScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Cargo" component={CargoStack} />
      <Stack.Screen name="Transports" component={TransportStack} />
      <Stack.Screen name="Auction" component={AuctionStack} />
      <Stack.Screen name="Storage" component={StorageStack} />
      <Stack.Screen name="SpecEqupment" component={SpecEquipmentStack} />
    </Stack.Navigator>
  );
};

export default MainScreenStack;

const styles = StyleSheet.create({});
