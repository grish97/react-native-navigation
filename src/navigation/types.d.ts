import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Details"
>;

export type BottomTabNavigationParamList = {
  Home: HomeStackNavigatorParamList;
  Feed: undefined;
  Settings: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, "Details">,
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Feed">
>;
