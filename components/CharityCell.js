import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CharityCell = ({name, distance, description}) => (
    <View style={styles.CharityCell}>
        <Text>
            {name}
        </Text>
        <Text>
            {distance}
        </Text>
        <Text>
            {description}
        </Text>
    </View>
);
  
const styles = StyleSheet.create({
    CharityCell: {
        backgroundColor: "#FF0000"
    },
})

export default CharityCell;