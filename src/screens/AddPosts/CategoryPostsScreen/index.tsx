import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddPostCategoryComponent from 'templates/AddPostComponents/CategoryComponent';
import HeaderBar from 'atoms/HeaderBar';
import TextComponent from 'atoms/TextComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AddPostScreenNavigatorParamsList} from 'nav/types';
import {colors} from 'theme/colors';

export interface ICategoryPostsScreenProps {
  navigation: NativeStackNavigationProp<
    AddPostScreenNavigatorParamsList,
    'CategoryPosts'
  >;
}

const CategoryPostsScreen: React.FC<ICategoryPostsScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <HeaderBar
        type={'title'}
        navigation={undefined}
        title={'Добавить объявление'}
      />
      <TextComponent
        text={'Выберите категорию'}
        text_color={'text'}
        type={'h1'}
        font_family={'semi'}
        position={'center'}
        Style={{marginTop: 15}}
      />
      <TextComponent
        text={'Выберите раздел, в котором вы хотите разместить объявление.'}
        text_color={'second'}
        type={'h4'}
        font_family={'reg'}
        position={'center'}
        Style={{
          width: '80%',
          marginTop: 5,
          marginBottom: 15,
          alignSelf: 'center',
        }}
      />
      <AddPostCategoryComponent navigation={navigation} />
    </View>
  );
};

export default CategoryPostsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.form_background,
  },
});
