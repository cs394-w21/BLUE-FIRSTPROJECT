import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native';
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
                <View style={styles.CharityDistanceContainer}>
                    <Text style={styles.CharityDistance}>{charity.distance}</Text>
                </View>            
                <View style={styles.CharityDescriptionContainer}>
                    <Text style={styles.CharityDescription}>{charity.description}</Text>
                </View>
                <View style={styles.CharityNeedsContainer}>
                    <Text style={styles.CharityNeeds}>Needs: {charity.items.length > 0 ? charity.items.map((item, index) => 
                        <Text style={styles.CharityNeedItem}>{item.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ') + (index < (charity.items.length - 1) ? ', ' : '')}</Text>
                    ) : "Nothing specific"}</Text>
                </View>
                <View style={styles.ArrowContainer}>
                    <TouchableOpacity style={styles.ArrowIcon} onPress={() => Linking.openURL(charity.url)}>                
                        <FontAwesome5 style={styles.starIcon} name={'arrow-right'} size={20}></FontAwesome5>                               
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>  
    )
};
  
const styles = StyleSheet.create({
    CharityCell: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        padding: 15,
        width: 425,
        height: 225,                        
        backgroundColor: "#c0f8fa",
    },
    CharityHeader: {
        flex: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    CharityDistanceContainer: {
        flex: 0.25,                
    },
    CharityDescriptionContainer: {
        flex: 0.55
    },
    CharityNeedsContainer: {
        flex: 0.2,
        width: '90%'
    },
    CharityTitle: {        
        fontSize: 22,
        fontWeight: 600
    },
    CharityDistance: {
        fontSize: 18,
        fontWeight: 500,
        color: '#505050'
    },
    CharityDescription: {
        fontSize: 17,
        fontWeight: 300
    },
    CharityNeeds: {
        fontSize: 16,
        fontWeight: 500,        
    },
    CharityNeedItem: {
        fontSize: 15,
        fontWeight: 400,        
    },
    ArrowContainer:{        
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    ArrowIcon: {
        width: 15,
    }   
})

export default CharityCell;