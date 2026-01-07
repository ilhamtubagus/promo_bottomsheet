import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PromoCard from './PromoCard';
import { PROMOS } from '../data/promos';

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

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  title: { fontSize: 18, fontWeight: '600' , color: '#25172E'},
  close: { fontSize: 18, color: '#404040' },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
});
