import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import TextComponent from 'atoms/TextComponent';
import {colors} from 'theme/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export interface InputPlaceComponentProp {
  placeFrom: string;
  placeTo: string;
  Style?: ViewStyle;
  onpress: () => void;
}

const InputPlaceComponent = ({
  placeFrom,
  placeTo,
  Style,
  onpress,
}: InputPlaceComponentProp): JSX.Element => {
  return (
    <Pressable style={[styles.container, {...Style}]} onPress={onpress}>
      <View
        style={[
          styles.input,
          {borderBottomWidth: 0.5, borderBottomColor: colors.text_second},
        ]}>
        <View>
          <TextComponent
            text={'Откуда'}
            text_color={'text'}
            type={'h5'}
            font_family={'reg'}
            position={'left'}
            Style={{marginVertical: 5}}
          />
          <TextComponent
            text={placeFrom}
            text_color={'text'}
            type={'h3'}
            font_family={'semi'}
            position={'left'}
          />
        </View>
        <View style={{width: '5%'}}>
          <EntypoIcon
            name="chevron-right"
            size={15}
            color={colors.text_second}
          />
        </View>
      </View>
      <View style={styles.input}>
        <View>
          <TextComponent
            text={'Куда'}
            text_color={'text'}
            type={'h5'}
            font_family={'reg'}
            position={'left'}
            Style={{marginVertical: 5}}
          />
          <TextComponent
            text={placeTo}
            text_color={'text'}
            type={'h3'}
            font_family={'semi'}
            position={'left'}
          />
        </View>
        <View style={{width: '5%'}}>
          <EntypoIcon
            name="chevron-right"
            size={15}
            color={colors.text_second}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default InputPlaceComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.background,
  },
  input: {
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    backgroundColor: colors.form_background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
