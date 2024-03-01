import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "Screens/User/Details";

import { MainHeader } from "Components/Headers";

import DrawerNaigator from "./Drawer";

const Stack = createNativeStackNavigator();

const options = {
  header: () => null,
};

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNaigator" {...{ options }}>
        {() => <DrawerNaigator />}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={{
          title: "Details",
          headerShown: false,
        }}
      >
        {(props) => <DetailsScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default MainNavigator;
