import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigatorParamsList} from 'navTypes';
import AuthStack from 'nav/Auth';
import TabBarStack from 'nav/TabBar';

const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

const Navigator = observer((): JSX.Element => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Auth'}>
        <Stack.Screen name={'Auth'} component={AuthStack} />
        <Stack.Screen name={'TabBar'} component={TabBarStack} />
      </Stack.Navigator>
    </>
  );
});

const Routes = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default observer(Routes);
