import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CategoryChip from '@/components/CategoryChip';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import { colors } from '@/constants/colors';
import { SCREENS } from '@/navigation/screens';

const categories = ['All', 'Latte', 'Cappuccino', 'Espresso'];

const coffees = [
  {
    id: '1',
    title: 'Caramel Latte',
    price: '4.50',
    category: 'Latte',
    imageUrl:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    title: 'Cappuccino',
    price: '3.80',
    category: 'Cappuccino',
    imageUrl:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '3',
    title: 'Espresso',
    price: '2.90',
    category: 'Espresso',
    imageUrl:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '4',
    title: 'Flat White',
    price: '4.20',
    category: 'Latte',
    imageUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80',
  },
];

export default function HomeScreen({ navigation }) {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState('');

  const visibleCoffees = coffees.filter((coffee) => {
    const matchesCategory = activeCategory === 'All' || coffee.category === activeCategory;
    const matchesSearch = coffee.title.toLowerCase().includes(searchValue.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <View style={styles.appShell}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Header title="CoffeeGo" />

          <View style={styles.section}>
            <Text style={styles.subtitle}>Find your favorite coffee</Text>
            <SearchBar
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder="Search coffee"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categories}
          >
            {categories.map((category) => (
              <CategoryChip
                key={category}
                title={category}
                active={activeCategory === category}
                onPress={() => setActiveCategory(category)}
              />
            ))}
          </ScrollView>

          <View style={styles.products}>
            {visibleCoffees.map((coffee) => (
              <ProductCard
                key={coffee.id}
                title={coffee.title}
                price={coffee.price}
                imageUrl={coffee.imageUrl}
                onPress={() =>
                  navigation.navigate(SCREENS.PRODUCT_DETAILS, {
                    id: coffee.id,
                    title: coffee.title,
                    price: coffee.price,
                    imageUrl: coffee.imageUrl,
                  })
                }
                onAddToCart={() => setSelectedProduct(coffee.title)}
              />
            ))}
          </View>

          {selectedProduct ? (
            <Text style={styles.cartMessage}>{selectedProduct} added to cart</Text>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.secondaryBackground,
  },
  appShell: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  section: {
    paddingHorizontal: 24,
    paddingBottom: 18,
    backgroundColor: colors.background,
  },
  subtitle: {
    marginBottom: 16,
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  categories: {
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  products: {
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
  },
  cartMessage: {
    marginTop: 18,
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
