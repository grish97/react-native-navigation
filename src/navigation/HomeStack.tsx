import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen, HomeScreen } from "../screens";

import { HomeStackNavigatorParamList } from "./types";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};
