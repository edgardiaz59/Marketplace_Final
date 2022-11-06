import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from './Card';

const renderCard = ({item}) => {
    return (
        <Card item={item} />
    )
}

const Listings = ({listings}) => {

    if (listings != null)
    {
        return (
            <FlatList
                style={styles.container}
                data={listings}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ () => {
                    return (
                        <View style={styles.separator} />
                    )
                }} 
            />
        )
    } else {
        return (
            <View style={styles.container}>
                <Text>Loading Cars...</Text>
            </View>
        )
    }
}

export default Listings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
      paddingTop: 20,
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor: "#0760b2",
      paddingBottom: 10
    },
    header: {
      marginTop: 20
    },
    title: {
      fontSize: 38,
      color: '#0760b2',
      marginBottom: 20
    },
    separator: {
      marginTop: 10,
    },

});