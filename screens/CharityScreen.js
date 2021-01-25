import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CharityList from '../components/CharityList';


export default function CharityScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.bannerStyle}>CharityMatch</Text>
          <CharityList/>
        <StatusBar style="auto" />
    </View>
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
