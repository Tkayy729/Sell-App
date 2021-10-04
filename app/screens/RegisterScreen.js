import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppTextIpnput from "../components/AppTextIpnput";

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppTextIpnput placeholder="Name" autoCapatalize="none" icon="account" />
      <AppTextIpnput
        icon="email"
        placeholder="Email"
        autoCapatalize="none"
        autocorrect={false}
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <AppTextIpnput
        autoCapatalize="none"
        autoCorrect={false}
        icon="lock"
        secureTextEntry
        placeholder="Password"
        textContentType="password"
      />
      <AppButton title="Register" />
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
