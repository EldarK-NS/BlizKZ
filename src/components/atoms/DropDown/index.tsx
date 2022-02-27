import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {colors} from 'theme/colors';
import Icon from 'react-native-vector-icons/Entypo';
import TextComponent from 'atoms/TextComponent';

export interface IDropDown {
  data: any;
  open: boolean;
  setOpen: () => void;
  handleClick: (item: any) => void;
  Style?: ViewStyle;
  placeholder: string;
}

const DropDown = ({
  data,
  open,
  setOpen,
  handleClick,
  Style,
  placeholder,
}: IDropDown): JSX.Element => {
  const [value, setValue] = useState<string>('');
  return (
    <View {...Style}>
      <Pressable onPress={setOpen} style={styles.titleWrapper}>
        <TextComponent
          text={value.length ? value : placeholder}
          text_color={'text'}
          type={'h4'}
          font_family={'reg'}
          position={'center'}
          Style={{paddingVertical: 5}}
        />
        <Icon name="chevron-small-down" color={colors.text} size={18} />
      </Pressable>

      {open && (
        <View style={styles.itemsContainer}>
          {data.map((item: any, idx: number) => {
            return (
              <Pressable
                style={styles.itemWrapper}
                onPress={() => {
                  handleClick(item.id);
                  setValue(item.name);
                }}
                key={item.id}>
                <TextComponent
                  text={item.name}
                  text_color={'text'}
                  type={'h3'}
                  font_family={'reg'}
                  position={'center'}
                />
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: colors.lightGrey,
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
    top: 50,
    backgroundColor: colors.form_background,
  },
  itemWrapper: {
    // width: '100%',
    paddingVertical: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.lightGrey,
  },
});
