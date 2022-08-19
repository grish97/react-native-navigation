import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = ({ navigation, route }: any) => {
  console.log({ HOME: route.name });

  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => navigation.push("RideList")}>
        <Text>Rider List</Text>
      </TouchableOpacity>
    </View>
  );
};
