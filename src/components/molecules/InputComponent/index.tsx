import {StyleSheet, View, TextInput, ViewStyle, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {colors} from 'theme/colors';
import TextComponent from 'atoms/TextComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface IInputComponent {
  placeholder: string;
  name: string;
  Style?: ViewStyle;
  Style_container?: ViewStyle;
  style_input?: ViewStyle;
  control: any;
  rules: any;
  secureTextEntry?: boolean;
  secure?: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  filter_mode?: boolean;
  filter_title?: string;
}

const InputComponent = ({
  placeholder,
  name,
  Style,
  control,
  rules = {},
  secureTextEntry = false,
  secure,
  keyboardType = 'default',
  filter_mode = false,
  filter_title,
  Style_container,
  style_input,
}: IInputComponent): JSX.Element => {
  const [isSecure, setIsSecure] = useState<boolean>(true);

  return (
    <View style={[styles.styleWrapper, {...Style_container}]}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
          <View style={(styles.styleWrapper, {...style_input})}>
            {filter_mode && (
              <View
                style={{height: filter_mode ? 20 : 'none', marginVertical: 5}}>
                <TextComponent
                  text={filter_title}
                  text_color={'text'}
                  type={'h4'}
                  font_family={'reg'}
                  position={'left'}
                />
              </View>
            )}
            <View
              style={[
                styles.input_container,
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
                secureTextEntry={secure ? isSecure : secureTextEntry}
                keyboardType={keyboardType}
              />
              {secure && (
                <Pressable
                  onPress={() => setIsSecure(!isSecure)}
                  style={{paddingRight: 10}}>
                  <Icon name="eye-slash" size={18} color={colors.text} />
                </Pressable>
              )}
            </View>
            {error && (
              <TextComponent
                text={error.message || 'Ошибка'}
                text_color={'error'}
                type={'h4'}
                font_family={'reg'}
                position={'left'}
                Style={{marginTop: 5, marginLeft: 10, ...Style}}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input_container: {
    width: '100%',
    height: 44,
    borderWidth: 0.5,
    borderColor: colors.text_second,
    justifyContent: 'space-between',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleWrapper: {width: '100%', backgroundColor: colors.form_background},
  input: {
    marginLeft: 10,
    backgroundColor: colors.form_background,
    width: '80%',
  },
});
