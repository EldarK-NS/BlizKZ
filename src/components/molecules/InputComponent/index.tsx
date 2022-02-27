import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ViewStyle,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {colors} from 'theme/colors';
import TextComponent from 'atoms/TextComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface IInputComponent {
  placeholder: string;
  name: string;
  Style?: ViewStyle;
  control: any;
  rules: any;
  wrapperStyle?: ViewStyle;
  secureTextEntry?: boolean;
  secure?: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
}

const InputComponent = ({
  placeholder,
  name,
  Style,
  control,
  rules = {},
  wrapperStyle,
  secureTextEntry = false,
  secure,
  keyboardType = 'default',
}: IInputComponent): JSX.Element => {
  const [isSecure, setIsSecure] = useState<boolean>(true);

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
                secureTextEntry={secure ? isSecure : secureTextEntry}
                keyboardType={keyboardType}
              />
              {secure && (
                <Pressable onPress={() => setIsSecure(!isSecure)}>
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
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: colors.form_background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    backgroundColor: colors.form_background,
    width: '80%',
  },
});
