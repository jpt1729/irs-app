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
        <Text style={[{ color: "#484848", fontWeight: 500 }]}>-3,400,347 bottlecaps</Text>{" "}
      </Text>
    </View>
  );
};
const Status = ({}) => {
  const caption = [
    "EVEN THE JOKER IS SCARED OF THE IRS",
    "YOU ARE NOT HUMAN IF YOU ARE NOT PAYING TAXES",
    "THE IRS COLLECTED 4.7 TRILLION DOLLARS IN REVENUE",
    "THE ONLY THINGS CERTAIN IN LIFE ARE DEATH AND TAXES",
  ];
  return (
    <Text style={[{ color: "#9F9F9F", fontSize: 12 }]}>
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
            Paying Your <Text style={[{ color: "#F75252" }]}>Outstanding Balance</Text>
          </ThemedText>
        </ThemedView>
        <StatusBar />
        
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
