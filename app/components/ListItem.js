import React from 'react';
import { 
    Image,
     View ,
     StyleSheet
     } from 'react-native';

     import AppText from './AppText';
     import colors from '../config/colors';

function ListItem({
    image,
    subtitle,
    title}) {
    return (
       <View style={styles.container}>
           <Image style={styles.image} source={image}/>
           <View >
           <AppText style={styles.title}>{title}</AppText>
           <AppText style={styles.subtitle}>{subtitle}</AppText>
           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 15
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight: 10
       
    },

    subtitle:{
        color:colors.medium,
    },
    title:{
        fontWeight:'500',
    }
})

export default ListItem;