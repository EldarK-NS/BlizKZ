import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {useForm} from 'react-hook-form';
import MyDropDown from 'atoms/MyDropDown';

const CargoForm = () => {
  const {
    stores: {companyTypesStore, registartionStore},
  } = useContext(AppContext);

  useEffect(() => {
    companyTypesStore.getList();
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const pressHand = (data: any) => {
    console.log('DATA!!!s', data);
  };

  return (
    <View>
      <MyDropDown
        data={toJS(companyTypesStore.itemsList)}
        placeholder={'Hello'}
        name={'company_type'}
        control={control}
        rules={{
          required: 'Error',
        }}
      />

      <Pressable
        style={{width: 100, height: 50, borderWidth: 1, borderColor: 'red'}}
        onPress={handleSubmit(pressHand)}>
        <Text>Button</Text>
      </Pressable>
    </View>
  );
};

export default observer(CargoForm);

const styles = StyleSheet.create({});
