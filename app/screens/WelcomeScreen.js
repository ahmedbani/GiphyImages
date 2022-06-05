import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppButton from '../components/AppButton';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo.gif")} style={styles.logo}/>
                <Text style= {styles.tagline}>Giphy Images</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title={'login'} onPress= {()=> navigation.push('Login')} />
                <AppButton title={'register'} color={'black'} onPress= {()=> navigation.push("Register")}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        position: "absolute",
        top: 70,  
        alignItems: "center"  
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical:20,
    }
})
