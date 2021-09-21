import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem'

function AccountScreen(props) {
    return (
        <Screen>
            <ListItem 
            title="Emmanuel Tweneboah Koduah"
            subTitle="emmanueltweneboah71@gmail.com"
            image={require("../assets/tkayy.jpg")}/>
        </Screen>
    );
}

export default AccountScreen;