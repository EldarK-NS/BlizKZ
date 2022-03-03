import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainComponent from 'templates/MainComponents';
import {colors} from 'theme/colors';
import {MainScreenNavigationProp} from 'nav/types';
import HeaderBar from 'atoms/HeaderBar';

export interface IMainScreenProps {
  navigation: MainScreenNavigationProp;
}

const MainScreen: React.FC<IMainScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderBar type={'title'} navigation={undefined} title={'BLIZ.KZ'} />
      <View style={styles.innerWrapper}>
        <MainComponent navigation={navigation} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
});
