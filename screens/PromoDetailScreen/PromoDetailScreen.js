import { View, Button } from 'react-native';
import { useState } from 'react';

import PromoBottomSheet from '../../components/PromoBottomSheet';
import Toast from '../../components/Toast';
import styles from './PromoDetailScreen.styles';

export default  function PromoDetailScreen(){
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };


  return (
    <View style={styles.container}>
      <Toast
        visible={toastVisible}
        message="Voucher code copied."
      />
      <Button title="Show Promo" onPress={() => setOpen(true)} color='#A775C8FF'/>
      {open && <PromoBottomSheet onClose={() => setOpen(false)} onCopy={showToast}/>}
    </View>
  )
}