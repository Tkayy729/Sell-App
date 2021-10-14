import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup'



import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppFormPicker from '../components/AppFormPicker';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),

});


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField
                    autoCapatalize="none"
                    autoCorrect={false}
                    placeholder="Title"
                    name="title"
                />

                <AppFormField
                    autoCapatalize="none"
                    autoCorrect={false}
                    placeholder="Price"
                    name="price"
                />

                <AppFormPicker
                    autoCapatalize="none"
                    autoCorrect={false}
                    placeholder="Category"
                    name="category"
                />

                <AppFormField
                    autoCapatalize="none"
                    autoCorrect={false}
                    placeholder="Description"
                    name="description"
                />
                <SubmitButton title="POST" />
            </AppForm>
        </Screen >
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default ListingEditScreen;