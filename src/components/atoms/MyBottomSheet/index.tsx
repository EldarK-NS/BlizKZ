import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {colors} from 'theme/colors';

export interface IMyBottomSheetProp {
  children: React.ReactNode;
  open: boolean;
}

const MyBottomSheet = ({children, open}: IMyBottomSheetProp): JSX.Element => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['90%'], []);

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

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}>
            <View style={styles.contentContainer}>{children}</View>
            <TouchableOpacity
              onPress={handleSheetChanges}
              style={styles.confirm}>
              <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
            </TouchableOpacity>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bottomSheet: {
    borderTopWidth: 1,
    borderTopColor: colors.text,
    paddingTop: 10,
  },
  contentContainer: {
    flex: 1,
  },
  confirm: {
    marginBottom: 100,
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
