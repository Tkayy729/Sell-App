import React from 'react';
import { SafeAreaView,View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

function Screen({children,style}) {
    return (
       <SafeAreaView style={[styles.screen,style]}>
           <View style={style}>{children}</View>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop: Constants.statusBarHeight,
    }
})

export default Screen;