import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function About({ navigation }) {
  const handleFacebookPress = () => {
    const facebookUrl =
      "https://www.facebook.com/https://react-icons.github.io/react-icons/icons?name=md";

    Linking.openURL(facebookUrl).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const handleTwitterPress = () => {
    const twitterUrl =
      "https://twitter.com/https://chat.openai.com/c/c27ca012-83ee-4169-82d3-503116d744ce";

    Linking.openURL(twitterUrl).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleInstagramPress = () => {
    const instagramUrl = `https://www.instagram.com/abigail_morongoa`;

    Linking.openURL(instagramUrl).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop:50,marginLeft:15}} onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          
        />
      </TouchableOpacity>
      <ScrollView>
        <Image
          source={require("../Components/Asian.jpg")}
          style={styles.img}
        ></Image>

        <Text
          style={{
            color: "white",
            position: "absolute",
            zIndex: 4,
            marginTop: 170,
            fontSize: 13,
          }}
        >
          Welcome to Gail’’s Mont, the Asian restaurant that offers more than
          just a meal - it's an experience that transports you to another world.
          From the moment you step inside, you'll feel like you've been
          transported to another realm. Our expertly crafted dishes, inspired by
          the vibrant flavours of Asia, will take your taste buds on a journey
          of their own. But it's not just the food that makes Gail’s Mont - it's
          the unique vibe that envelops you from the moment you arrive.
        </Text>

        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 18,
            top: 20,
            marginLeft: 30,
          }}
        >
          Our Resturant
        </Text>
        <Text
          style={{ color: "white", marginTop: 40, width: 130, marginLeft: 30 }}
        >
          Fine Ottoman food was always a blend of best ingredients all over
          Anatolia. Rami Restaurant follows this tradition as the Ottoman
          Empire’s best cooks did.
        </Text>
        <Image
          source={require("../Components/kitchen.jpg")}
          style={styles.kitchen}
        ></Image>
        <Text
          style={{
            color: "white",
            marginLeft: 30,
            fontWeight: "600",
            bottom: 160,
          }}
        >
          qǐng màn yòng!
        </Text>

        <View style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'row',  justifyContent: "space-between", marginLeft:200, right:100, bottom:100 }}>
          <TouchableOpacity onPress={handleFacebookPress}>
            <Entypo
              name="facebook"
              size={24}
              color="white"
            //   marginLeft={100}
            //   bottom={100}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterPress}>
            <AntDesign
              name="twitter"
              size={24}
              color="white"
            //   bottom={142}
            //   marginLeft={170}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleInstagramPress}>
            <Entypo
              name="instagram"
              size={24}
              color="white"
            //   bottom={185}
            //   marginLeft={230}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    height: 300,
    width: 400,
    position: "relative",
    marginTop: 90,
  },
  kitchen: {
    height: 180,
    width: 170,
    marginLeft: 200,
    bottom: 190,
  },
});
