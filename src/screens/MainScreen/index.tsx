import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainComponent from 'templates/MainComponents';
import {colors} from 'theme/colors';
import {MainScreenNavigationProp} from 'nav/types';

export interface IMainScreenProps {
  navigation: MainScreenNavigationProp;
}

const MainScreen: React.FC<IMainScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainComponent navigation={navigation} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },
});
