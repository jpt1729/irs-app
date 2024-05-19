import React from "react";
import {
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Text, type TextProps } from "react-native";
import StandardView from "@/components/StandardView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
<<<<<<< HEAD
import HomePageNotification from "@/components/home/Notification";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
// import { FlatList } from "react-native-gesture-handler";
=======
import HomePageNotification from "@/components/home/Notification"
import { configureLayoutAnimationBatch } from "react-native-reanimated/lib/typescript/reanimated2/core";
>>>>>>> 57b77c54f5a25b7d078ed3963088b8ac5c3a56a4

const StatusBar = ({}) => {
  const style = StyleSheet.create({
    Status: {
      backgroundColor: "#EDEDED",
      alignSelf: "flex-start",
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      borderRadius: 999,
      overflow: "hidden",
    },
  });
  return (
    <View style={style.Status}>
      <Text style={[{ color: "#979797" }]}>From the past 30 days</Text>
    </View>
  );
};

const Status = ({}) => {
  const caption = [
    "EVEN THE JOKER IS SCARED OF THE IRS",
    "YOU ARE NOT HUMAN IF YOU ARE NOT PAYING TAXES",
    "THE IRS COLLECTED 4.7 TRILLION DOLLARS IN REVENUE",
  ];
  return (
<<<<<<< HEAD
    <Text style={[{ color: "#9F9F9F", fontSize: 12 }]}>
      {caption[Math.floor(Math.random() * caption.length)]}
=======
    <Text style={[{ color: "#9F9F9F", fontSize: 14 }]}>
      {caption[Math.floor(Math.random()*caption.length)]}
>>>>>>> 57b77c54f5a25b7d078ed3963088b8ac5c3a56a4
    </Text>
  );
};

const CreditCard = ({}) => {
  const name = "John Tan-Aristy";
  const pin = "1234";

  const style = StyleSheet.create({
    cardStyle: {
      backgroundColor: "#FF6262",
      width: 350,
      alignSelf: "flex-start",
      height: 200,
      paddingLeft: 12,
      paddingRight: 16,
      paddingTop: 6,
      marginTop: 20,
      paddingBottom: 20,
      borderRadius: 10,
      // overflow: "hidden",
    },
    visaStyle: {
      height: 70,
      width: 70,
      alignSelf: "flex-end",
      marginTop: 130,
    },
    chipStyle: {
      height: 50,
      width: 50,
      marginLeft: 12,
      marginTop: 8,
      position: "absolute",
      tintColor: "#fff",
    },
    cardNumberStyle: {
      color: "#FFF",
      fontFamily: "PhantomSans",
      fontSize: 20,
      letterSpacing: 4,
      position: "absolute",
      marginTop: 100,
      marginLeft: 20,
    },
    cardNameStyle: {
      color: "#FFF",
      fontFamily: "PhantomSans",
      fontSize: 15,
      letterSpacing: 1,
      position: "absolute",
      marginTop: 155,
      marginLeft: 20,
    },
    optionsStyle: {
      justifyContent: "space-between",
    },
  });

  return (
    <View style={style.cardStyle}>
      <Text style={style.cardNumberStyle}>**** **** **** {pin}</Text>
      <Image
        style={style.visaStyle}
        source={{
          uri: "https://cdn.freebiesupply.com/logos/large/2x/visa-logo-black-and-white.png",
        }}
      />
      <Image
        style={style.chipStyle}
        source={{
          uri: "https://static.thenounproject.com/png/2809831-200.png",
        }}
      />
      <Text style={style.cardNameStyle}>{name}</Text>
    </View>
  );
};

const Options = ({}) => {
  const style = StyleSheet.create({
    optionsStyle: {
      marginTop: 20,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    optionStyle: {
      flexDirection: "row",
    },
    iconStyle: {
      height: 20,
      width: 20,
      marginRight: 6,
    },
    textStyle: {
      color: `rgba(51, 51, 51, 0.4)`,
      fontFamily: "PhantomSans",
      fontSize: 20,
    },
  });

  return (
    <View style={style.optionsStyle}>
      <View style={style.optionStyle}>
        <Image
          style={style.iconStyle}
          source={{
            uri: "https://cdn-icons-png.freepik.com/256/10515/10515819.png?semt=ais_hybrid",
          }}
        ></Image>
        <Text style={style.textStyle}>Filter</Text>
      </View>
      <View style={style.optionStyle}>
        <Image
          style={style.iconStyle}
          source={{
            uri: "https://static-00.iconduck.com/assets.00/magnifying-glass-icon-512x512-ziw2x4zm.png",
          }}
        ></Image>
        <Text style={style.textStyle}>Search</Text>
      </View>
    </View>
  );
};

const Transactions = ({}) => {
  const style = StyleSheet.create({
    transactionsContainer: {},
    transaction: {
      width: 350,
    },
  });

  return <View style={style.transactionsContainer}></View>;
};

// const updates = [
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.",
//     date: new Date(2034, 3, 12),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.",
//     date: new Date(2034, 3, 13),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.",
//     date: new Date(2034, 3, 14),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.",
//     date: new Date(2034, 3, 12),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.",
//     date: new Date(2034, 3, 13),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.",
//     date: new Date(2034, 3, 14),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 to receive your cerebral rebate. Don’t make us come looking for you.",
//     date: new Date(2034, 3, 12),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 immediately or you might spy some very persistent government drones.",
//     date: new Date(2034, 3, 13),
//   },
//   {
//     update:
//       "Your paperwork from the 2033-2034 tax season is due. Fill out your 1040 now, or prepare for a surprise visit from our Tax Enforcement Zombies. You won’t like it.",
//     date: new Date(2034, 3, 14),
//   },
// ];

const Data = [
  {
    title: "From Alex Nguyen",
    amount: 100.59,
    timeStamp: "May 18, 2024 at 5:00 PM",
  },
  {
    title: "Payment to IRS",
    amount: -170.99,
    timeStamp: "May 14, 2024 at 3:25 PM",
  },
  {
    title: "From Zoya Hussain",
    amount: 97.99,
    timeStamp: "April 12, 2024 at 2:00 AM",
  },
  {
    title: "Payment to IRS",
    amount: -44.99,
    timeStamp: "May 18, 2024 at 6:00 AM",
  },
];

// type ItemProps = { title: string; amount: Float; timeStamp: string };

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
        <CreditCard />
        <Options />
        <FlatList
          data={Data}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemAmount}>{item.amount}</Text>
                <Text style={styles.item}>{item.timeStamp}</Text>
              </View>
            );
          }}
        />
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
    gap: 12,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  item: {
    width: 350,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#f9c2ff",
  },
  itemTitle: {
    fontSize: 12,
    color: "#111",
  },
  itemAmount: {
    fontSize: 12,
    color: "#111",
  },
  itemTimeStamp: {
    fontSize: 12,
    color: "#111",
  },
});
