import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from "formik";

import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker'
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            placeholder="Title"
                            onChangeText={handleChange("title")}
                        />
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            placeholder="Price"
                            onChangeText={handleChange("price")}
                        />
                        <AppPicker
                            autoCapatalize="none"
                            autoCorrect={false}
                            placeholder="Category"
                            onChangeText={handleChange("category")}
                        />
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            placeholder="Description"
                            onChangeText={handleChange("description")}
                        />
                        <AppButton
                            title="POST"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default ListingEditScreen;