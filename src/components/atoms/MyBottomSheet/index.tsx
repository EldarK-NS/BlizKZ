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

export interface IMyBottomSheetProp {
  children: React.ReactNode;
  open: boolean;
  Style?: ViewStyle;
}

const MyBottomSheet = ({
  children,
  open,
  Style,
}: IMyBottomSheetProp): JSX.Element => {
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
          <View style={styles.contentContainer}>{children}</View>
          <TouchableOpacity onPress={handleSheetChanges} style={styles.confirm}>
            <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
          </TouchableOpacity>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
  },
  bottomSheet: {
    borderTopWidth: 1,
    borderTopColor: colors.text,
    paddingTop: 10,
  },
  contentContainer: {
    height: Dimensions.get('window').height / 2,
  },
  confirm: {
    // marginBottom: 200,
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
