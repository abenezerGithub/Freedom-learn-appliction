import { View, Text, SafeAreaView } from "react-native";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import styles from "../../assets/styles";

export default DrawerBanner = ({ itemProps }) => {
  return (
    <View>
      <DrawerContentScrollView>
        <View style={styles.drawerBanner}>
          <Text style={styles.drawerbannerText}>Drawer Banner</Text>
        </View>
        <DrawerItemList {...itemProps} />
      </DrawerContentScrollView>

      <View style>
        <Text>Suuu</Text>
      </View>
    </View>
  );
};
