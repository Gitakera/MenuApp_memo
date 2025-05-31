import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SidebarMenu() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Darlene Robertson</Text>
      <Text style={styles.subtitle}>Developer</Text>

      <View style={styles.menu}>
        {['Favorite', 'Theme', 'Privacy', 'Give Feedback', 'Settings', 'About the app'].map(item => (
          <Text key={item} style={styles.menuItem}>{item}</Text>
        ))}
      </View>

      <View style={styles.icons}>
        <Icon name="linkedin" size={20} />
        <Icon name="facebook" size={20} />
        <Icon name="instagram" size={20} />
        <Icon name="github" size={20} />
    
      </View>

      <Text style={styles.footer}>Copyright 2025 ©</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  avatar: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },
  subtitle: { color: '#666', marginBottom: 20 },
  menu: { marginBottom: 20 },
  menuItem: { marginVertical: 8 },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  footer: { marginTop: 'auto', fontSize: 12, color: '#999' },
});
