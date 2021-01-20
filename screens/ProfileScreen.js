import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

const Field = ({label, field}) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{field}</Text>
    </View>
  );
};

export default function ProfileScreen() {
  const input = {
    "name": "person",
    "email": "person@gmail.com"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bannerStyle}>Profile</Text>
      <ScrollView>
        <Field label="Name" field={input.name} />
        <Field label="Contact" field={input.email} />
      </ScrollView>
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
field: {
  height: 40,
  width: 300,
  padding: 5,
  backgroundColor: 'white',
},
fieldContainer: {
  marginBottom: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
},
label: {
  fontWeight: 'bold',
}
});
