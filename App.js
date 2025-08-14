import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import Challenge1 from './screens/Challenge1';
import Challenge2 from './screens/Challenge2';
import Challenge3 from './screens/Challenge3';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome to My AEON App!</Text>
        <Text>Please select the Challenge below</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Challenge 1" onPress={() => navigation.navigate('Challenge1')} />
        <Button title="Challenge 2" onPress={() => navigation.navigate('Challenge2')} />
        <Button title="Challenge 3" onPress={() => navigation.navigate('Challenge3')} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Challenge1" component={Challenge1} />
        <Stack.Screen
          name="Challenge2"
          component={Challenge2}
        />
        <Stack.Screen name="Challenge3" component={Challenge3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
