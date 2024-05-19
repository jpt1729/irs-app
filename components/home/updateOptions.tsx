import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, Linking, StyleSheet, View } from "react-native";

const YourComponent = () => {
  const handlePress = () => {
    // Replace with the URL or path to the page you want to link to
    Linking.openURL("https://yourapp.com/update-life-status");
  };

  return (
    <View style={styles.updateContainer}>
      <Text>
        We detected your <Text style={{color: '#F75252'}} onPress={handlePress}>RECENT ENCOUNTER</Text> with the undead. Did you mean to update your life status?
      </Text>
      <View style={styles.dropdown}>
        <Text>Your Outstanding Balance</Text>
        <Text style={{color: '#F75252', fontWeight: '700'}}>$3,000,209</Text>
      </View>
    </View>
  );
};

export default YourComponent;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  updateContainer: {
    gap: 8,
    flexDirection: "column",
    marginBottom: 8,
    flex: 1,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FCF8FF",
    padding: 12,
    borderColor: '#000000',
    borderRadius: 16,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 2,
    elevation: 2, 
    color: "#FCF8FF",
  }
});
