import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';

const CargoForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [typeId, setTypeId] = useState<number>(1);

  const {
    stores: {companyTypesStore, registartionStore},
  } = useContext(AppContext);

  useEffect(() => {
    companyTypesStore.getList();
  }, []);

  return (
    <View>
      <Text>CargoForm</Text>
    </View>
  );
};

export default observer(CargoForm);

const styles = StyleSheet.create({});
