import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors'


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require('../assets/background.jpg')}
        style={styles.background}>
            <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
             source={require('../assets/logo-red.png')} />
             <Text> We Sell Everything You Dont Wear</Text>
            </View>

            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
}
const styles  = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    logoContainer:{
        position:'absolute',
        top: 70, 
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,
    },
    loginButton:{
        backgroundColor: colors.primary,
        width : '100%',
        height: 70,
    },
    registerButton:{
        backgroundColor: colors.secondary,
        width : '100%',
        height: 70,
    },
    
})

export default WelcomeScreen;