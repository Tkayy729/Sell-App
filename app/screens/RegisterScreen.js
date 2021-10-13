import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextIpnput from "../components/AppTextIpnput";

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextIpnput
              placeholder="Name"
              onChangeText={handleChange("name")}
              autoCapatalize="none"
              icon="account"
            />
            <AppTextIpnput
              icon="email"
              placeholder="Email"
              autoCapatalize="none"
              autocorrect={false}
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <AppTextIpnput
              autoCapatalize="none"
              autoCorrect={false}
              icon="lock"
              secureTextEntry
              onChangeText={handleChange("password")}
              placeholder="Password"
              textContentType="password"
            />
            <AppButton title="Register"  onPress={handleSubmit}/>
          </>
        )}
      </Formik>
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
