import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import SingleItem from "./SingleItem";

export default function Cocktails({navigation}) {

    const [preview,ShowPreview]=useState('block');
    const data=[
        { key:1, itemName:'Sexy Martini', description:'gin and vermouth, and garnished with a berry.',price:'95',img:require("../Components/SexyMartini.jpg")},
        { key:2,itemName:'Side Card', description:'cognac,ounce orange liqueur, lemon juice.',price:'75',img:require("../Components/SideCar.jpg")},
        { key:3, itemName:'Strawberry Daquiri', description:'white rum, fresh-squeezed lime juice, Syrup, Frozen strawberries.',price:'70',img:require("../Components/StrawberryDaquiri.webp")},
        { key:4, itemName:'Margarita', description:'freshly squeezed lime juice, triple sec, tequila.',price:'90',img:require("../Components/Margarita.jpg")},
        { key:5, itemName:'Clover Club', description:'lemon juice, raspberry, egg white Garnish, raspberries.',price:'105',img:require("../Components/CloverClub.jpg")},
        { key:6, itemName:'Pina Colada', description:'light rum ,cream of coconut, pineapple juice, lime juice, freshly.',price:'89',img:require("../Components/Pinacolada.avif")},
        { key:7, itemName:'Honey Blitz', description:'white rum, yellow Galliano, triple sec, and fresh lime juice.',price:'65',img:require("../Components/HoneyBlitz.avif")}
    ];

    const [singleItem,setSingle]=useState('');
    var ShowSingle=(item)=>{
        ShowPreview('none');
        setSingle(item);
        console.log(item);
        console.log(preview);

    
        
    }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Ionicons name="ios-cart-outline" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "white",
          marginLeft: 82,
          marginTop: 15,
          fontSize: 40,
          fontWeight: "600",
          fontFamily: "Katibeh",
        }}
      >
        Our Cocktails
      </Text>

      <FlatList style={{display:preview}}
      data={data}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>ShowSingle(item)} style={{marginBottom:20}}>
            <View style={styles.top}>
          <Text
            style={{
              color: "white",
              marginLeft: 30,
              fontWeight: "600",
              top: 30,
            }}
          >
           {item.itemName}
          </Text>
          <Image
            source={item.img}
            style={{ width: 150, height: 247, bottom: 17, marginLeft: 177 }}
          ></Image>

          <Text
            style={{
              color: "#ADA1A1",
              width: 100,
              marginLeft: 28,
              bottom: 200,
            }}
          >
            {item.description}
          </Text>
          <Text style={{color:'white',bottom:150, marginLeft:35, fontWeight:"bold" }}>R{item.price}</Text>
        </View>
        </TouchableOpacity>
      )}
      />

      {preview=='none' && <SingleItem item={singleItem} ShowPreview={ShowPreview}/>}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },

  top: {
    flex: 0.3,
    backgroundColor: "transparent",
    borderWidth: 1,
    marginTop: 5,
    width: 330,
    height: 250,
    borderColor: "#5C5959",
  
  },

  bottom: {
    flex: 0.3,
    backgroundColor: "transparent",
    borderWidth: 1,
    marginTop: 30,
    borderColor: "#5C5959",
    width: 330,
    height: 250,
    
  },
});
