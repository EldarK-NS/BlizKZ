import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBar from 'atoms/HeaderBar';
import {colors} from 'theme/colors';

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar
        type="filter"
        navigation={'nav'}
        title={'Cargo'}
        nav_title={'назад'}
      />
      <Text>Cargo</Text>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
});
