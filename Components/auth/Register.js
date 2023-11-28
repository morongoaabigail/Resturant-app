import React, { useState } from "react";
import{MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert, ActivityIndicator
} from "react-native";


const Register = ({navigation}) => {

   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUp = async () => {
    setLoading(true); // Set loading to true when registration starts

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log('Successfully registered:', user.email, user.uid);

      const data = {
        Name: Name,
        Surname: Surname,
      };

    

      setLoading(false); // Set loading to false when registration is successful

      // Show a success message
      Alert.alert('Success', 'You are successfully registered.');

      // Navigate to the login page
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false); // Set loading to false when registration fails

      const errorCode = error.code;
      const errorMessage = error.message;

      // Handle different error codes
      Alert.alert('Error', errorMessage);

      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../auth/RegisterBck.avif")}
        style={styles.image}
      >
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <AntDesign name="arrowleft" size={24} color="white" top={-220} left={8} />
       

    </TouchableOpacity>
   
    <Text style={{color:"white", marginLeft:107,bottom:240, fontWeight:'bold',fontSize:30}}>Sign Up</Text>
    <ScrollView>
       
        <TextInput
          placeholder="Name"
          placeholderTextColor={'white'}
          onChangeText={(r) => setName(r)}
          value={Name}
          style={{
            borderWidth: 1,
            width: 320,
            height: 50,
            padding: 10,
            marginTop:"30%",
            borderRadius: 50,
            color: "white",
            borderColor: "#ADA1A1",
            marginLeft: 16,
          }}
        ></TextInput>

        <TextInput
          placeholder="Surname"
          placeholderTextColor={'white'}
          onChangeText={(text) => setSurname(text)}
          value={Surname}
          style={{
            borderWidth: 1,
            width: 320,
            height: 50,
            marginTop: "12%",
            padding: 10,
            borderRadius: 50,
            marginLeft: 16,
            color: "white",
            borderColor: "#ADA1A1",
          }}
        />
       
       <TextInput
          placeholder="Email"
          placeholderTextColor={'white'}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            borderWidth: 1,
            width: 320,
            height: 50,
            marginTop: "12%",
            padding: 10,
            borderRadius: 50,
            marginLeft: 16,
            color: "white",
            borderColor: "#ADA1A1",
          }}
        />
        
        <TextInput
          placeholder="Password"
          placeholderTextColor={'white'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}

          style={{
            borderWidth: 1,
            width: 320,
            height: 50,
            marginTop:"12%",
            padding: 10,
            borderRadius: 50,
            marginLeft: 16,
            color: "white",
            borderColor: "#ADA1A1",
          }}
        />
       
        
        <TouchableOpacity style={styles.iconContainer} onPress={toggleShowPassword}>
        <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={22} color="white" marginLeft={290} bottom={36}/>
      </TouchableOpacity>


        <TouchableOpacity style={styles.button}onPress={() => signUp()}
          disabled={loading}>
            {loading ? (
            <ActivityIndicator size="large" color="white" alignSelf="center" alignItems="center" />
          ) : (
          <Text style={styles.btn}>SIGN IN</Text>
          )}
        </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    justifyContent: "center",
    flex: 1,
    width:350,
    height:200,
    marginLeft:16,
    marginTop:100
    
  },
  btn: {
    color: "white",
    fontWeight: "800",
    paddingLeft: 60,
    fontSize: 20,
    marginRight: 60,
    top: 3,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5C5959",
    padding: 10,
    width: 320,
    height: 50,
    marginTop:"12%",
    borderRadius: 50,
    marginLeft: 16,
  },
});
export default Register;
