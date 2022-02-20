import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';

const SignIn = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          fontFamily: 'IBMPlexSans-Bold',
          fontSize: 25,
          color: colors.blue,
        }}>
        ОТПРАВИТЬ
      </Text>
      <Text style={{fontSize: 16, fontFamily: 'Arial'}}>
        Расчет расстоянийлл
      </Text>
      <Text style={{fontFamily: 'IBMPlexSans-SemiBold', fontSize: 18}}>
        Расчет расстоянийлл
      </Text>
      <Text style={styles.text}>Спецтехника</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  text: {
    color: colors.green,
  },
});
