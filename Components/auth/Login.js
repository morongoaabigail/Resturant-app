import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert , ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from "../../FirebaseConfig";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({navigation}) => {

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signin = () => {
    setLoading(true);
   

  
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        // Signed in
        const user = userCredential.user;
        console.log(user.email, user.uid);
        
        navigation.navigate('Home');
        // ...
      })

      .catch((error) => {
        setLoading(false); // Set loading to false when login fails
        const errorCode = error.code;
        const errorMessage = error.message;

        // Handle different error codes
        if (errorCode === 'auth/user-not-found') {
          // Handle when the user is not registered
          Alert.alert('Error', 'User not registered. Please register first.');
        } else {
          // Handle other errors
          Alert.alert('Error', errorMessage);
        }

        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../auth/LoginBck.jpg")}
        style={styles.image}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 55,
            marginLeft: 100,
            marginBottom: 30,
            top: 24,
            marginTop: 100,
            fontFamily:'Katibeh',
          }}
        >
          Welcome!
        </Text>

        <Text
          style={{
            color: "white",
            marginLeft: 97,
            bottom: 30,
            fontWeight: "bold",
            top: 3,
          }}
        >
          Explore Asia on your plate
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'white'}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            borderWidth: 1,
            top: 20,
            width: 320,
            height: 50,
            padding: 10,
            borderRadius: 50,
            color: "white",
            borderColor: "#ADA1A1",
            marginLeft: 23,
          }}
        ></TextInput>

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
            padding: 10,
            top: 60,
            borderRadius: 50,
            marginLeft: 23,
            color: "white",
            borderColor: "#ADA1A1",
          }}
        />
         <TouchableOpacity style={styles.iconContainer} onPress={toggleShowPassword}>
        <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="white" />
      </TouchableOpacity>
        <TouchableOpacity >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              marginLeft: 190,
              top: 70,
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  onPress={() => signin()} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="large" color="white" alignSelf="center" alignItems='center' />
        ) : (
          <Text style={styles.btn}>SIGN IN</Text>
          )}
        
        </TouchableOpacity>
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            top: 110,
            marginLeft: 80,
          }}
        >
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text style={{color:"white",fontWeight:'600',fontSize:15, marginLeft:242, top:93}}  onPress={()=>navigation.navigate('Register')}>Sign Up</Text>
        </TouchableOpacity>
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
    resizeMode: "cover",
    width: 360,
    height: 580,
    marginTop: 40,
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
    top: 90,
    width: 320,
    height: 50,
    borderRadius: 50,
    marginLeft: 23,
  },
  iconContainer: {
    position: 'absolute',
    marginLeft:300,
    top:510,
  
    
  },
});
export default Login;
