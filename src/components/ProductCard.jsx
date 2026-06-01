import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { colors } from '@/constants/colors';
import CustomButton from './CustomButton';

export default function ProductCard({ title, price, imageUrl, onAddToCart }) {
  const { width } = useWindowDimensions();
  // Keep cards fluid on small screens while capping their width on wider layouts.
  const cardWidth = Math.min(width - 32, 420);

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <View style={styles.action}>
        <CustomButton title="Add" onPress={onAddToCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: colors.background,
    padding: 12,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: colors.secondaryBackground,
  },
  info: {
    flex: 1,
    marginHorizontal: 14,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  price: {
    marginTop: 6,
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  action: {
    width: 84,
  },
});
