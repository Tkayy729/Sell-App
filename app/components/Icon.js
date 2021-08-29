import React from 'react';
import {View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
    size = 40,
    backgroundColor,
    IconColor,
    name
}) 
{
    return (
       <View style = {{
           width: size,
           height: size,
           borderRadius: size/2,
           backgroundColor,
           justifyContent:"center",
           alignItems:"center"
       }}>
        <MaterialCommunityIcons name={name} size={size*0.5} color={IconColor}/>
       </View>
    );
}

export default Icon;