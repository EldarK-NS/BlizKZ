import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItemWithIcon from 'molecules/ListItemWithIcon';
import {filterItemsList} from 'data/mainlist.js';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AddPostScreenNavigatorParamsList} from 'nav/types';
import {colors} from 'theme/colors';
import {RouteProp} from '@react-navigation/native';

export interface IAddPostCategoryComponentProps {
  navigation: NativeStackNavigationProp<
    AddPostScreenNavigatorParamsList,
    'CategoryPosts'
  >;
}

const AddPostCategoryComponent = ({
  navigation,
}: IAddPostCategoryComponentProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={filterItemsList}
        renderItem={({item}) => {
          return (
            <ListItemWithIcon
              Style={{
                paddingHorizontal: 16,
                marginVertical: 5,
              }}
              icon={item.icon}
              title={item.title}
              onpress={() =>
                navigation.navigate('AddPostForm', {formType: item.mainPath})
              }
            />
          );
        }}
      />
    </View>
  );
};

export default AddPostCategoryComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.form_background,
  },
});
