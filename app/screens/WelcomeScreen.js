import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors'



function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        source={require('../assets/background.jpg')}
        style={styles.background}>
            <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
             source={require('../assets/logo-red.png')} />
             <Text style={styles.tagline}> Sell What You Dont Need</Text>
            </View>
            <View style={styles.looks}>

            <AppButton title="login" color="primary"/>
            <AppButton title="register" color="secondary"/>

            </View>
        </ImageBackground>
    );
}
const styles  = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    looks:{
        width:"100%",
        padding: 15,
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
    tagline:{
        fontWeight:'600',
        paddingVertical: 20,
        fontSize:25,
    }
   
})

export default WelcomeScreen;