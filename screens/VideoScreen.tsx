import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const images = [
  require('../assets/images/code1.png'),
  require('../assets/images/code2.png'),
  require('../assets/images/code3.png'),
  require('../assets/images/code4.png'),
  require('../assets/images/code5.png'),
  require('../assets/images/code6.png'),
];

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>MENU APP</Text>
        <Icon name="search-outline" size={25} />
      </View>

      <FlatList
        data={images}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  title: { fontWeight: 'bold', fontSize: 18 },
  image: {
    width: '48%',
    height: 150,
    margin: '1%',
    borderRadius: 10,
  },
});
