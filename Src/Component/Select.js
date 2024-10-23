import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";

const Select = ({ text, imageSource }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={handlePress}
    >
      {imageSource && (
        <Image
          source={imageSource}
          style={[
            styles.image,
            isSelected && { tintColor: "white" }, 
          ]}
        />
      )}
      <Text style={[styles.text, isSelected && { color: "white" }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  selected: {
    backgroundColor: "#085A46", 
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  text: {
    color: "black",
  },
});
