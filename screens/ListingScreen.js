import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';

const ListingScreen = ({ route }) => {

    const { listing } = route.params;

    return (
        <ScrollView style={styles.container}>

            <Image style={styles.listingImage} source={{uri: listing.image}}/>
            <Text style={styles.title}> {listing.title} </Text>
            <Text style={styles.body}> {listing.body} </Text>
            <Text style={styles.tags}> {listing.tags.join(' | ')} </Text>

        </ScrollView>
    )
}

export default ListingScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 20
    },
    tags: {
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'flex-start',
        color: '#667'
    },
    title: {
        fontSize: 24,
        color: '#0760b2',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    body: {
        fontSize: 32,
        letterSpacing: 1,
        color: '#0760b2'
    },
    listingImage: {
        height: 250,
        borderRadius: 5,
        marginBottom: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    }

});