import {StyleSheet} from 'react-native';
import React from 'react';
import {AddPostScreenNavigatorParamsList} from 'nav/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryPostsScreen from 'screens/AddPosts/CategoryPostsScreen';
import AddPostsFormScreen from 'screens/AddPosts/AddPostsFormScreen';
import AddPostsSuccessScreen from 'screens/AddPosts/AddPostsSuccessScreen';
import AdditionalData from 'screens/AddPosts/AdditionalData';

const Stack = createNativeStackNavigator<AddPostScreenNavigatorParamsList>();

const AddPostStack = () => {
  return (
    <Stack.Navigator initialRouteName="CategoryPosts">
      <Stack.Screen
        name="CategoryPosts"
        component={CategoryPostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddPostForm"
        component={AddPostsFormScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddPostSuccess"
        component={AddPostsSuccessScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdditionalDataScreen"
        component={AdditionalData}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AddPostStack;

const styles = StyleSheet.create({});
