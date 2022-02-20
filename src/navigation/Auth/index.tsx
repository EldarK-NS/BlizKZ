import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthNavigatorParamsList} from 'navTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react';
import SignIn from 'screens/Auth/SignIn';
import Registration from 'screens/Auth/Registration';

const Stack = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'Registration'} component={Registration} />
      </Stack.Navigator>
    </>
  );
};

export default observer(AuthStack);

const styles = StyleSheet.create({});
