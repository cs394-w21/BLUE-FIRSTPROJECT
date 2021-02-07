import React, { useState, useEffect } from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import CharityCell from './CharityCell'
import Filter from './Filter'
import { formatCharities, filterCharities, sortCharitiesByDistance } from '../utils/charities';
import { firebase } from '../utils/firebase';
import SearchInput from './SearchInput';

const CharityList = () => {
    const [charityList, setCharityList] = useState([]);
    const [tagFilter, setTagFilter] = useState([]);
    const [filteredCharities, setFilteredCharities] = useState([]);
    const [searchItems, setSearchItems] = useState("");    
    const [favorites, setFavoriteCharities] = useState([]);


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


    // Third useEffect loads the initial favorites from database
    useEffect(() => {
        const db = firebase.database().ref('users/1/favorites');

        const handleData = snap => {
            if (snap.val()) {
                
                const currentFavorites = Object.values(snap.val());                
                setFavoriteCharities(currentFavorites);                      
            }
        }

        db.on('value', handleData, error => alert(error)); 

        
        
    }, [])

    function toggleFavorite(charity) {   
          

        const db = firebase.database().ref('users/1/favorites');
        

        const handleData = snap => {
            if (snap.val()) {       
                const currentFavoritesObject = snap.val();

                if (favorites && favorites.includes(charity.id)) {                    
                    
                    for (var key in currentFavoritesObject) {
                        if (currentFavoritesObject[key] === charity.id) {
                            delete currentFavoritesObject[key];
                        }
                    }                   
                    const removedExisting = favorites.filter(id => {
                        return id !== charity.id;
                    })
                    setFavoriteCharities(removedExisting);
                    

                    const updatedFirebaseObject = {... currentFavoritesObject};
                    
                    db.set(updatedFirebaseObject);
                } else {                    
                    setFavoriteCharities([...favorites, charity.id])
                    
                    db.push(charity.id)
                }       
                               
            } else {                
                db.push(charity.id);
                setFavoriteCharities([charity.id]);
                
            }
        }

        db.once('value', handleData, error => alert(error));

        
    }

    function updateSearchText(text) {
        setSearchItems(text)
        updateCharityList()
    }
    function updateCharityList() {
        const filtered = filterCharities(charityList, tagFilter, searchItems); // filter charities
        setFilteredCharities(sortCharitiesByDistance(filtered)); // sort by distance
    }
    return (        
        <ScrollView stickyHeaderIndices={[0]}>
            <View style={styles.filterContainer}>
                <SearchInput style={styles.search} setSearchItems={updateSearchText}/>            
                <Filter style={styles.tagFilter} tagFilter={tagFilter} setTagFilter={setTagFilter}/>
            </View>                        
            <View style={styles.CharityList}>
                {filteredCharities.length > 0 
                    ? filteredCharities.map(charity => <CharityCell key={charity.name} charity={charity} toggleFavorite={toggleFavorite} />) 
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
    },
    filterContainer: {
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",   
        padding: 20,
        width: 400,        
        backgroundColor: "#9de3fa",
        borderColor: '#0a9fd1',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 5
    },   
})

export default CharityList;
