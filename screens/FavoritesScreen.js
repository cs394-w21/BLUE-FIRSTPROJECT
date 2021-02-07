import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import FavoritesList from '../components/FavoritesList'

export default function FavoritesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <FavoritesList/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
bannerStyle: {
  color: '#888',
  fontSize: 32,
  paddingTop: 50,
  paddingBottom: 20,
},
});
