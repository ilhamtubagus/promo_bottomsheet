import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { PROMOS } from '../../data/promos';
import PromoCard from '../PromoCard';
import styles from './PromoBottomSheet.styles';

const renderBackdrop = (props) => (
  <BottomSheetBackdrop
    {...props}
    pressBehavior="close"
    appearsOnIndex={0}
    disappearsOnIndex={-1}
  />
);


export default function PromoBottomSheet({ onClose, onCopy }) {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['70%'], []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Special Promo</Text>
        <TouchableOpacity onPress={() => sheetRef.current?.close()}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
      </View>

      <BottomSheetFlatList
        data={PROMOS}
        keyExtractor={(item) => item.promoId}
        renderItem={({ item }) => <PromoCard promo={item} onCopy={onCopy} />}
        contentContainerStyle={styles.list}
      />
    </BottomSheet>
  );
}
