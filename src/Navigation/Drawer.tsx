import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MenuScreen } from "Screens";

import TabsNavigator from "./Tabs";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={() => <MenuScreen />}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerStyle: {
          width: "90%",
        },
      }}
      detachInactiveScreens
    >
      <Drawer.Screen name="TabNavigator">
        {() => <TabsNavigator />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
