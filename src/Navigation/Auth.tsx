import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeScreen } from "Screens";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{
          title: "Welcome",

          header: () => null,
        }}
      >
        {(props) => <WelcomeScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthNavigator;
