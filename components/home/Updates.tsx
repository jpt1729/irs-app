import React, { useState } from "react";

import {
    StyleSheet,
    ScrollView,
    Pressable,
    Text,
  } from "react-native";

import HomePageNotification from "./Notification";
const updates = [
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.",
      date: new Date(2034, 3, 12),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.",
      date: new Date(2034, 3, 13),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.",
      date: new Date(2034, 3, 14),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.",
      date: new Date(2034, 3, 12),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.",
      date: new Date(2034, 3, 13),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.",
      date: new Date(2034, 3, 14),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.",
      date: new Date(2034, 3, 12),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.",
      date: new Date(2034, 3, 13),
    },
    {
      update:
        "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.",
      date: new Date(2034, 3, 14),
    },
  ];
export default function Updates({}){
    const [opened, setOpened] = useState(false)
    const onPress = ({}) => {
        setOpened(!opened)
    }
    return (
      <ScrollView style={styles.updateContainer}>
        {updates && (opened ? updates.map((update, _i) => <HomePageNotification key={_i} {...update} />) : updates.slice(0, 3).map((update, _i) => <HomePageNotification key={_i} {...update} />))}
        {updates && updates.length > 3 && (
          <Pressable onPress={onPress}>
            <Text style={[{ color: "#8E8E8E", opacity: 0.5 }]}>
              {opened ? `Minimize` : `Tap to read ${updates.length - 3} more updates`}
            </Text>
          </Pressable>
        )}
      </ScrollView>
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
        marginBottom: 8,
        flex: 1,
        flexDirection:"column",
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: "absolute",
    },
  });