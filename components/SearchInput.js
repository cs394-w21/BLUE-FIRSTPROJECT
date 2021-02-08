import React, {useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchInput = ({setSearchItems}) => {
    return(
        <View style={styles.searchArea}>
            <FontAwesome5 style={styles.searchIcon} name={'search'} size={17}></FontAwesome5>
            <TextInput 
                style={styles.searchBar}
                placeholder='Search items, charities, descriptions'
                outline 
                onChangeText={(value) => 
                    setSearchItems(value)
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    searchArea: {
        backgroundColor: '#bac3dd',        
        flex: 1,
        flexDirection: 'row',        
        alignItems: 'center',   
        paddingLeft: 15,
        marginBottom: 15,        
        width: 335,
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 3, height: 5},
        shadowRadius: 7
    },
    searchIcon: {
        marginRight: 8,
        opacity: 0.9,
        color: '#2c3a66'
        
    },
    searchBar: {
        flex: 1,        
        outlineStyle: 'none',
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 16,
        fontWeight: 500,
        color: '#0d1093'      
    }

})

export default SearchInput;