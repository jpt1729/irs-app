import {
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Pressable,
} from "react-native";

import { Text, type TextProps } from "react-native";
import StandardView from "@/components/StandardView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Updates from "@/components/home/Updates";
import UpdateOptions from "@/components/home/updateOptions";

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
      <Text style={[{ color: "#979797" }]}>
        <Text style={[{ color: "#484848", fontWeight: 500 }]}>STATUS</Text>{" "}
        Zombie Bounty Hunter
      </Text>
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
    <Text style={[{ color: "#9F9F9F"}]}>
      {caption[Math.floor(Math.random() * caption.length)]}
    </Text>
  );
};
export default function HomeScreen() {
  return (
    <>
      <StandardView>
        <ThemedView style={styles.titleContainer}>
          <Status />
          <ThemedText type="title">
            Welcome to <Text style={[{ color: "#F75252"}]}>ApocaLedger</Text>
          </ThemedText>
        </ThemedView>
        <StatusBar />

        <Updates/>
        <UpdateOptions/>
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
