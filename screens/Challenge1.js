import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Challenge1() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState(null);

  const calculateSum = () => {
    const first = parseFloat(num1) || 0;
    const second = parseFloat(num2) || 0;
    setTotal(first + second);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenge 1: Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      {/* Custom Styled Button */}
      <TouchableOpacity style={styles.button} onPress={calculateSum}>
        <Text style={styles.buttonText}>Add Two Numbers</Text>
      </TouchableOpacity>

      <Text style={styles.totalLabel}>
        Total: <Text style={styles.totalValue}>{total !== null ? total : ''}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#388E3C',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  totalLabel: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
  },
  totalValue: {
    fontWeight: 'bold',
    color: 'green',
  },
});