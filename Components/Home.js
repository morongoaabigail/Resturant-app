import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    
   const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/HomeBck.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 100,
            bottom:150,
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text
              style={{ fontWeight: "bold", color: "white", marginLeft: 30}}
            >
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
            <Text style={{ fontWeight: "bold", color: "white" }}>MENU</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "white", marginRight:35 }} onPress={()=>navigation.navigate('About')}> ABOUT US</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", color: "white", marginRight: 17 }}
            >
              CONTACT US
            </Text>
          </TouchableOpacity> */}
        </View>

        <Text style={{fontWeight:'800',color:"white",marginLeft:38,fontSize:70,marginBottom:26, fontFamily:'Katibeh'}}>GAIL'S MONT</Text>
        <View  style={{backgroundColor:"transparent", borderColor:"#EEE4E4",borderWidth:1,height:80, width:200,marginLeft:90}}>
            
          <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                alignSelf:'center',
                marginLeft: 10,
                textDecorationColor:"#EEE4E4",
                padding:27,           
                 fontSize:23,
                
              }}
            >
              OUR MENU
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});


