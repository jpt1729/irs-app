import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
    StyleSheet,
    ScrollView,
    Pressable,
    View,
    Text,
  } from "react-native";
export default function UpdateOptions({}){
    const [opened, setOpened] = useState([false, false])
    const onPress = ({}) => {
        
    }
    return (
      <View style={styles.updateContainer}>
        <Text>We detected your <Text style={[{color:'#F75252'}]}>RECENT ENCOUNTER</Text> with the undead. Did you mean to update your life status?</Text>
          <View style = {styles.dropdown}>
            <Text>Your Outstanding Balance</Text><Text>$3,209</Text>
          </View>
          <View style = {styles.dropdown}>
            <Text>Update your life status</Text>
          </View>
      </View>
    );
  };

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
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderColor: '#000000',
      borderRadius: 16,
      borderWidth: 1,
      marginTop: 8
    }
  });