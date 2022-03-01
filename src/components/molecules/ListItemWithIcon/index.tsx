import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextComponent from 'atoms/TextComponent';

export interface IItemProps {
  icon: string;
  title: string;
  subtitle: string;
  onpress: () => void;
}

const ListItemWithIcon = ({icon, title, subtitle, onpress}: IItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onpress}>
      <View style={{width: '10%'}}>
        <MaterialIcon name={icon} color={colors.blue} size={20} />
      </View>
      <View style={styles.textWrapper}>
        <TextComponent
          text={title}
          text_color={'text'}
          type={'h2'}
          font_family={'med'}
          position={'left'}
        />
        <TextComponent
          text={subtitle}
          text_color={'second'}
          type={'h4'}
          font_family={'reg'}
          position={'left'}
        />
      </View>
      <View style={{width: '5%'}}>
        <EntypoIcon name="chevron-right" size={15} color={colors.text_second} />
      </View>
    </Pressable>
  );
};

export default ListItemWithIcon;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.form_background,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGrey,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  textWrapper: {
    width: '85%',
  },
});
