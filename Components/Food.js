import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import SingleItem2 from "./SingleItem2";

export default function Food({navigation}) {

    const [preview,ShowPreview]=useState('block');
    const data=[
        { key:1, itemName:'Satay', description:'  garlic cloves,  lime, honey,  soy sauce, peanut butter, chicken breast fillets, coconut milk, vegetable oil',price:'95',img:require("../Components/Satay.jpg")},
        { key:2,itemName:'Sushi', description:'carlifonia rolls.Shrimp tempura roll. Salmon sushi ',price:'75',img:require("../Components/sushi.jpg")},
        { key:3, itemName:'Ramen', description:'Sesameoil, Garlic, Ginger paste, Mushrooms, Soy source, Baby bokchoy, noodles',price:'70',img:require("../Components/ramen.jpeg")},
        { key:4, itemName:'Adobo', description:'Meat (beef, chicken, pork), seafood,soy sauce, vinegar, garlic, bay leaf',price:'90',img:require("../Components/Adobo.jpg")},
        // { key:5, itemName:'Clover Club', description:'lemon juice, raspberry, egg white Garnish, raspberries.',price:'105',img:require("../Components/CloverClub.jpg")},
        // { key:6, itemName:'Pina Colada', description:'light rum ,cream of coconut, pineapple juice, lime juice, freshly.',price:'89',img:require("../Components/Pinacolada.avif")},
        // { key:7, itemName:'Honey Blitz', description:'white rum, yellow Galliano, triple sec, and fresh lime juice.',price:'65',img:require("../Components/HoneyBlitz.avif")}
    ];

    const [singleItem2,setSingle]=useState('');
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
        Food & Serve
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
          <Text style={{color:'white',bottom:180, marginLeft:35, fontWeight:"bold" }}>R{item.price}</Text>
        </View>
        </TouchableOpacity>
      )}
      />

      {preview=='none' && <SingleItem2 item={singleItem2} ShowPreview={ShowPreview}/>}


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
    right: 18,
  },
});
