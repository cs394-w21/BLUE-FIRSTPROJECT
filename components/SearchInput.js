import React, {useState} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

const SearchInput = ({setSearchItems}) => {
    return(
        <View style={styles.SearchBar}>
            <TextInput placeholder='Search items' onChangeText={(value) => 
                setSearchItems(value)
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: '#BBBBBB',
    },
})

export default SearchInput;