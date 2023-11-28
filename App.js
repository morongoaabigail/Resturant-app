import { View, Text } from "react-native";
// import { Card } from 'react-native-paper';
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Menu from "./Components/Menu";
import Cocktails from "./Components/Cocktails";
import Home from "./Components/Home";
import About from "./Components/About";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Food from "./Components/Food";
export default function App() {
  const [fontsLoaded, setfont] = useState(null);

  let customFont = {
    Katibeh: require("./assets/fonts/Katibeh.ttf"),
  };
  async function loadFontAsync() {
    await Font.loadAsync(customFont);
    setfont(true);
  }
  useEffect(() => {
    loadFontAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
<Stack.Screen
name="Login"
component={Login}
options={{headerShown: false}}
/>
<Stack.Screen
name="Register"
component={Register}
options={{headerShown: false}}
/>
<Stack.Screen
name="Home"
component={Home}
options={{headerShown: false}}
/>
<Stack.Screen
name="Menu"
component={Menu}
options={{headerShown: false}}
/>
<Stack.Screen
name="Cocktails"
component={Cocktails}
options={{headerShown: false}}
/>
<Stack.Screen
name="Food"
component={Food}
options={{headerShown: false}}
/>
<Stack.Screen
name="About"
component={About}
options={{headerShown: false}}
/>
<Stack.Screen
name="Cart"
component={Cart}
options={{headerShown: false}}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
