import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';

export interface IRulesComponent {
  navigation?: any;
  Style?: ViewStyle;
}

const RulesComponent = ({navigation, Style}: IRulesComponent): JSX.Element => {
  return (
    <Pressable
      style={[styles.container, {...Style}]}
      onPress={() => console.log('Nav to rules screen')}>
      <Text style={styles.text}>
        Авторизируясь и регистрируясь вы автоматически соглашаетесь с
        <Text style={[styles.text, {color: colors.blue}]}>
          {' '}
          правилами сервиса и пользовательским соглашением сервиса Bliz.kz
        </Text>
      </Text>
    </Pressable>
  );
};

export default RulesComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: colors.text_second,
    paddingTop: 13,
    paddingBottom: 20,
  },
  text: {
    width: '100%',
    fontSize: 12,
    textAlign: 'center',
    color: colors.text,
    lineHeight: 16,
    fontFamily: 'IBMPlexSans-Regular',
  },
});
