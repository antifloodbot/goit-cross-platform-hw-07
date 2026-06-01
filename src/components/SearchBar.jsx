import { StyleSheet, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';

export default function SearchBar({ value, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: colors.secondaryBackground,
    paddingHorizontal: 18,
  },
  input: {
    minHeight: 52,
    color: colors.text,
    fontSize: 16,
  },
});
