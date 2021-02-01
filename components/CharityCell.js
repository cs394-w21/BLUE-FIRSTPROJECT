import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const CharityCell = ({charity, toggleFavorite}) => (
    <ScrollView>
        <View style={styles.CharityCell}>
            <TouchableOpacity onPress={() => toggleFavorite(charity)}>
                <Text>Favorite</Text>
            </TouchableOpacity>
            <Text style={styles.CharityTitle}>{charity.name}</Text>
            <Text style={styles.CharityDistance}>{charity.distance}</Text>
            <Text style={styles.CharityDescription}>{charity.description}</Text>
        </View>
    </ScrollView>  
);
  
const styles = StyleSheet.create({
    CharityCell: {
        flex: 1,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        width: 400,
        backgroundColor: "#c0f8fa",
    },
    CharityTitle: {
        fontSize: 24,
    },
    CharityDistance: {
        fontSize: 20,
        fontWeight: "bold",
    },
    CharityDescription: {
        fontSize: 20,
    },
})

export default CharityCell;