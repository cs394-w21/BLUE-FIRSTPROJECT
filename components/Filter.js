import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
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
    return (
        <ScrollView>
            <View style={styles.Filter}>
                {tags.map(tag => <FilterCell key={tag} tag={tag} toggleTag={toggleTag}/> ) }
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    Filter: {
        flex: 1,          
        flexDirection: "row",
    },
})

export default Filter;