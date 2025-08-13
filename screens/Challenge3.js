import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function Challenge3() {
  const [numbers, setNumbers] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState([]);
  console.log('--- result',result)

  const handleTwoSum = async () => {
    const nums = numbers
      .split(',')                               //array
      .map((n) => parseInt(n.trim(), 10))       //trim space
      .filter((n) => !isNaN(n));                //remove non-integer
    const t = parseInt(target, 10);             //target

    //use constant extra space
    let left = 0;
    let right = nums.length - 1;
    let res = [];

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === t) {
        res = [left + 1, right + 1];
        setResult(res);
        break;
      } else if (sum < t) {
        left++;
      } else {
        right--;
      }
    }

    if (res.length === 0) {
      setResult([]);
      Alert.alert('No solution found!');
      return;
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenge 3: Two Sum II</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter sorted array (comma-separated), e.g. 1,2,4,6"
        value={numbers}
        onChangeText={setNumbers}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter target number"
        keyboardType="numeric"
        value={target}
        onChangeText={setTarget}
      />

      <TouchableOpacity style={styles.button} onPress={handleTwoSum}>
        <Text style={styles.buttonText}>Find Two Sum</Text>
      </TouchableOpacity>

      {result.length > 0 && (
        <Text style={styles.result}>
          Output: [{result[0]}, {result[1]}]
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 6, marginBottom: 15 },
  button: { backgroundColor: '#2196F3', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  result: { marginTop: 20, fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left' },
});
