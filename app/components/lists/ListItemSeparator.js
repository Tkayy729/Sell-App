import React from 'react';
import { View, StyleSheet} from 'react-native'

import defaultStyles from '../../config/styles';

function ListItemSeparator() {
    return (
        <View style={styles.separator}/>
    );
}
const styles = StyleSheet.create({
   separator:{
       backgroundColor: defaultStyles.colors.light ,
       height: 1,
        width: "100%"
   }
    
})

export default ListItemSeparator;