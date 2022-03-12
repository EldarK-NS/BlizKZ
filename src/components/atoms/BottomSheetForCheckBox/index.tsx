import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {colors} from 'theme/colors';

export interface IBottomSheetForCheckBoxProp {
  children: React.ReactNode;
  open: boolean;
  Style?: ViewStyle;
}

const BottomSheetForCheckBox = ({
  children,
  open,
  Style,
}: IBottomSheetForCheckBoxProp): JSX.Element => {
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

export default BottomSheetForCheckBox;

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
    flex: 1,
  },
  confirm: {
    marginBottom: Dimensions.get('window').height * 0.3,
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
