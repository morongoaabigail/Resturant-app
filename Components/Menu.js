import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


export default function Menu({navigation}) {

    // const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          marginLeft: 60,
          fontSize: 20,
          top: 90,
          position: "absolute",
          zIndex: 5,
        }}
      >
        Drinks
      </Text>
<View style={{ display:'flex', flexDirection:"row",justifyContent:"space-between", top:"15%"}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          marginLeft={15}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Ionicons name="ios-cart-outline" size={26} color="white" marginRight={20}
          />
        </TouchableOpacity>
        </View>
      <Image
        source={require("../Components/Drinks.jpg")}
        style={styles.image}
      ></Image>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Cocktails')}>
        <Text
          style={{
            color: "white",
            marginLeft: 41,
            bottom: 100,
            fontWeight: "500",
            textDecorationColor: "#EEE4E4",
            fontSize: 23,
            backgroundColor: "transparent",
            borderColor: "#EEE4E4",
            borderWidth: 1,
            height: 50,
            width: 100,
            paddingLeft: 20,
            paddingTop: 9,
          }}
        >
          Order
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          marginLeft: 232,
          position: "relative",
          bottom: 585,
          fontSize: 20,
        }}
      >
        Food & Serve
      </Text>

      <View style={{ position: "relative" }}>
        <Image
          source={require("../Components/food.avif")}
          style={styles.foodImage}
        ></Image>
        <TouchableOpacity onPress={()=>navigation.navigate('Food')}
          style={{
            position: "absolute",
            left: 277,
            zIndex: 5,
            marginTop: -170,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              textDecorationColor: "#EEE4E4",
              fontSize: 23,
              backgroundColor: "transparent",
              borderColor: "#EEE4E4",
              borderWidth: 1,
              height: 50,
              width: 100,
              paddingLeft: 20,
              paddingTop: 9,
              right:35
            }}
          >
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: 140,
    height: 600,
    marginLeft: 20,
    justifyContent: "center",
    position: "relative",
    top: 100,
  },

  btn: {
    color: "white",
    fontWeight: "700",
    textDecorationColor: "#EEE4E4",
    fontSize: 23,
  },
  foodImage: {
    width: 140,
    height: 600,
    bottom: 575,
    marginLeft: 220,
  },
});
