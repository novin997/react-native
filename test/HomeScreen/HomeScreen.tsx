import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const Styles = StyleSheet.create({
    homescreen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "green",
    },
  });

  return (
    <View style={Styles.homescreen}>
      <Text style={Styles.text}>Home Screen</Text>
    </View>
  );
}
