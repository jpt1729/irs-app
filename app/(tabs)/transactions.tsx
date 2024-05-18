import React from "react";
import { StyleSheet, Platform, View, ScrollView } from "react-native";

import { Text, type TextProps } from "react-native";
import StandardView from "@/components/StandardView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomePageNotification from "@/components/home/Notification"

const StatusBar = ({}) => {
  const style = StyleSheet.create({Status:{
    backgroundColor: "#EDEDED",
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 999,
    overflow: "hidden",
  }});
  return (
    <View style={ style.Status }>
      <Text style={[{ color: "#979797" }]}>
        <Text style={[{ color: "#484848", fontWeight: 500 }]}>STATUS</Text>{" "}
        Zombie Bounty Hunter
      </Text>
    </View>
  );
};
const Status = ({}) => {
  const caption = [
    'EVEN THE JOKER IS SCARED OF THE IRS',
    'YOU ARE NOT HUMAN IF YOU ARE NOT PAYING TAXES',
    'THE IRS COLLECTED 4.7 TRILLION DOLLARS IN REVENUE'
  ]
  return (
    <Text style={[{ color: "#9F9F9F", fontSize: 12 }]}>
      {caption[Math.floor(Math.random()*caption.length)]}
    </Text>
  );
};

const updates = [
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.',
    date: new Date(2034, 3, 12),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.',
    date: new Date(2034, 3, 13),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.',
    date: new Date(2034, 3, 14),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.',
    date: new Date(2034, 3, 12),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.',
    date: new Date(2034, 3, 13),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.',
    date: new Date(2034, 3, 14),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.',
    date: new Date(2034, 3, 12),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.',
    date: new Date(2034, 3, 13),
  },
  {
    update: 'Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.',
    date: new Date(2034, 3, 14),
  },
]

export default function HomeScreen() {

  return (
    <>
      <StandardView>
        <ThemedView style={styles.titleContainer}>
          <Status />
          <ThemedText type="title">
            Your <Text style={[{ color: "#F75252" }]}>Transactions</Text>
          </ThemedText>
        </ThemedView>
        <StatusBar />
        <ScrollView style={styles.stepContainer}>
          {updates && updates.map((update, _i) => <HomePageNotification key={_i} {...update}/>)}
        </ScrollView>
      </StandardView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
