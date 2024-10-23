import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("BottomTab");
    }, 5000);
  }, []);
  return (
    <View style={styles.bg}>
      <Image
        source={require("./../Assets/Group 7104.png")}
        style={styles.img1}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#085A46",
  },
  img1: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
});
