import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthNavigatorParamsList} from 'navTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react';
import SignIn from 'screens/Auth/SignIn';
import CompanyRegSecond from 'screens/Auth/CompanyRegSecond';
import CompanyRegFirst from 'screens/Auth/CompanyRegFirst';
import PersonReg from 'screens/Auth/PersonReg';

const Stack = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={'SignIn'}
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Person'}
          component={PersonReg}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'CompanyFirst'}
          component={CompanyRegFirst}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default observer(AuthStack);

const styles = StyleSheet.create({});
