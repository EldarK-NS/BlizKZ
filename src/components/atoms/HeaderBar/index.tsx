import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import TextComponent from 'atoms/TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from 'theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type VariantType = 'title' | 'normal' | 'icons' | 'filter';

export interface IHeaderBarProps {
  title?: string;
  nav_title?: string;
  type: VariantType;
  Style?: ViewStyle;
  navigation: any;
  adToFavorites?: () => void;
  saveScreen?: () => void;
  filterSearch?: () => void;
}

const HeaderBar = ({
  title,
  nav_title,
  type,
  Style,
  navigation,
  adToFavorites,
  saveScreen,
  filterSearch,
}: IHeaderBarProps): JSX.Element => {
  return (
    <View style={{width: '100%'}}>
      {type === 'title' && (
        <View style={[styles.container, {justifyContent: 'center', ...Style}]}>
          <TextComponent
            text={title}
            text_color={'light'}
            type={'h2'}
            font_family={'semi'}
            position={'center'}
          />
        </View>
      )}
      {type === 'normal' && (
        <View style={styles.container}>
          <Pressable
            style={[styles.backButton, {width: '15%'}]}
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={colors.form_background} />
            <TextComponent
              text={nav_title}
              text_color={'light'}
              type={'h3'}
              font_family={'semi'}
              position={'left'}
            />
          </Pressable>
          <View style={{width: '85%'}}>
            <TextComponent
              text={title}
              text_color={'light'}
              type={'h2'}
              font_family={'semi'}
              position={'left'}
              Style={{marginLeft: 100}}
            />
          </View>
        </View>
      )}
      {type === 'icons' && (
        <View style={styles.container}>
          <Pressable style={[styles.backButton, {width: '15%'}]}>
            <AntDesign name="left" size={24} color={colors.form_background} />
            <TextComponent
              text={nav_title}
              text_color={'light'}
              type={'h3'}
              font_family={'semi'}
              position={'left'}
            />
          </Pressable>
          <View style={{width: '63%'}}>
            <TextComponent
              text={title}
              text_color={'light'}
              type={'h2'}
              font_family={'semi'}
              position={'left'}
              Style={{marginLeft: 100}}
            />
          </View>
          <View style={[styles.iconWrapper, {width: '20%'}]}>
            <Pressable onPress={adToFavorites}>
              <AntDesign
                name="staro"
                size={20}
                color={colors.form_background}
              />
            </Pressable>
            <Pressable onPress={saveScreen}>
              <AntDesign
                name="upload"
                size={20}
                color={colors.form_background}
                style={{marginRight: 20}}
              />
            </Pressable>
          </View>
        </View>
      )}
      {type === 'filter' && (
        <View style={styles.container}>
          <Pressable style={[styles.backButton, {width: '15%'}]}>
            <AntDesign name="left" size={24} color={colors.form_background} />
            <TextComponent
              text={nav_title}
              text_color={'light'}
              type={'h3'}
              font_family={'semi'}
              position={'left'}
            />
          </Pressable>
          <View style={{width: '58%'}}>
            <TextComponent
              text={title}
              text_color={'light'}
              type={'h2'}
              font_family={'semi'}
              position={'left'}
              Style={{marginLeft: 100}}
            />
          </View>
          <View style={[styles.iconWrapper, {width: '28%'}]}>
            <TextComponent
              text={'Фильтр'}
              text_color={'light'}
              type={'h3'}
              font_family={'semi'}
              position={'left'}
            />
            <Pressable onPress={filterSearch}>
              <MaterialCommunityIcons
                name="filter-variant"
                size={24}
                color="white"
                style={{marginRight: 20}}
              />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
