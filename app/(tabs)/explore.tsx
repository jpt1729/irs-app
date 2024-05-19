import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StandardView from "@/components/StandardView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const StatusBar = () => {
  return (
    <View style={styles.status}>
      <Text style={styles.statusText}>
        <Text style={{ color: "#484848", fontWeight: "500" }}></Text> IRS of the Apocalyptic States of Survival
      </Text>
    </View>
  );
};

const Status = () => {
  const captions = [
    "EVEN THE JOKER IS SCARED OF THE IRS",
    "YOU ARE NOT HUMAN IF YOU ARE NOT PAYING TAXES",
    "THE IRS COLLECTED 4.7 TRILLION DOLLARS IN REVENUE",
    "THE ONLY THINGS CERTAIN IN LIFE ARE DEATH AND TAXES",
  ];

  return (
    <Text style={styles.statusCaption}>
      {captions[Math.floor(Math.random() * captions.length)]}
    </Text>
  );
};

const FunnyInfo = () => {
  const infoItems = [
    {
      title: "Zombie Audits",
      description: "Our AI Zombie CPA Bots will audit your brains and your finances to ensure they're up to post-apocalyptic standards.",
    },
    {
      title: "Cryptocurrency Survival Tips",
      description: "Learn how to trade bottlecaps for bitcoins in our exclusive guide to surviving the apocalypse economy.",
    },
    {
      title: "Tax Deductions for Survivors",
      description: "Did you know you can deduct your survival bunker expenses? Just don't forget to keep those receipts safe from the undead.",
    },
  ];

  return (
    <View style={styles.infoContainer}>
      {infoItems.map((item, index) => (
        <View key={index} style={styles.infoItem}>
          <Text style={styles.infoTitle}>{item.title}</Text>
          <Text style={styles.infoDescription}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <StandardView>
      <ThemedView style={styles.titleContainer}>
        <Status />
        <ThemedText type="title">
          Explore <Text style={{ color: "#F75252" }}>The IRS</Text>
        </ThemedText>
      </ThemedView>
      <StatusBar />
      <FunnyInfo />
    </StandardView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  status: {
    backgroundColor: "#EDEDED",
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 8,
  },
  statusText: {
    color: "#979797",
  },
  statusCaption: {
    color: "#9F9F9F",
    fontSize: 12,
  },
  infoContainer: {
    justifyContent: "space-between",
    marginTop: 20,
  },
  infoItem: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  infoDescription: {
    marginTop: 3,
    fontSize: 14,
    color: "#666666",
  },
});

export default HomeScreen;
