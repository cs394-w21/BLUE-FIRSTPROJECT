import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FilterCell = ({tag, toggleTag}) => {
    const [isSelected, setSelected] = useState(false);
    function selectTag() {
        toggleTag(tag);
        setSelected(!isSelected)
    }
    return (
        <TouchableOpacity style={isSelected ? styles.FilterCellSelected : styles.FilterCellDeselected} onPress={selectTag}>
            <Text>{tag}</Text>
        </TouchableOpacity>
    )
};
  
const styles = StyleSheet.create({
    FilterCell: {
        flex: 1,
    },
    FilterCellSelected: {
        ...FilterCell,
        backgroundColor: "#4cf7fc",
        margin: 5,
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
    },
    FilterCellDeselected: {
        ...FilterCell,
        backgroundColor: "#ffffff",
        margin: 5,
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
    }
})

export default FilterCell;