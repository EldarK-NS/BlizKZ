import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import TextComponent from 'atoms/TextComponent';
import {colors} from 'theme/colors';

type Size = 'half' | 'full';

type Color = 'blue' | 'green';

export interface IMyButton {
  onpress: () => void;
  title: string;
  Style?: ViewStyle;
  size: Size;
  background: Color;
}

const MyButton = ({
  onpress,
  title,
  Style,
  size,
  background,
}: IMyButton): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles[size],
        styles[background],
        {justifyContent: 'center', alignItems: 'center', ...Style},
      ]}
      onPress={onpress}>
      <TextComponent
        text={title}
        text_color={'light'}
        type={'h3'}
        font_family={'semi'}
        position={'center'}
        textHeight={21}
        transform={'uppercase'}
        Style={{width: '100%'}}
      />
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  half: {
    width: '47%',
    height: 50,
    borderRadius: 21,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  full: {
    width: '100%',
    height: 50,
    borderRadius: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  blue: {
    backgroundColor: colors.blue,
  },
  green: {
    backgroundColor: colors.green,
  },
});
