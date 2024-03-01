import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Identity from "assets/images/Tabs/identity.svg";
import Wallet from "assets/images/Tabs/wallet.svg";
import { useTranslation } from "react-i18next";

import { UserDashboardScreen, PersonalInfoScreen } from "Screens";

import { MainHeader } from "Components/Headers";
import { BottomTabBar } from "Components/UI";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
        },
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen
        component={UserDashboardScreen}
        initialParams={{ isOnboarding: false }}
        name="eCommerce"
        options={{
          tabBarIcon: ({ color }) => <Wallet fill={color} />,
          title: "Ecommerce APP",
          header: (props) => <MainHeader {...props} showTitle />,
        }}
      />
      <Tab.Screen
        component={PersonalInfoScreen}
        name="personalInformartion"
        options={{
          tabBarIcon: ({ color }) => <Identity fill={color} />,
          title: "Personal Information",
          header: (props) => <MainHeader {...props} showTitle />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
