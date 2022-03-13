import {
  Dimensions,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {colors} from 'theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export interface ICheckBoxBottomSheetProp {
  children: React.ReactNode;
  open: boolean;
  Style?: ViewStyle;
}

const CheckBoxBottomSheet = ({
  children,
  open,
  Style,
}: ICheckBoxBottomSheetProp): JSX.Element => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['60%'], []);

  useEffect(() => {
    if (open) {
      handlePresentModalPress();
    }
  }, [open]);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            style={{flex: 1}}>
            <View style={[styles.contentContainer, {alignItems: 'center'}]}>
              {children}
            </View>
            <TouchableOpacity
              onPress={handleSheetChanges}
              style={styles.confirm}>
              <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default CheckBoxBottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  bottomSheet: {
    borderTopWidth: 1,
    borderTopColor: colors.text,
    paddingTop: 10,
  },
  contentContainer: {
    height: '94%',
  },
  confirm: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
});
