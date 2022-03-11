import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import HeaderBar from 'atoms/HeaderBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AddPostScreenNavigatorParamsList} from 'nav/types';
import {RouteProp} from '@react-navigation/native';
import CargoForm from 'templates/AddPostComponents/CargoForm';
import TransportForm from 'templates/AddPostComponents/TransportForm';
import StorageForm from 'templates/AddPostComponents/StorageForm';
import AuctionForm from 'templates/AddPostComponents/AuctionForm';
import SpecEquipmentForm from 'templates/AddPostComponents/SpecEquipmentForm';

export interface IAddPostsFormScreenProps {
  navigation: NativeStackNavigationProp<
    AddPostScreenNavigatorParamsList,
    'AddPostForm'
  >;
  route: RouteProp<AddPostScreenNavigatorParamsList, 'AddPostForm'>;
}

const AddPostsFormScreen: React.FC<IAddPostsFormScreenProps> = ({
  navigation,
  route,
}) => {
  const {formType} = route.params;
  console.log(formType);
  return (
    <View style={styles.container}>
      <HeaderBar
        type={'normal'}
        navigation={navigation}
        nav_title="Назад"
        title="Добавить груз"
      />
      {formType === 'Cargo' ? (
        <CargoForm />
      ) : formType === 'Transports' ? (
        <TransportForm />
      ) : formType === 'Storage' ? (
        <StorageForm />
      ) : formType === 'Auction' ? (
        <AuctionForm />
      ) : (
        <SpecEquipmentForm />
      )}
    </View>
  );
};

export default AddPostsFormScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.form_background,
  },
});
