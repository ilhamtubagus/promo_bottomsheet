import { View, Text, StyleSheet, TouchableOpacity, Image,  } from 'react-native';
import { useState } from 'react';
import { PROMO_ICONS } from '../../constants/promoIcons';
import Markdown from 'react-native-markdown-display';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from './PromoCard.styles';
import { ISODateToHuman } from '../../utils/date';


export default function PromoCard({ promo, onCopy }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const handleCopy = (promo) => {
    Clipboard.setString(promo.promoCode);
    onCopy?.();
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={toggleExpand}
    >
      <View style={styles.collapsedCard}>
        <View style={styles.icon} >
          <Image
            source={PROMO_ICONS[promo.type] ?? PROMO_ICONS.DISCOUNT}
            style={styles.iconImage}
            resizeMode="cover"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{promo.title}</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
              Berlaku sampai {ISODateToHuman(promo.expiryDate)}
            </Text>
            <Text style={styles.more}>{expanded ? 'See Less' : 'See More'}</Text>
          </View>
        </View>
      </View>
      {expanded && (
        <>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>
            Syarat dan Ketentuan
          </Text>

          <View style={styles.termsContainer}>
            <Markdown style={styles.markdown}>
              {promo.tnc}
            </Markdown>
          </View>

          <View style={styles.voucherBox}>
            <View>
              <Text style={styles.voucherLabel}>Voucher Code</Text>
              <Text style={styles.voucherCode}>{promo.promoCode}</Text>
            </View>

            <TouchableOpacity style={styles.copyBtn} onPress={handleCopy}>
              <Text style={styles.copyText}>Copy Voucher</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

