import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '@/constants/colors';

export default function ProductDetailsScreen({ route, navigation }) {
  // route.params carries the product data sent from Home when a card is pressed.
  const product = route?.params;

  if (!product) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.notFound}>Product not found</Text>
        <BackButton onPress={navigation.goBack} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>
          Freshly brewed coffee with a smooth aroma, rich flavor, and a cozy CoffeeGo finish.
        </Text>

        <BackButton onPress={navigation.goBack} />
      </View>
    </View>
  );
}

function BackButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: '100%',
    height: 320,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: colors.background,
    marginTop: -28,
    padding: 24,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  price: {
    marginTop: 8,
    color: colors.primary,
    fontSize: 22,
    fontWeight: '700',
  },
  description: {
    marginTop: 18,
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
  notFound: {
    marginBottom: 20,
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.primary,
    marginTop: 28,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  backButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
});
