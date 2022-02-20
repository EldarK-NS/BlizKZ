import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';

export interface ILinkedText {
  navigation?: any;
  Style?: ViewStyle;
  first_text: string;
  second_text: string | null;
  onpress: () => void;
  textStyle?: ViewStyle;
}

const LinkedText = ({
  navigation,
  Style,
  first_text,
  second_text,
  onpress,
  textStyle,
}: ILinkedText): JSX.Element => {
  return (
    <Pressable style={[styles.container, {...Style}]} onPress={onpress}>
      <Text style={[styles.text, {...textStyle}]}>
        {first_text}
        <Text style={[styles.text, {color: colors.blue}]}> {second_text}</Text>
      </Text>
    </Pressable>
  );
};

export default LinkedText;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 20,
    fontFamily: 'IBMPlexSans-Regular',
  },
});
