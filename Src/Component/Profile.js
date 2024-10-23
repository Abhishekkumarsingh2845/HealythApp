import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Profile = ({ txt, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Image source={require("./../Assets/Group 8993.png")} style={styles.image} />
      <Text style={styles.text}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: "black",
  },
});
