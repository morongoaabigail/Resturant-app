import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Checkout = ({ navigation, route }) => {
  const { status } = route.params;
  const [loading, setLoading] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleCheckout = async () => {
    try {
      // Simulate loading for 2 seconds (you can replace this with your actual logic)
      setLoading(true);
      setTimeout(() => {
        // Assume the order is successfully processed
        setOrderCompleted(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error processing order: ", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Order Summary:</Text>
        {/* Display any additional order summary information here */}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount:</Text>
        {/* Display the total amount here */}
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
        disabled={loading || orderCompleted} // Disable button during loading or after order completion
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : orderCompleted ? (
          <AntDesign name="check" size={24} color="white" />
        ) : (
          <Text style={styles.checkoutButtonText}>COMPLETE ORDER</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  summary: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  summaryText: {
    color: "white",
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  totalText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#5C5959",
    padding: 14,
    width: 320,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "800",
  },
});

export default Checkout;
