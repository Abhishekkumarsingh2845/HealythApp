import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const ViewAll = ({ imageSource, firstViewText, secondViewText,pp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <Text style={styles.text}>{firstViewText}</Text>
      </View>

      <TouchableOpacity style={styles.secondView} onPress={pp}>
        <Text style={styles.text1}>{secondViewText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius:15,
  },
  firstView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  secondView: {
    justifyContent: "center",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "700",
  },
  text1: {
    fontSize: 14,
    color: "#085A46",
  },
});
