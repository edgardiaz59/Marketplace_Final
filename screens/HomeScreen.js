import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Listings from '../components/Listings';
import { listings } from '../data/listings';

const HomeScreen = ({navigation}) => {
    console.log(listings);
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Classic Cars For Sale </Text>
            <Text style={{color: "#fff"}}> Please select any of the photos to view more information! </Text>
            <Listings listings={listings} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0760b2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    title: {
        fontSize: 40,
        color: '#fff',
        shadowColor: '#fff',
        shadowOffset: {
            width: 2,
            height: 2
          },
          shadowOpacity: 2,
          shadowRadius: 4,
        marginTop: 20,
        marginBottom: 20
    }
});