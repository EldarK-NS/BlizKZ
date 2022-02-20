import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';

type VariantType = 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type FontFamily = 'reg' | 'med' | 'semi' | 'bold';

type TextColor = 'text' | 'second' | 'light' | 'blue' | 'error';

type Position = 'center' | 'left' | 'right';

export interface ITextComponent {
  text: string;
  text_color: TextColor;
  type: VariantType;
  Style?: ViewStyle;
  font_family: FontFamily;
  position: Position;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  textHeight?: number;
}

const TextComponent = ({
  text,
  text_color,
  type,
  Style,
  font_family,
  position,
  transform,
  textHeight,
}: ITextComponent): JSX.Element => {
  return (
    <View style={Style}>
      <Text
        style={[
          styles[type],
          styles[text_color],
          styles[font_family],
          styles[position],
          {textTransform: transform, lineHeight: textHeight},
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  h0: {
    fontSize: 30,
    lineHeight: 48,
  },
  h1: {
    fontSize: 20,
    lineHeight: 24,
  },
  h2: {
    fontSize: 18,
    lineHeight: 21,
  },
  h3: {
    fontSize: 15,
    lineHeight: 18,
  },
  h4: {
    fontSize: 14,
    lineHeight: 17,
  },
  h5: {
    fontSize: 12.5,
    lineHeight: 15,
  },
  h6: {
    fontSize: 10,
    lineHeight: 13,
  },
  text: {
    color: colors.text,
  },
  second: {
    color: colors.text_second,
  },
  light: {
    color: colors.form_background,
  },
  blue: {
    color: colors.blue,
  },
  error: {
    color: colors.red,
  },
  reg: {
    fontFamily: 'IBMPlexSans-Regular',
  },
  med: {
    fontFamily: 'IBMPlexSans-Medium',
  },
  semi: {
    fontFamily: 'IBMPlexSans-SemiBold',
  },
  bold: {
    fontFamily: 'IBMPlexSans-Bold',
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});
