import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import TextComponent from 'atoms/TextComponent';

export interface ISwitcher {
  value: boolean;
  setValue: ((event: GestureResponderEvent) => void) | null | undefined;
  Style?: ViewStyle;
}

const Switcher = ({value, setValue, Style}: ISwitcher): JSX.Element => {
  return (
    <View style={[styles.container, {...Style}]}>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: !value ? colors.form_background : colors.blue,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          },
        ]}
        onPress={setValue}>
        <TextComponent
          text={'Юр. лицо'}
          text_color={!value ? 'text' : 'light'}
          type={'h2'}
          font_family={'reg'}
          position={'center'}
        />
      </Pressable>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: !value ? colors.blue : colors.form_background,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          },
        ]}
        onPress={setValue}>
        <TextComponent
          text={'Физ. лицо'}
          text_color={!value ? 'light' : 'text'}
          type={'h2'}
          font_family={'reg'}
          position={'center'}
        />
      </Pressable>
    </View>
  );
};

export default Switcher;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',

    width: 304,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0.5,
    borderColor: colors.text_second,
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  button: {
    width: '50%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
