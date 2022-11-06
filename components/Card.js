import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = ({item}) => {

    const navigation = useNavigation();

    //Seed a sample image from picsum.photos
    //const randomId = item.id * 1000;

    //item.image = 'https://picsum.photos/seed/' + randomId + '/600/600';
    console.log(JSON.stringify(item));
    return (
        <TouchableOpacity 
        style={{backgroundColor: '#6a1111'}} 
        onPress={() => {navigation.navigate('Listing', { listing: item })}}>
            <View style={styles.container}>
                <View style={[styles.card]}>
                    <Image
                        style={styles.cardImage}
                        source={{ uri: item.image }}
                    />
                    <View style={styles.cardContent} >
                        <View style={styles.cardHeader} >
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#073485',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    card: {
      borderWidth: 0,
      minHeight: 300,
      shadowColor: '#fff',
      shadowOffset: {
        wdith: 2,
        height: 2
      },
      shadowOpacity: 5,
      shadowRadius: 4,
      marginVertical: 12,
      marginTop: 0,
      backgroundColor: '#fff',
      marginRight: 0,
      alignSelf: 'stretch',
    },
    cardImage: {
      flex: 1,
      height: 150,
      borderRadius: 3
    },
    cardContent: {
      paddingBottom: -50,
      paddingVertical: 15,
      paddingHorizontal: 50
    },
    title: {
      fontSize: 28,
      color: '#0760b2',
      align: "center"
    },
    desc: {
      fontSize: 15
    },
    cardHeader: {
      paddingVertical: 5
  
    },
    button: {
      backgroundColor: '#6a1111'
    }

});