import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationParamList } from "./types";
import { HomeStackNavigator } from "./HomeStack";
import { FeedScreen, SettingsScreen } from "../screens";

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
