import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

export default function Challenge2() {
  const [showList, setShowList] = useState(false); // controls FlatList visibility

  const listData = [
    { id: '1', title: 'Showcase' },
    { id: '2', title: 'Docs' },
    { id: '3', title: 'Blog' },
    { id: '4', title: 'Analytics' },
    { id: '5', title: 'Commerce' },
    { id: '6', title: 'Templates' },
    { id: '7', title: 'Enterprise' }
  ];

  const toggleList = () => {
    setShowList(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.title}>AEON</Text>
        <View style={styles.rightIcons}>
          {showList && (
            <TouchableOpacity>
              <Text style={styles.icon}>🔍</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={toggleList}>
            <Text style={styles.icon}>{showList ? '✖' : '☰'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FlatList shows only when showList is true */}
      {showList && (
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => { /* no action */ }}>
              <Text style={styles.listText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
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
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#000',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
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
