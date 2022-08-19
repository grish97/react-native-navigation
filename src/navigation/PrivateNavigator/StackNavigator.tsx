import React from "react";
import { NConst } from "constants";
import { Stack } from "navigation/navigators/stack";
import {
  Calendar,
  Notification,
  RideDetail,
  RideList,
  RNCamera,
  Signature,
} from "screens";
import { DrawerNavigator } from "navigation/PrivateNavigator/DrawerNavigator";

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NConst.PRIVATE_STACK}>
      <Stack.Screen
        name={NConst.PRIVATE_STACK}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={NConst.CALENDAR} component={Calendar} />
      <Stack.Screen name={NConst.RN_CAMERA} component={RNCamera} />
      <Stack.Screen name={NConst.NOTIFICATIONS} component={Notification} />
      <Stack.Screen name={NConst.SIGNATURE} component={Signature} />
      <Stack.Screen name={NConst.RIDE_LIST} component={RideList} />
      <Stack.Screen name={NConst.RIDE_DETAILS} component={RideDetail} />
    </Stack.Navigator>
  );
};
