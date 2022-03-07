import {StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigatorParamsList} from 'nav/types';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import InputComponent from 'molecules/InputComponent';
import {useForm} from 'react-hook-form';
import TextComponent from 'atoms/TextComponent';
import MyButton from 'atoms/MyButton';
import LinkedText from 'atoms/LinkedText';
import RulesComponent from 'atoms/RulesComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export interface IPersonRegister {
  navigation: NativeStackNavigationProp<AuthNavigatorParamsList, 'Person'>;
}

const PersonRegister: React.FC<IPersonRegister> = ({navigation}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const pwd = watch('password');
  const {
    stores: {companyTypesStore},
  } = useContext(AppContext);

  const SignUp = (data: any) => {
    console.log('data', data);
  };

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <TextComponent
          text={'Контакное лицо'}
          text_color={'text'}
          type={'h3'}
          font_family={'bold'}
          position={'left'}
          Style={{marginTop: 20, marginBottom: 10}}
        />
        <InputComponent
          placeholder={'ФИО'}
          name={'user_name'}
          control={control}
          rules={{
            required: 'Введите ФИО контактного лица!',
            minLength: {
              value: 3,
              message: 'Минимальная длина 3 символа!',
            },
          }}
          Style={{width: '100%', borderRadius: 5, marginVertical: 10}}
          // wrapperStyle={{width: '100%'}}
        />
        <InputComponent
          placeholder={'Эл. адрес'}
          name={'email'}
          control={control}
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: 'Не валидный электронный адрес!',
            },
            required: 'Введите ваш электронный адрес!',
          }}
          Style={{width: '100%', borderRadius: 5, marginVertical: 10}}
          // wrapperStyle={{width: '100%'}}
          keyboardType={'email-address'}
        />
        <InputComponent
          placeholder={'Номер телефона'}
          name={'phone'}
          control={control}
          rules={{
            required: 'Введите номер телефона!',
            minLength: {
              value: 11,
              message: 'Минимальная длина 11 символов!',
            },
          }}
          Style={{width: '100%', borderRadius: 5, marginVertical: 10}}
          // wrapperStyle={{width: '100%'}}
          keyboardType="phone-pad"
        />
        <TextComponent
          text={'Пароль'}
          text_color={'text'}
          type={'h3'}
          font_family={'bold'}
          position={'left'}
          Style={{marginTop: 20, marginBottom: 10}}
        />
        <InputComponent
          placeholder={'Введите пароль'}
          name={'password'}
          control={control}
          secureTextEntry
          secure
          rules={{
            required: 'Введите пароль!',
            minLength: {
              value: 6,
              message: 'Минимальная длина 6 символов!',
            },
          }}
          Style={{width: '100%', borderRadius: 5, marginVertical: 10}}
          // wrapperStyle={{width: '100%'}}
        />
        <InputComponent
          placeholder={'Повторите пароль'}
          name={'password_repeat'}
          control={control}
          secureTextEntry
          secure
          rules={{
            validate: (value: string | number) =>
              value === pwd || 'Пароли не совпадают!',
            required: 'Повторите пароль!',
            minLength: {
              value: 6,
              message: 'Минимальная длина 6 символов!',
            },
          }}
          Style={{width: '100%', borderRadius: 5, marginVertical: 10}}
          // wrapperStyle={{width: '100%'}}
        />
        <MyButton
          onpress={handleSubmit(SignUp)}
          title={'Регистрация'}
          Style={{borderRadius: 5, width: '100%', marginTop: 30}}
          size={'full'}
          background={'blue'}
        />
        <LinkedText
          first_text={'Зарегистрированны? '}
          second_text={'Войти'}
          onpress={goToSignIn}
          Style={{marginTop: 40, alignSelf: 'center'}}
          textStyle={{alignSelf: 'center', marginBottom: 40}}
        />
        <RulesComponent />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default observer(PersonRegister);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
