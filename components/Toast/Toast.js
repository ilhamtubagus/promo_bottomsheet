import { Text, Animated, Image } from 'react-native';
import { useEffect, useRef } from 'react';

import styles from './Toast.styles';

export default function Toast({ visible, message }) {
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: -100,
        duration: 900,
        useNativeDriver: true,
      }).start();
    }
  }, [translateY, visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY }] },
      ]}
    >
      <Image source={require('../../assets/icons/check-circle.png')} style={styles.icon}/>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}


