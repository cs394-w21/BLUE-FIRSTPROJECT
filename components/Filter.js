import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FilterCell from './FilterCell'
const tags = ["Food", "Clothes", "Shoes", "Toys"]
const Filter = ({tagFilter, setTagFilter}) => {
    function toggleTag(tag) {
        if (tagFilter.includes(tag)) {
            const modifiedTags = [...tagFilter]
            modifiedTags.splice(modifiedTags.indexOf(tag), 1)
            setTagFilter(modifiedTags)
        } else {
            setTagFilter([...tagFilter, tag])
        }
    }  
    return (<View style={styles.Filter}>
        {tags.map(tag => <FilterCell key={tag} tag={tag} toggleTag={toggleTag}/> ) }

    </View>)
};

const styles = StyleSheet.create({
    Filter: {
        backgroundColor: "#FF0000"
    },
})

export default Filter;