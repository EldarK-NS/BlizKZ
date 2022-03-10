import React, {useContext, useEffect, useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigatorParamsList} from 'navTypes';
import AuthStack from 'nav/Auth';
import TabBarStack from 'nav/TabBar';
import {AppContext} from 'context/App';

const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

const Navigator = observer((): JSX.Element => {
  const [phone, setPhone] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const {
    stores: {registartionStore, sessionStore},
  } = useContext(AppContext);

  useEffect(() => {
    sessionStore.getPhone();
    sessionStore.getPassword();
    setPhone(toJS(sessionStore.phone));
    setPassword(toJS(sessionStore.password));
    return () => {
      setPhone(null);
      setPassword(null);
    };
  }, []);

  console.log('NAV', phone, password, isAuth);

  useEffect(() => {
    if (phone?.length && password?.length) {
      registartionStore.login(phone, password);
    }
    if (registartionStore.isAuthorized) {
      setIsAuth(true);
    }
    return () => {
      setIsAuth(false);
    };
  }, [phone]);
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={isAuth ? 'Auth' : 'TabBar'}>
        <Stack.Screen name={'TabBar'} component={TabBarStack} />
        <Stack.Screen name={'Auth'} component={AuthStack} />
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
