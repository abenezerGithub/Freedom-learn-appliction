import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import styles, { palette } from "../styles";

export default Icons = {
  changeGradeIcon: (
    <MaterialIcons
      name="published-with-changes"
      size={palette.iconSize.md}
      style={styles.changeGradeIcon}
    />
  ),
  homeIcon: <AntDesign name="home" size={24} style={styles.homeIcon} />,
  subscriptionIcon: (
    <MaterialIcons
      name="wallet-membership"
      size={palette.iconSize.md}
      style={styles.subsciptionIcon}
    />
  ),
  informationIcon: (
    <AntDesign
      name="infocirlceo"
      size={palette.iconSize.md}
      style={styles.informationIcon}
    />
  ),
  settingsIcon: (
    <AntDesign
      name="infocirlceo"
      size={palette.iconSize.md}
      style={styles.settingsIcon}
    />
  ),
};
