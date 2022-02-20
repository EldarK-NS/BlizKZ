import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigatorParamsList} from 'nav/types';
import {colors} from 'theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import TextComponent from 'atoms/TextComponent';

export interface IRegistrationCompanyProps {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    'Registration_Company'
  >;
}

const RegistrationCompany: React.FC<IRegistrationCompanyProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
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
        text={'Введите информацию для начала регистрации'}
        text_color={'second'}
        type={'h3'}
        font_family={'med'}
        position={'center'}
      />
    </View>
  );
};

export default RegistrationCompany;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
  },
});
