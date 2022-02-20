import {StyleSheet, Text, View, TextInput, ViewStyle} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {colors} from 'theme/colors';
import TextComponent from 'atoms/TextComponent';

export interface IInputComponent {
  placeholder: string;
  name: string;
  Style?: ViewStyle;
  control: any;
  rules: any;
  wrapperStyle?: ViewStyle;
}

const InputComponent = ({
  placeholder,
  name,
  Style,
  control,
  rules = {},
  wrapperStyle,
}: IInputComponent): JSX.Element => {
  return (
    <View style={wrapperStyle}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {
                  ...Style,
                  borderColor: error ? colors.red : colors.text_second,
                },
              ]}>
              <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            </View>
            {error && (
              <TextComponent
                text={error.message || 'Ошибка'}
                text_color={'error'}
                type={'h4'}
                font_family={'reg'}
                position={'left'}
                Style={{marginTop: 5, ...Style}}
              />
            )}
          </>
        )}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    borderWidth: 0.5,
    borderColor: colors.text_second,
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    marginLeft: 10,
  },
});
