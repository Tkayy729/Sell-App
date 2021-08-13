import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import colors from '../config/colors'

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.deleteIcon}/>
            <View style={styles.closeIcon}/>

            <Image
            resizeMode='contain' 
            source={require('../assets/chair.jpg')}
            style={styles.image}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        flex: 1,

    },
    image:{
        width:'100%',
        height:'100%',
    },
    closeIcon:{
        width:50,
        height: 50,
        position: 'absolute',
        backgroundColor: colors.primary,
        top:40,
        left:30,

    },
    deleteIcon:{
        width:50,
        height: 50,
        position: 'absolute',
        backgroundColor: colors.secondary,
        top: 40,
        right:30,
    }
})

export default ViewImageScreen;
