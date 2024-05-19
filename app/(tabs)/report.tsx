// @ts-ignore

import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from "react-native";
import StandardView from "@/components/StandardView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useForm, Controller } from 'react-hook-form';
import { Audio } from 'expo-av';

const Status = () => {
  const captions = [
    "EVEN THE JOKER IS SCARED OF THE IRS",
    "YOU ARE NOT HUMAN IF YOU ARE NOT PAYING TAXES",
    "THE IRS COLLECTED 4.7 TRILLION DOLLARS IN REVENUE",
  ];

  return (
    <Text style={styles.statusCaption}>
      {captions[Math.floor(Math.random() * captions.length)]}
    </Text>
  );
};

const TaxEvasionForm = () => {
  const { control, handleSubmit } = useForm();

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./song.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onSubmit = data => {
    console.log(data);
    // Handle the form data
    alert(`You have reported ${data.friendName} for tax evasion. The IRS thanks you for your contribution!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Friend's Name</Text>
        <Controller
          control={control}
          name="friendName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Why do you suspect them?</Text>
        <Controller
          control={control}
          name="reason"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Any additional evidence?</Text>
        <Controller
          control={control}
          name="evidence"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      <Button title="Submit Report" onPress={playSound} />
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return (
    <StandardView>
      <ThemedView style={styles.titleContainer}>
        <Status />
        <ThemedText type="title">
          Report Your <Text style={{ color: "#F75252" }}>Friends!</Text>
        </ThemedText>
      </ThemedView>
      <TaxEvasionForm />
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
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});

export default HomeScreen;
