import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, StyleSheet, View } from "react-native";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, width, ...otherProps }) {
  return (
    <View style={[styles.container,{width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} {...otherProps} style={defaultStyles.text} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
