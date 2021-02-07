import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { firebase } from '../utils/firebase';

const CharityCell = ({charity, toggleFavorite}) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // checks if this charity has been favorited or not
    useEffect(() => {
        const db = firebase.database().ref('users/1/favorites');
        const handleData = snap => {
            if (snap.val()) {
                const favoriteList = Object.values(snap.val());
                setIsFavorited(favoriteList.includes(charity.id));                                   
            }
            else {
                setIsFavorited(false);
            }
        }

        db.on('value', handleData, error => alert(error)); 

        return () => {
            db.off('value', handleData);
        }
    }, [])

    return (    
        <ScrollView>
            <View style={styles.CharityCell}>
                <View style={styles.CharityHeader}>
                    <Text style={styles.CharityTitle}>{charity.name}</Text>
                    <TouchableOpacity style={styles.Button} onPress={() => toggleFavorite(charity)}>                
                        {isFavorited
                            ? <FontAwesome5 style={styles.starIcon} name={'star'} size={21.5} solid color={'#f9ce06'}></FontAwesome5> 
                            : <FontAwesome5 style={styles.starIcon} name={'star'} size={20}></FontAwesome5>}                        
                    </TouchableOpacity>
                </View>               
                <Text style={styles.CharityDistance}>{charity.distance}</Text>
                <Text style={styles.CharityDescription}>{charity.description}</Text>
            </View>
        </ScrollView>  
    )
};
  
const styles = StyleSheet.create({
    CharityCell: {
        flex: 1,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        width: 400,
        backgroundColor: "#c0f8fa",
    },
    CharityHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    CharityTitle: {
        fontSize: 24,
    },
    CharityDistance: {
        fontSize: 20,
        fontWeight: "bold",
    },
    CharityDescription: {
        fontSize: 20,
    }    
})

export default CharityCell;