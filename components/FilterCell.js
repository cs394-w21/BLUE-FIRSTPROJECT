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
        <Text>
            {tag}
        </Text>
    </TouchableOpacity>)
};
  
const styles = StyleSheet.create({
    FilterCell: {
        
    },
    FilterCellSelected: {
        ...FilterCell,
        backgroundColor: "#00FF00"
    },
    FilterCellDeselected: {
        ...FilterCell,
        backgroundColor: "#808080"
    }
})

export default FilterCell;