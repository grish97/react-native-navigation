import React from "react";
import { DrawerContent } from "components/DrawerContent";
import { NConst } from "constants";
import { Drawer } from "navigation/navigators/drawer";
import { Bookings, Calendar, RideList } from "screens";

/**
 * if you want to show drawer in all screens
 * you can use this type of navigation
 */
// export const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName={NConst.PRIVATE_STACK}
//       drawerContent={() => <DrawerContent />}>
//       <Drawer.Screen name={NConst.PRIVATE_STACK} component={StackNavigator} />
//     </Drawer.Navigator>
//   );
// };

/**
 * Drawer navigation inside Stack navigation
 * Drawer will show only in specified screen
 */
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NConst.BOOKINGS}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name={NConst.BOOKINGS} component={Bookings} />
      <Drawer.Screen name={NConst.RIDE_LIST} component={RideList} />
      <Drawer.Screen name={NConst.CALENDAR} component={Calendar} />
    </Drawer.Navigator>
  );
};
