import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{ title: 'Home' }} 
                />
                <Stack.Screen name="Listing"
                              component={ListingScreen}
                              options={{ title: 'Classic Cars For Sale' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#373737',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
