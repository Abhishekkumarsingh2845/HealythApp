import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Splash from "./Src/Screen/Splash";
import Home from "./Src/Screen/Home";
import Latestscreen from "./Src/Screen/Latestscreen";
import Trending from "./Src/Screen/Trending";
import About from "./Src/Screen/About";
import Terms from "./Src/Screen/Terms";
import Privacy from "./Src/Screen/Privacy";
import Full from "./Src/Screen/Full";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./Src/Screen/BottomTab";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Latestscreen" component={Latestscreen} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Full" component={Full} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
