import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "./Tab";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
