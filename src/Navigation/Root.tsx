import React, { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSession } from "Services/Store/session";

import AuthNavigator from "./Auth";
import MainNavigator from "./Main";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { idToken } = useSession();

  const routes = useMemo(() => {
    if (!idToken) {
      return (
        <Stack.Screen
          component={AuthNavigator}
          name="AuthNavigator"
          options={{
            animationTypeForReplace: "pop",
          }}
        />
      );
    }

    return <Stack.Screen component={MainNavigator} name="MainNavigator" />;
  }, [idToken]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {routes}
    </Stack.Navigator>
  );
}

export default RootNavigator;
