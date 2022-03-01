import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import TextComponent from 'atoms/TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from 'theme/colors';

export type VariantType = 'title' | 'normal' | 'icons' | 'filter' | 'close';

export interface IHeaderBarProps {
  title?: string;
  nav_title?: string;
  type: VariantType;
  Style?: ViewStyle;
  naigation: any;
}

const HeaderBar = ({
  title,
  nav_title,
  type,
  Style,
  naigation,
}: IHeaderBarProps): JSX.Element | undefined => {
  if (type === 'title') {
    return (
      <View style={(styles.container, {...Style})}>
        <TextComponent
          text={title}
          text_color={'light'}
          type={'h2'}
          font_family={'semi'}
          position={'center'}
        />
      </View>
    );
  }
  if (type === 'normal') {
    return (
      <View>
        <Pressable style={styles.backButton}>
          <AntDesign name="left" size={24} color={colors.form_background} />
          <TextComponent
            text={nav_title}
            text_color={'light'}
            type={'h3'}
            font_family={'semi'}
            position={'left'}
          />
        </Pressable>
        <TextComponent
          text={undefined}
          text_color={'text'}
          type={'h0'}
          font_family={'reg'}
          position={'center'}
        />
      </View>
    );
  }
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.blue,
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
