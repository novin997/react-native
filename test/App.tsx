import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculator from "./Yugioh/Calculator";

export default function App() {
  const Stack = createStackNavigator();

  function HomeScreen() {
    return (
      <View style={Styles.homescreen}>
        <Text style={Styles.text}>Home Screen</Text>
      </View>
    );
  }

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
