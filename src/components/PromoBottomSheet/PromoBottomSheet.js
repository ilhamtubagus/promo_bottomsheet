import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import PromoCard from '../PromoCard';
import styles from './PromoBottomSheet.styles';
import { usePromos } from '../../hooks/usePromos';

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
  const { promos, isLoading, fetchMore, hasMore } = usePromos(); // Added hasMore

  const renderItem = useCallback(({ item }) => (
    <PromoCard promo={item} onCopy={onCopy} />
  ), [onCopy]);
  const keyExtractor = useCallback((item) => item.promoCode, []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      style={styles.btsContainer}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Special Promo</Text>
        <TouchableOpacity onPress={() => sheetRef.current?.close()}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
      </View>

      <BottomSheetFlatList
        data={promos}
        keyExtractor={keyExtractor}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5} // Lower threshold
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
        renderItem={renderItem}
      />
    </BottomSheet>
  );
}