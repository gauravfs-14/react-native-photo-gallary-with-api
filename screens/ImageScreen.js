import { Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

export default function ImageScreen({ route }) {
  const { data } = route.params;
  const win = Dimensions.get("window");
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Image
        source={{ uri: data.webformatURL }}
        style={{
          height: null,
          width: win.width - 20,
          aspectRatio: data.imageWidth / data.imageHeight,
          marginBottom: 20,
        }}
      />
      <Text>
        <Text style={{ fontWeight: "bold" }}>Image By:</Text> {data.user}
      </Text>
      <Text>
        {" "}
        <Text style={{ fontWeight: "bold" }}>Tags:</Text> {data.tags}
      </Text>
      <Text>
        {" "}
        <Text style={{ fontWeight: "bold" }}>Views:</Text> {data.views}
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Size:</Text> {data.imageWidth}*
        {data.imageHeight}
      </Text>
    </View>
  );
}
