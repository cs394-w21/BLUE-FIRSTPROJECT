import React, { useState, useEffect } from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import CharityCell from './CharityCell'
import Filter from './Filter'
import { formatCharities, filterCharities } from '../utils/charities';
import { firebase } from '../utils/firebase';
import SearchInput from './SearchInput';

const CharityList = () => {
    const [charityList, setCharityList] = useState([]);
    const [tagFilter, setTagFilter] = useState([]);
    const [filteredCharities, setFilteredCharities] = useState([]);
    const [searchItems, setSearchItems] = useState("");    

    // First useEffect fetches the data from firebase when this component first mounts
    useEffect(() => {
      const db = firebase.database().ref('charities'); // get reference to charities in database
  
      // handleData is called when database is ready to query
      // Sets the charityList state with the formatted data
      const handleData = snap => {
        if (snap.val()) {       
          const formattedCharityList = formatCharities(snap.val());
          setCharityList(formattedCharityList);                           
        }
      }
  
      db.on('value', handleData, error => alert(error)); // Event handler for when database is ready    
  
      // Return a function to call when component unmounts
      // Will prevent unnecessary database queries
      return () => {
        db.off('value', handleData); 
      }
    }, [])       
    
    // Second useEffect updates the displayed charities based on selected tags in tagFilter
    useEffect(() => {
        updateCharityList()
    }, [charityList, tagFilter, searchItems])

    function updateSearchText(text) {
        setSearchItems(text)
        updateCharityList()
    }
    function updateCharityList() {
        setFilteredCharities(filterCharities(charityList, tagFilter, searchItems));
    }
    return (        
        <ScrollView stickyHeaderIndices={[0]}>
            <SearchInput setSearchItems={updateSearchText}/>            
            <Filter style={styles.tagFilter} tagFilter={tagFilter} setTagFilter={setTagFilter}/>            
            <View style={styles.CharityList}>
                {filteredCharities.length > 0 
                    ? filteredCharities.map(charity => <CharityCell key={charity.name} name={charity.name} description={charity.description} distance={charity.distance} />) 
                    : <Text>"No Charities found"</Text>}
            </View>                       
        </ScrollView>                
    )
};


const styles = StyleSheet.create({
    CharityList: {
        flex: 1,
        padding: 20,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
    }    
})

export default CharityList;
