import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import TextComponent from 'atoms/TextComponent';

const SignIn = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextComponent
        text={'Hello'}
        text_color={'second'}
        type={'h1'}
        font_family={'bold'}
        position={'left'}
        transform={'uppercase'}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  text: {
    color: colors.green,
  },
});
