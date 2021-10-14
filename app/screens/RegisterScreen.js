import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >

        <AppFormField
          placeholder="Name"
          name="name"
          autoCapatalize="none"
          icon="account"
        />
        <AppFormField
          icon="email"
          name="email"
          placeholder="Email"
          autoCapatalize="none"
          autocorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <AppFormField
          autoCapatalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Register" />

      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
});

export default RegisterScreen;
