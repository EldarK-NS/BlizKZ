import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {colors} from 'theme/colors';
import Icon from 'react-native-vector-icons/Entypo';
import TextComponent from 'atoms/TextComponent';
import {Controller} from 'react-hook-form';

export interface IDropDown {
  data: any;
  Style?: ViewStyle;
  placeholder: string;
  name: string;
  control: any;
  rules: any;
  with_title?: boolean;
  title?: string;
  additType?: (v: string) => void;
  layoutFunc?: (v: string) => void;
}

const MyDropDown = ({
  data,
  Style,
  placeholder,
  name,
  control,
  rules = {},
  with_title = false,
  title,
  additType,
  layoutFunc,
}: IDropDown): JSX.Element => {
  const [itemName, setItemName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  return (
    <View style={{alignItems: 'center', ...Style}}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange}, fieldState: {error}}) => (
          <>
            {with_title && (
              <View
                style={{
                  height: with_title ? 20 : 'none',
                  marginVertical: 5,
                  alignSelf: 'flex-start',
                }}>
                <TextComponent
                  text={title}
                  text_color={'text'}
                  type={'h4'}
                  font_family={'reg'}
                  position={'left'}
                />
              </View>
            )}
            <Pressable
              onPress={() => {
                setOpen(true);
                if (layoutFunc) layoutFunc(name);
              }}
              style={[
                styles.titleWrapper,
                {borderColor: !error?.message ? colors.lightGrey : 'red'},
              ]}>
              <TextComponent
                text={itemName.length ? itemName : placeholder}
                text_color={itemName ? 'text' : 'second'}
                type={'h4'}
                font_family={'reg'}
                position={'center'}
                Style={{paddingVertical: 5}}
              />
              <Icon name="chevron-small-down" color={colors.text} size={18} />
            </Pressable>
            {error && (
              <TextComponent
                text={error.message || 'Ошибка'}
                text_color={'error'}
                type={'h4'}
                font_family={'reg'}
                position={'left'}
                Style={{
                  marginTop: 3,
                  alignItems: 'flex-start',
                  alignSelf: 'flex-start',
                  ...Style,
                }}
              />
            )}
            {open && (
              <View style={styles.itemsContainer}>
                {data.map((item: any, idx: number) => {
                  return (
                    <Pressable
                      style={styles.itemWrapper}
                      onPress={() => {
                        setItemName(item.name);
                        onChange(item.id);
                        setOpen(false);
                        if (additType) {
                          additType(item.id);
                        }
                        if (layoutFunc) {
                          layoutFunc('');
                        }
                      }}
                      key={item.id}>
                      <TextComponent
                        text={item.name}
                        text_color={'text'}
                        type={'h3'}
                        font_family={'reg'}
                        position={'center'}
                        Style={{marginVertical: 5}}
                      />
                    </Pressable>
                  );
                })}
              </View>
            )}
          </>
        )}
      />
    </View>
  );
};

export default MyDropDown;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderWidth: 1,

    paddingVertical: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: colors.form_background,
  },
  itemsContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    position: 'absolute',
    top: 80,
    backgroundColor: colors.form_background,
  },
  itemWrapper: {
    paddingVertical: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.lightGrey,
  },
});
