import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import TextComponent from 'atoms/TextComponent';
import SigninComponent from 'templates/AuthComponents/SignInComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigatorParamsList} from 'nav/types';

export interface ISignInProps {
  navigation: NativeStackNavigationProp<AuthNavigatorParamsList, 'SignIn'>;
}

const SignIn: React.FC<ISignInProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextComponent
        text={'Вход'}
        text_color={'text'}
        type={'h0'}
        font_family={'med'}
        position={'center'}
        Style={{marginTop: 80}}
      />
      <TextComponent
        text={'Введите ваши данные для входа'}
        text_color={'second'}
        type={'h4'}
        font_family={'med'}
        position={'center'}
      />
      <SigninComponent navigation={navigation} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingHorizontal: 35,
  },
});
