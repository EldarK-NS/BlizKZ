import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextComponent from 'atoms/TextComponent';
import {colors} from 'theme/colors';
import InputComponent from 'molecules/InputComponent';
import {AppContext} from 'context/App';
import {useForm} from 'react-hook-form';
import MyDropDown from 'atoms/MyDropDown';
import {toJS} from 'mobx';
import AutocompliteAddress from 'organisms/AutocompliteAddress';

const StorageForm = () => {
  //!DropDown zIndex
  const [activeDD, setActiveDD] = useState<string>('');

  const {
    stores: {auxiliaryStore},
  } = useContext(AppContext);
  useEffect(() => {
    auxiliaryStore.getStorageClassList();
    auxiliaryStore.getStorageTypeList();
    auxiliaryStore.getStorageFireSistem();
    auxiliaryStore.getStorageVentSistem();
  }, []);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const confirmPost = (data: any) => {
    console.log('DATA!!!s', data);
  };
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}
      style={{flex: 1}}>
      <Text>PHOTO</Text>
      <AutocompliteAddress />
      {/* <TextComponent
        text={'Характеристики склада'}
        text_color={'second'}
        type={'h4'}
        font_family={'semi'}
        position={'center'}
        Style={{paddingVertical: 5}}
      />
      <View style={styles.inputContainer}>
        <InputComponent
          placeholder={'Площадь, м2'}
          filter_mode={true}
          filter_title="Площадь, м2"
          name={'area'}
          control={control}
          keyboardType="numeric"
          rules={{required: 'Обязательное поле!'}}
          Style_container={{width: '50%'}}
        />
        <InputComponent
          placeholder={'Общ. площадь, м2'}
          filter_mode={true}
          filter_title="Общ. площадь, м2"
          name={'total_area'}
          control={control}
          keyboardType="numeric"
          rules={{required: 'Обязательное поле!'}}
          Style_container={{width: '50%'}}
        />
      </View>
      <View
        style={[
          styles.inputContainer,
          {
            zIndex:
              activeDD === 'storage_class' || activeDD === 'storage_type'
                ? 3
                : 0,
          },
        ]}>
        <MyDropDown
          data={toJS(auxiliaryStore.storageClassList)}
          placeholder={'Класс'}
          name={'storage_class'}
          control={control}
          rules={{
            required: 'Обязательное поле!',
          }}
          layoutFunc={(v: string) => setActiveDD(v)}
          Style={{width: '30%'}}
          with_title={true}
          title="Класс склада"
        />

        <MyDropDown
          data={toJS(auxiliaryStore.storageTypeList)}
          placeholder={'Тип склада'}
          name={'storage_type'}
          control={control}
          rules={{
            required: 'Обязательное поле!',
          }}
          layoutFunc={(v: string) => setActiveDD(v)}
          Style={{width: '70%'}}
          with_title={true}
          title="Тип склада"
        />
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          placeholder={'Год постройки'}
          filter_mode={true}
          filter_title="Год постройки"
          name={'year'}
          control={control}
          keyboardType="numeric"
          rules={{required: 'Обязательное поле!'}}
          Style_container={{width: '50%'}}
        />
        <InputComponent
          placeholder={'Этажность'}
          filter_mode={true}
          filter_title="Этажность"
          name={'floor'}
          control={control}
          keyboardType="numeric"
          rules={{required: 'Обязательное поле!'}}
          Style_container={{width: '50%'}}
        />
      </View> */}
    </KeyboardAwareScrollView>
  );
};

export default StorageForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.form_background,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  rowBackground: {
    width: '100%',
    backgroundColor: colors.form_background,
  },
});
