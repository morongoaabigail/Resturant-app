

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { db } from "../FirebaseConfig";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Alert , ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Dialog, Portal, Provider } from 'react-native-paper';


const CartList = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);


  const fetchCartItems = async () => {
    try {
      const cartCollection = collection(db, "cart");
      const cartSnapshot = await getDocs(cartCollection);
      const items = cartSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        total: doc.data().quantity * doc.data().price,
      }));

      setCartItems(items);

      const newTotal = items.reduce((acc, item) => acc + item.total, 0);
      setTotal(newTotal);

      const newTotalQuantity = items.reduce(
        (acc, item) => acc += item.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);

      const newGrandTotal = newTotal ;
      setGrandTotal(newGrandTotal);
    } catch (error) {
      console.error("Error fetching cart items: ", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const removeItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, "cart", itemId));
      // After removing the item, refetch cart items
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item from cart: ", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Image source={item.img} style={{ width: 90, height: 90 }} />
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemPrice}>R{item.total}</Text>
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Text style={styles.removeItem}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  const handleCheckout = async () => {
    try {
      setLoading(true);
  
      if (totalQuantity === 0 || grandTotal <= 0) {
        Alert.alert('Invalid', 'Your cart is empty. Add items before checking out.');
        setLoading(false);
        return;
      }
  
      // Simulate order processing
      setTimeout(() => {
        setOrderCompleted(true);
        setLoading(false);
        setVisible(true);
      }, 2000);
    } catch (error) {
      console.error('Error processing order: ', error);
      setLoading(false);
      setVisible(false);
    }
  };
  
  
  
  

  return (
    <Provider>
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 19,
          alignSelf: "center",
          fontWeight: "800",
          marginTop: 40,
        }}
      >
        MY CART ({totalQuantity})
      </Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={26} color="white" marginTop={1} />
      </TouchableOpacity>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.total}>Total: R{total}</Text>
      <Text style={styles.grandTotal}>Total: R{grandTotal}</Text>





      
      <TouchableOpacity
        style={{
          backgroundColor: "#5C5959",
          padding: 14,
          width: 320,
          height: 45,
          borderRadius: 50,
        }}
        onPress={handleCheckout}
        disabled={loading || orderCompleted}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : orderCompleted ? null : (
          <Text
            style={{
              color: "white",
              fontSize: 15,
              alignSelf: "center",
              fontWeight: "800",
            }}
          >
            CHECKOUT
          </Text>
        )}
      </TouchableOpacity>

      <Portal>
      <Dialog visible={visible} onDismiss={hideDialog} style={{backgroundColor:'white'}}>
        <Dialog.Icon icon={()=>(<Ionicons name="ios-checkmark-circle-outline" size={74} color="green" />)} />
        <Dialog.Title style={{color:'green', alignSelf:"center"}}>Successful</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium" style={{color:'white'}}></Text>
        </Dialog.Content>
        
      </Dialog>
    </Portal>
    </View>
    </Provider>
  );
};
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  itemQuantity: {
    fontSize: 16,
    color: "#333",
  },
  itemPrice: {
    fontSize: 15,
    color: "white",
    marginTop:4,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  grandTotal: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom:12,
    color: "white",
    marginLeft:10,
  },
  removeItem: {
    color: "white",
    fontWeight:'800',
    marginLeft:260
  },
});

export default CartList;
