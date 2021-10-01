import React, { useState } from "react";

import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import ViewImageScreen from "./app/screens/ViewImageScreen";

const categories = [
  {label:"furniture" ,value:1},
  {label:"cameras", value:2},
  {label:"clothings", value:3},
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="categories" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
