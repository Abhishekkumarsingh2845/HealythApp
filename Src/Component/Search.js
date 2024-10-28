import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Search = ({ ck }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subcontainer} onPress={handlePress}>
        <Text style={[styles.tq, { fontSize:12 }]}>PRESS ME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  tq: {
    fontSize: 12,
  },
});
