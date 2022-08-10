import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Keyboard,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageScreen from "./ImageScreen";
import { Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import axios from "axios";

const Stack = createNativeStackNavigator();

function HomeScreenElement({ navigation }) {
  const [DATA, setDATA] = useState({});
  const [term, setTerm] = useState("");
  const win = Dimensions.get("window");
  const handleSubmit = () => {
    axios
      .get(`https://pixabay.com/api/?key=yourkey&q=${term}&image_type=photo`)
      .then((res) => setDATA(res.data))
      .catch((err) => console.log(err));
    setTerm("");
    Keyboard.dismiss();
  };
  return (
    <View>
      <View
        style={{
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Search..."
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "black",
            padding: 10,
            marginBottom: 10,
          }}
          value={term}
          onChangeText={setTerm}
        />
        <Button title="Search" color="black" onPress={handleSubmit} />
      </View>

      <FlatList
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ImageScreen", {
                data: item,
              })
            }
          >
            <Image
              style={{
                height: win.height / 5,
                width: win.width - 20,
                flex: 1,
                margin: 10,
              }}
              source={{ uri: item.webformatURL }}
            />
          </TouchableOpacity>
        )}
        data={DATA.hits}
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="ImageHome">
      <Stack.Screen
        name="ImageHome"
        component={HomeScreenElement}
        options={{ title: "Image Gallary" }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{ title: "Image Details" }}
      />
    </Stack.Navigator>
  );
}
