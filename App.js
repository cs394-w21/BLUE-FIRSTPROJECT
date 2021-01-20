import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
import CharityList from './components/CharityList';
import getCharities from './utils/charities';
import CharityCell from './components/CharityCell';
import Filter from './components/Filter';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bannerStyle}>CharityMatch</Text>
      <ScrollView>
        <CharityList charities={getCharities()}/>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

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
  // shadow: {
  //   color: '#000',
  //   fontFamily: 'Roboto, sans-serif',
  //   fontWeight: 600,    
  //   fontSize: "2.5rem",
  //   textShadowColor: 'rgba(0, 0, 0, 0.2)',
  //   textShadowOffset: { width: 3, height: 4 },
  //   textShadowRadius: 1,
  //   letterSpacing: 5,
  // }
});
