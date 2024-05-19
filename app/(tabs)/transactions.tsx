import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { Text } from "react-native";
import StandardView from "@/components/StandardView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomePageNotification from "@/components/home/Notification";

const StatusBar = () => {
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
      <Text style={[{ color: "#979797", fontSize: 14}]}>From the past 30 days</Text>
    </View>
  );
};

const Status = () => {
  const caption = [
    "EVEN THE JOKER IS SCARED OF THE IRS",
    "YOU ARE NOT HUMAN IF YOU ARE NOT PAYING TAXES",
    "THE IRS COLLECTED 4.7 TRILLION DOLLARS IN REVENUE",
    "THE ONLY THINGS CERTAIN IN LIFE ARE DEATH AND TAXES",
  ];
  return (
    <Text style={[{ color: "#9F9F9F", fontSize: 14 }]}>
      {caption[Math.floor(Math.random() * caption.length)]}
    </Text>
  );
};

const CreditCard = () => {
  const name = "Zachary Latta";
  const pin = "3287";

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
      letterSpacing: 0.5,
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

const Options = () => {
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

const Data = [
  {
    title: "From Alex Nguyen",
    amount: 100.59,
    timeStamp: "May 18, 2024 at 5:00 PM",
  },
  {
    title: "Payment to IRS",
    amount: - 170.99,
    timeStamp: "May 14, 2024 at 3:25 PM",
  },
  {
    title: "From Zoya Hussain",
    amount: 97.99,
    timeStamp: "April 12, 2024 at 2:00 AM",
  },
  {
    title: "Payment to IRS",
    amount: - 44.99,
    timeStamp: "May 18, 2024 at 6:00 AM",
  },
];

export default function HomeScreen() {
  return (
    <>
      <StandardView >
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
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemAmount}>{item.amount}</Text>
                </View>
                <Text style={styles.itemTimeStamp}>{item.timeStamp}</Text>
              </View>
            );
          }}
/>
      </StandardView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF8FF",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 8,
        color: "#FCF8FF",
  },
  stepContainer: {
    gap: 12,
    marginBottom: 8,
    color: "#FCF8FF"
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
    height: 75,
    borderRadius: 12,
    marginBottom: 15,
    marginLeft: 5,
    backgroundColor: '#FFF',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 2,
    elevation: 2, 
    color: "#FCF8FF",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    color: "#FCF8FF"
  },
  itemTitle: {
    fontSize: 20,
    color: "#111",
    fontWeight: "bold",
  },
  itemAmount: {
    fontSize: 16,
    color: "#111",
    marginRight: 80,
  },
  itemTimeStamp: {
    fontSize: 13,
    color: "gray",
    marginTop: 5,
  },
});
