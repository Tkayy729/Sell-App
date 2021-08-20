import React from 'react';
import { FlatList,  StyleSheet, View } from 'react-native';


import Screen from '../components/Screen';
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';

function MessagesScreen(props) {
   
    const messages =[{
        id:1,
        title:'T1',
        description:'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image: require('../assets/tkayy.jpg')
    }]
    return (
        <Screen style={StyleSheet.screen}>
            <FlatList 
            data={messages}
            keyExtractor= {messages => {messages.id.toString()}}
            renderItem = {({item}) => <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}/>}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
       
    }
})

export default MessagesScreen;