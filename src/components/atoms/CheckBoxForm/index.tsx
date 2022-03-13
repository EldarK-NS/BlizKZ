import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TextComponent from 'atoms/TextComponent';
import {colors} from 'theme/colors';
import {IAuxiliaryType} from 'models/auxiliary_type';
import {FlatList} from 'react-native-gesture-handler';
import {Controller} from 'react-hook-form';

interface ICheckBoxForm {
  title: string;
  data: IAuxiliaryType[];
  control: any;
  name: string;
}

const CheckBoxForm = ({
  title,
  data,
  control,
  name,
}: ICheckBoxForm): JSX.Element => {
  const [itemsArr, setItemsArr] = useState<number[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const newArr = itemsArr;

  const fillArr = (v: number) => {
    if (itemsArr.includes(v)) {
      const res = newArr.filter(item => item !== v);
      setItemsArr(res);
    } else {
      newArr.push(v);
      setItemsArr(newArr);
    }
  };

  return (
    <View style={styles.container}>
      <TextComponent
        text={title}
        text_color={'text'}
        type={'h3'}
        font_family={'semi'}
        position={'center'}
        Style={{marginVertical: 10}}
      />
      <Controller
        control={control}
        name={name}
        render={({field: {onChange}}) => {
          return (
            <FlatList
              nestedScrollEnabled={true}
              data={data}
              numColumns={2}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={styles.row}>
                  <Pressable
                    onPress={() => {
                      fillArr(item.id);
                      onChange(itemsArr);
                      setIsActive(!isActive);
                    }}>
                    <View
                      style={[
                        styles.circle,
                        {
                          backgroundColor: itemsArr.includes(item.id)
                            ? colors.blue
                            : colors.form_background,
                        },
                      ]}
                    />
                  </Pressable>
                  <View style={{width: '90%'}}>
                    <TextComponent
                      text={item.name}
                      text_color={'text'}
                      type={'h4'}
                      font_family={'reg'}
                      position={'left'}
                    />
                  </View>
                </View>
              )}
            />
          );
        }}
      />
    </View>
  );
};

export default CheckBoxForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.text_second,
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.form_background,
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    paddingVertical: 8,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.text_second,
    marginRight: 10,
  },
});
