import React, { useState } from "react";
import { TouchableOpacity,View,StyleSheet,Text, Image, Pressable } from "react-native";
import { db } from "../FirebaseConfig";
import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 



export default function singleItem2(props) {
    const {item,ShowPreview}=props;
    console.log(item)
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    console.log("db object:", db);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    const addToCart = async () => {
      try {
      
        if (count > 0) {
  
        const docRef = await addDoc(collection(db, "cart"), {
          itemName: item.itemName,
          quantity: count,
          price: item.price,
          img: item.img,
  
      
        });
        if(docRef!==""){
          setCount(0);
          alert("Item added to cart!");
        }
      } else {
        alert("No item added to cart.");
      }
      
        
      } catch (error) {
        console.error("Error adding item to cart: ", error);
      }
    };
  
  return (
    <View style={styles.top}>
        <TouchableOpacity onPress={()=>ShowPreview('block')}>
            <Text style={{color:'white',fontSize:10, fontWeight:'500'}}>
                Back
            </Text>
        </TouchableOpacity>

        <Image
        source={item.img}
        style={{ width: 300, height: 270,marginTop:10, marginLeft: 20 }}
      ></Image>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "800",
            fontSize: 15,
            marginTop: 20,
            marginLeft:20,
          }}
        >
          {item.itemName}
        </Text>
        <Text style={{ color: "white", fontWeight: "800", fontSize: 15 ,marginTop: 20,marginRight:75}}>
          R{item.price}
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          borderColor: "#5C5959",
          width: 140,
          marginTop: 25,
          borderWidth: 1,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={decrement}
          disabled={count < 1 ? true : false}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.countText}>{count}</Text>

<TouchableOpacity style={styles.button1} onPress={increment}>
  <Text style={styles.buttonText}>+</Text>
</TouchableOpacity>
</View>
<Text style={{color:'#5C5959',marginTop:25, marginLeft:12}}>{item.description}</Text>





      <TouchableOpacity style={{alignItems: "center",
    backgroundColor: "#5C5959",
    padding: 10,
    width: 320,
    height: 50,
    marginTop:30,
    borderRadius: 50,
    marginLeft: 10,}}>
      <Text style={{color:"white", fontWeight:'600', fontSize:20}}onPress={addToCart}>Add to cart</Text>
      </TouchableOpacity>

      {/* <Text
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
      <Text
        style={{
          color: "white",
          bottom: 150,
          marginLeft: 35,
          fontWeight: "bold",
        }}
      >
        R{item.price}
      </Text> */}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      padding: 20,
  
    },
  
    // top: {
    //   flex: 0.3,
    //   backgroundColor: "transparent",
    //   borderWidth: 1,
    //   marginTop: 30,
    //   width: 330,
    //   height: 250,
    //   borderColor: "#5C5959",
    
    // },
  
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
    button: {
      paddingLeft: 17,
      width: 25,
      marginRight: 40,
    },
    button1: {
      marginLeft: 27,
      padding: 5,
      width: 25,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
    countText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
  });