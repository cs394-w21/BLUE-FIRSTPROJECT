import React, { useState, useEffect } from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import CharityCell from './CharityCell';
import { firebase } from '../utils/firebase';
import { formatCharities, filterFavoritedCharities } from '../utils/charities';


const FavoritesList = () => {
    const [favorites, setFavorites] = useState([]);
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [charities, setCharities] = useState([]);

    // loads the charities from database
    useEffect(() => {
        const db = firebase.database().ref('charities'); // get reference to charities in database
    
        // handleData is called when database is ready to query
        // Sets the charityList state with the formatted data
        const handleData = snap => {
            if (snap.val()) {       
                const formattedCharityList = formatCharities(snap.val());
                setCharities(formattedCharityList);                           
            }
        }

        db.on('value', handleData, error => alert(error)); // Event handler for when database is ready    
  
      // Return a function to call when component unmounts
      // Will prevent unnecessary database queries
      return () => {
        db.off('value', handleData); 
      }
    }, [])

    // useEffect loads the initial favorites from database
    useEffect(() => {
        const db = firebase.database().ref('users/1/favorites');

        const handleData = snap => {
            if (snap.val()) {                
                const currentFavoriteIds = Object.values(snap.val());
                setFavoriteIds(currentFavoriteIds);                
                const filteredFavorites = filterFavoritedCharities(charities, currentFavoriteIds);                               
                setFavorites(filteredFavorites);                      
            }
            else {
                setFavorites([]);
            }
        }

        db.on('value', handleData, error => alert(error));
    }, [charities])

    function toggleFavorite(charity) {   
          

        const db = firebase.database().ref('users/1/favorites');
        

        const handleData = snap => {
            if (snap.val()) {       
                const currentFavoritesObject = snap.val();

                if (favoriteIds && favoriteIds.includes(charity.id)) {                    
                    
                    for (var key in currentFavoritesObject) {
                        if (currentFavoritesObject[key] === charity.id) {
                            delete currentFavoritesObject[key];
                        }
                    }                   
                    const removedExisting = favoriteIds.filter(id => {
                        return id !== charity.id;
                    })
                    setFavoriteIds(removedExisting);                    
                    

                    const updatedFirebaseObject = {... currentFavoritesObject};
                    
                    db.set(updatedFirebaseObject);
                } else {                    
                    setFavoriteIds([...favoriteIds, charity.id])
                    
                    db.push(charity.id)
                }       
                               
            } else {                
                db.push(charity.id);
                setFavoriteIds([charity.id]);
                
            }
        }

        db.once('value', handleData, error => alert(error));

        
    }
   
    return (        
        <ScrollView style={styles.Container}>
            {favorites.length > 0 && <Text style={styles.Heading}>Your Favorites</Text>}                                   
            <View style={styles.CharityList}>
            
            {favorites.length > 0 
                    ? favorites.map(charity => <CharityCell key={charity.name} charity={charity} toggleFavorite={toggleFavorite}/>) 
                    : <Text style={styles.Heading}>You have no favorites.</Text>}        
            </View>                       
        </ScrollView>                
    )
};


const styles = StyleSheet.create({
    CharityList: {
        flex: 1,
        padding: 20,
        width: 450,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'left'
    },
    Heading: {
        fontSize: 40,
        fontWeight: 300,
        
    },
    Container: {
        textAlign: 'center',
        paddingTop: 30
    }
})

export default FavoritesList;
