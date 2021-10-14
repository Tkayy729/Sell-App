import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup'



import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          placeholder="Email"
          autoCapatalize="none"
          autocorrect={false}
          name="email"
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

        <SubmitButton title="Login" />
        
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
