import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Switcher from 'molecules/Switcher';
import MyButton from 'atoms/MyButton';
import InputComponent from 'molecules/InputComponent';
import {useForm} from 'react-hook-form';
import RulesComponent from 'atoms/RulesComponent';
import LinkedText from 'atoms/LinkedText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigatorParamsList} from 'nav/types';
import {colors} from 'theme/colors';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';

export interface ISigninComponentProp {
  navigation: NativeStackNavigationProp<AuthNavigatorParamsList, 'SignIn'>;
}

const SigninComponent: React.FC<ISigninComponentProp> = ({navigation}) => {
  const [company, setCompany] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {
    stores: {registartionStore, sessionStore},
  } = useContext(AppContext);

  const SignIn = (data: any) => {
    console.log(data);
    registartionStore.login(data.phone, data.password);
  };

  const goToRegistration = () => {
    if (!company) {
      navigation.navigate('Person');
    } else {
      navigation.navigate('CompanyRegistr');
    }
  };

  return (
    <View style={styles.container}>
      <Switcher
        value={company}
        setValue={() => setCompany(!company)}
        Style={{marginVertical: 30, width: '100%'}}
      />
      <InputComponent
        placeholder={'Номер телефона'}
        name={'phone'}
        Style={{width: '100%'}}
        control={control}
        rules={{
          required: 'Введите номер телефона!',
          minLength: {value: 11, message: 'Номер телефона 7 *** *** ** **'},
        }}
        // wrapperStyle={{marginVertical: 15, width: '100%'}}
      />
      <InputComponent
        placeholder={'Пароль'}
        name={'password'}
        Style={{width: '100%'}}
        control={control}
        secureTextEntry
        secure
        rules={{
          required: 'Введите пароль!',
          minLength: {
            value: 6,
            message: 'Минимальная длина пароля 6 знаков!',
          },
        }}
        // wrapperStyle={{marginVertical: 15, width: '100%'}}
        Style_container={{marginTop: 15}}
      />
      <LinkedText
        first_text={'Забыли пароль?'}
        second_text={null}
        onpress={() => console.log('nav')}
        Style={{
          marginTop: 10,
        }}
        textStyle={{alignSelf: 'flex-end'}}
      />
      <MyButton
        onpress={handleSubmit(SignIn)}
        title={'Войти в аккаунт'}
        Style={{borderRadius: 5, width: '100%', marginTop: 30}}
        size={'full'}
        background={'blue'}
      />
      <LinkedText
        first_text={'Нет аккаунта?'}
        second_text={'Зарегистрируйтесь'}
        onpress={goToRegistration}
        Style={{marginTop: 40, alignSelf: 'center'}}
        textStyle={{alignSelf: 'center'}}
      />
      <RulesComponent Style={{position: 'absolute', left: 0, bottom: 120}} />
    </View>
  );
};

export default observer(SigninComponent);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.form_background,
  },
});
