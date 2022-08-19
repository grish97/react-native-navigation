import React from "react";
import { NConst } from "constants";
import { SignIn, SignUp } from "screens";
import { Stack } from "navigation/navigators/stack";

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NConst.SIGN_IN} component={SignIn} />
      <Stack.Screen name={NConst.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
};
