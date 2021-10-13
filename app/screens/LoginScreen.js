import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapatalize="none"
              autocorrect={false}
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <AppTextInput
              autoCapatalize="none"
              autoCorrect={false}
              icon="lock"
              secureTextEntry
              onChangeText={handleChange("password")}
              placeholder="Password"
              textContentType="password"
            />
            <AppButton
              title="Login"
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
