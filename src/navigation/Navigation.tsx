import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PrivateRootNavigator } from "navigation/PrivateNavigator";
import { PublicRootNavigator } from "navigation/PublicNavigator";

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoggedIn(true), 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <PrivateRootNavigator /> : <PublicRootNavigator />}
    </NavigationContainer>
  );
};
