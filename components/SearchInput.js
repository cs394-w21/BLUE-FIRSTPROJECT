import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

const SearchInput = ({setSearchItems}) => {
    return(
        <View style={styles.SearchBar}>
            <TextInput placeholder='Search items' onChangeText={value => setSearchItems(value)}>

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: '#0000FF',
    },
})

export default SearchInput;