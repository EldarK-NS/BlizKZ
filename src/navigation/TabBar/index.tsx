import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorParamsList} from 'nav/types';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InWork from 'screens/InWork';
import AddAdvert from 'screens/AddAdvert';
import ChatScreen from 'screens/ChatScreen';
import ProfileScreen from 'screens/ProfileScreen';
import MainScreenStack from './MainScreenStack';

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const TabBarStack = (): JSX.Element => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Main') {
              return <Feather name="home" size={size} color={color} />;
            }
            if (route.name === 'InWork') {
              return <Feather name="file-text" size={size} color={color} />;
            }
            if (route.name === 'AddAdvert') {
              return <Feather name="plus-circle" size={size} color={color} />;
            }
            if (route.name === 'Chat') {
              return (
                <FontAwesome name="envelope-o" size={size} color={color} />
              );
            }
            if (route.name === 'Profile') {
              return <Feather name="user" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          //   tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: '#008EFF',
          },
          headerTitleStyle: {
            fontFamily: 'IBMPlexSans-SemiBold',
            color: 'white',
          },
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          component={MainScreenStack}
          name={'Main'}
          options={{
            headerShown: false,
            tabBarLabel: 'Главная',
          }}
        />
        <Tab.Screen
          component={InWork}
          name={'InWork'}
          options={{
            headerShown: false,
            tabBarLabel: 'В работе',
          }}
        />
        <Tab.Screen
          component={AddAdvert}
          name={'AddAdvert'}
          options={{
            headerShown: false,
            tabBarLabel: 'Добавить',
          }}
        />
        <Tab.Screen
          component={ChatScreen}
          name={'Chat'}
          options={{
            headerShown: false,
            tabBarLabel: 'Сообщения',
          }}
        />
        <Tab.Screen
          component={ProfileScreen}
          name={'Profile'}
          options={{
            headerShown: false,
            tabBarLabel: 'Кабинет',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabBarStack;

const styles = StyleSheet.create({});
