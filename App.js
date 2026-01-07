import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import PromoBottomSheet from './components/PromoBottomSheet';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Show Promo" onPress={() => setOpen(true)} />
        {open && <PromoBottomSheet onClose={() => setOpen(false)} />}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
