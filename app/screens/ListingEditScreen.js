import React from 'react';
import { StyleSheet } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker'
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppTextInput placeholder="Title" />
            <AppTextInput placeholder="Price" />
            <AppPicker placeholder="Category" />
            <AppTextInput placeholder="Description" />
            <AppButton title="POST" />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 10
    }
})
export default ListingEditScreen;