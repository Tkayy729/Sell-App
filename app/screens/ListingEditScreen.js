import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup'



import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppFormPicker from '../components/AppFormPicker';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),

});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
  ];


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField maxLength={255} name="title" placeholder="Title" />

                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    placeholder="Price"
                    name="price"
                />

                <AppFormPicker 
                    items={categories}
                    name="category"
                    placeholder="Category"
                />

                <AppFormField
                     maxLength={255}
                     multiline
                     name="description"
                     numberOfLines={3}
                     placeholder="Description"
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