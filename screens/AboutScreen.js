import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>
        Follow Me:
      </Text>
      <Text style={{ alignItems: "center", marginBottom: 10 }}>
        <Ionicons name="logo-github" size={30} />
        @gauravfs-14
      </Text>

      <Text style={{ alignItems: "center" }}>
        <Ionicons name="logo-instagram" size={30} />
        @gaurav_fs_14
      </Text>
    </View>
  );
}
