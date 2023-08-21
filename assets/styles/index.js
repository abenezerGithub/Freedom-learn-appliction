import { StyleSheet } from "react-native";

export const palette = {
  primary: "#4287f5",
  secondary: "#fa4525",
  dark: "#1f1c1b",
  white: "#fff",
  iconSize: {
    sm: 12,
    md: 18,
    lg: 22,
  },
};
export default styles = StyleSheet.create({
  darwer: {},
  commonDrawerHeader: {},
  commonDrawerTintColor: {},
  drawerBanner: {
    margin: 20,
    fontWeight: 800,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  drawerbannerText: {
    fontSize: 26,
    fontWeight: 800,
    color: palette.dark,
  },
  ChangeGradeIcon: {
    color: palette.primary,
  },
  homeIcon: {
    color: palette.primary,
  },
  informationIcon: {
    color: palette.primary,
  },
  settingsIcon: {
    color: palette.primary,
  },
});
