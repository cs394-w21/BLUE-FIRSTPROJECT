import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CharityList from './components/CharityList';
import getCharities from './utils/charities';
import CharityCell from './components/CharityCell';
import Filter from './components/Filter';

export default function App() {
  return (
    <View style={styles.container}>
      <h1>CharityMatch</h1>
      
      <ScrollView>
        <CharityList charities={getCharities()}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    
    color: '#000',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,    
    fontSize: "2.5rem",
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 3, height: 4 },
    textShadowRadius: 1,
    letterSpacing: 5,
  }
});
