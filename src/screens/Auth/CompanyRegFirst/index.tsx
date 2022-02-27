import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigatorParamsList} from 'nav/types';
import {colors} from 'theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import TextComponent from 'atoms/TextComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CompanyFirst from 'templates/AuthComponents/CompanyFirst';

export interface IRCompanyRegFirstProps {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    'CompanyFirst'
  >;
}

const CompanyRegFirst: React.FC<IRCompanyRegFirstProps> = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{marginRight: 30}}>
            <Icon name="arrowleft" color={colors.text} size={24} />
          </Pressable>
          <TextComponent
            text={'Регистрация'}
            text_color={'text'}
            type={'h0'}
            font_family={'med'}
            position={'center'}
          />
        </View>
        <TextComponent
          text={'Введите информацию для регистрации'}
          text_color={'second'}
          type={'h3'}
          font_family={'med'}
          position={'center'}
          Style={{marginTop: 10, marginBottom: 20}}
        />
      </View>
      <CompanyFirst navigation={navigation} />
    </KeyboardAwareScrollView>
  );
};

export default CompanyRegFirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
