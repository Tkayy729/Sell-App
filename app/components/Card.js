import React from 'react';
import { StyleSheet, Image, View} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText'

function Card({image,title,subtitle}) {
    return (
        <View style={styles.card}>
           <Image style={styles.image}  source={image} />
           <View style={styles.detailsContainer}>
           <AppText style={styles.title}>{title}</AppText>
           <AppText style={styles.subtitle} >{subtitle}</AppText>
           </View>
               

       </View>
    );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.white,
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: 200,
    },
    detailsContainer:{
        padding: 20,
    },
    title:{
        marginBottom:7,
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:'bold'
    }
    
})

export default Card;