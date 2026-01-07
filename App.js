import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import PromoBottomSheet from './components/PromoBottomSheet';
import Toast from './components/Toast';

export default function App() {
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Toast
          visible={toastVisible}
          message="Voucher code copied."
        />
        <Button title="Show Promo" onPress={() => setOpen(true)} />
        {open && <PromoBottomSheet onClose={() => setOpen(false)} onCopy={showToast}/>}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
