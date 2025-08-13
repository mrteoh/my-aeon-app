import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Challenge2() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigation = useNavigation();

  const listData = [
    { id: '1', title: 'Showcase' },
    { id: '2', title: 'Docs' },
    { id: '3', title: 'Blog' },
    { id: '4', title: 'Analytics' },
    { id: '5', title: 'Commerce' },
    { id: '6', title: 'Templates' },
    { id: '7', title: 'Enterprise' }
  ];

  // Provide toggleNavbar to the + icon in the header
  useLayoutEffect(() => {
    navigation.setParams({
      toggleNavbar: () => setShowNavbar((prev) => !prev),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Navbar */}
      {showNavbar && (
        <View>
          <View style={styles.navbar}>
            <Text style={styles.title}>AEON</Text>
            <View style={styles.rightIcons}>
              <TouchableOpacity>
                <Text style={styles.icon}>🔍</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowNavbar(false)}>
                <Text style={styles.icon}>✖</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* List under navbar */}
          <FlatList
            data={listData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    fontSize: 22,
    color: '#000',
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listText: {
    fontSize: 16,
  },
});
