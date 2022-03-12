import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import TextComponent from 'atoms/TextComponent';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from 'theme/colors';

interface IButtonForAdditData {
  button_title: string;
  title?: string;
  Style?: ViewStyle;
  button_stile?: ViewStyle;
  onpress: () => void;
}

const ButtonForAdditData = ({
  title,
  Style,
  button_title,
  button_stile,
  onpress,
}: IButtonForAdditData): JSX.Element => {
  return (
    <View style={[styles.container, {...Style}]}>
      {title && (
        <TextComponent
          text={title}
          text_color={'text'}
          type={'h4'}
          font_family={'reg'}
          position={'left'}
        />
      )}
      <Pressable
        style={[styles.button_wrapper, {...button_stile}]}
        onPress={onpress}>
        <TextComponent
          text={button_title}
          text_color={'text'}
          type={'h4'}
          font_family={'reg'}
          position={'center'}
        />
        <Icon name="chevron-small-down" color={colors.text} size={18} />
      </Pressable>
    </View>
  );
};

export default ButtonForAdditData;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.form_background,
  },
  button_wrapper: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: colors.text_second,
    backgroundColor: colors.form_background,
    borderRadius: 5,
  },
});
