import { View, Text, SafeAreaView } from "react-native";
import React, { useCallback } from "react";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles, { palette } from "../assets/styles";
import Icons from "../assets/constants/Icons";

import DrawerBanner from "../components/DrawerBanner";

import HomeHeader from "../components/Headers/HomeHeader";
import ChangeGradeHeader from "../components/Headers/ChangeGradeHeader";
import SubscriptionHeader from "../components/Headers/SubscriptionHeader";
import InformationHeader from "../components/Headers/InformationHeader";
import SettingsHeader from "../components/Headers/SettingsHeader";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default () => {
  const screenOptions = {
    drawerStyle: styles.drawer,
    headerStyle: styles.commonDrawerHeader,
    headerTintColor: styles.commonDrawerTintColor,
    drawerLabelStyle: -5,
    drawerActiveBackgroundColor: palette.secondary,
    drawerActiveTintColor: palette.white,
  };

  const [fontsLoaded] = useFonts({
    primary: require("../assets/fonts/Roboto-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  console.log(fontsLoaded);

  if (!fontsLoaded) return <Text>suu</Text>;

  return (
    <Drawer
      drawerContent={(props) => <DrawerBanner itemProps={props} />}
      screenOptions={screenOptions}
      onLayout={onLayoutRootView}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: () => Icons.homeIcon,
          headerTitle: () => <HomeHeader />,
        }}
      />
      <Drawer.Screen
        name="ChangeGrade"
        options={{
          drawerLabel: "Change Grade",
          drawerContentContainerStyle: { backgroundColor: "red" },
          drawerIcon: () => Icons.changeGradeIcon,
          headerTitle: () => <ChangeGradeHeader />,
        }}
      />
      <Drawer.Screen
        name="Subscription"
        options={{
          drawerLabel: "Subscription",
          drawerIcon: () => Icons.subscriptionIcon,
          headerTitle: () => <SubscriptionHeader />,
        }}
      />
      <Drawer.Screen
        name="Information"
        options={{
          drawerLabel: "Information",
          drawerIcon: () => Icons.informationIcon,
          headerTitle: () => <InformationHeader />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          drawerIcon: () => Icons.settingsIcon,
          headerTitle: () => <SettingsHeader />,
        }}
      />
    </Drawer>
  );
};
