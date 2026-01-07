import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PROMO_ICONS } from '../constants/promoIcons';


export default function PromoCard({ promo }) {
  return (
    <TouchableOpacity style={styles.card}>
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
            Berlaku sampai {promo.expiry}
          </Text>
          <Text style={styles.more}>See More</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    boxShadow: '#00000011',
    borderColor: '#BD98D6FF',
    borderRadius: 13,
    padding: 12,
    marginBottom: 10,
    lineHeight: 23
  },
  icon: {
    width: 42,
    height: 40,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    backgroundColor: '#F4E9FF',
    marginRight: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconImage: {
    width: 34,
    height: 24,
  },
  title: {
    fontFamily: 'Figtree-Bold',
    fontSize: 14,
    marginBottom: 3,
    fontWeight: "bold",
    color: '#25172E'
  },
  subtitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 10,
    color: '#89828EFF',
    fontFamily: 'Figtree-Medium',
  },
  more: {
    color: '#A775C8FF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Figtree-Bold',
  },
});
