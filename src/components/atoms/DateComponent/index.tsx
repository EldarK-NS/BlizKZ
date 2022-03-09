import {Pressable, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import TextComponent from 'atoms/TextComponent';
import {colors} from 'theme/colors';

export interface IDateComponent {
  placeholderStart: string;
  placeholderFinish: string;
  setInputStart: React.Dispatch<React.SetStateAction<Date | null>>;
  setInputFinish: React.Dispatch<React.SetStateAction<Date | null>>;
  inputStart: Date | null;
  inputFinish: Date | null;
}

const DateComponent = ({
  placeholderStart,
  placeholderFinish,
  setInputStart,
  setInputFinish,
  inputStart,
  inputFinish,
}: IDateComponent): JSX.Element => {
  const [dateStart, setDateStart] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [dateFinish, setDateFinish] = useState(new Date());
  const [openFinish, setOpenFinish] = useState(false);

  const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
  return (
    <View style={styles.container}>
      <View style={{width: '50%'}}>
        <Pressable
          onPress={() => {
            setOpenStart(true);
          }}
          style={styles.inputContainer}>
          <TextComponent
            text={
              inputStart
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  inputStart.toLocaleString('ru-RU', dateOptions)
                : placeholderStart
            }
            text_color={!inputStart ? 'second' : 'text'}
            type={'h4'}
            font_family={'reg'}
            position={'left'}
            Style={{marginLeft: 10}}
          />
        </Pressable>
        <DatePicker
          modal
          mode={'date'}
          open={openStart}
          date={dateStart}
          locale={'Ru'}
          onConfirm={date => {
            setOpenStart(false);
            setDateStart(date);
            setInputStart(date);
          }}
          onCancel={() => {
            setOpenStart(false);
            setInputStart(null);
          }}
        />
      </View>
      <View style={{width: '50%'}}>
        <Pressable
          onPress={() => setOpenFinish(true)}
          style={styles.inputContainer}>
          <TextComponent
            text={
              inputFinish
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  inputFinish.toLocaleString('ru-RU', dateOptions)
                : placeholderFinish
            }
            text_color={!inputFinish ? 'second' : 'text'}
            type={'h4'}
            font_family={'reg'}
            position={'left'}
            Style={{marginLeft: 10}}
          />
        </Pressable>
        <DatePicker
          modal
          mode={'date'}
          open={openFinish}
          date={dateFinish}
          locale={'Ru'}
          onConfirm={date => {
            setOpenFinish(false);
            setDateFinish(date);
            setInputFinish(date);
          }}
          onCancel={() => {
            setOpenFinish(false);
            setInputFinish(null);
          }}
        />
      </View>
    </View>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 15,
  },
  inputContainer: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.text_second,
    borderRadius: 5,
  },
});
