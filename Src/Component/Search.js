import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="gray"
        style={styles.input}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
   flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:10,
  },
  input: {
    backgroundColor: "gainsboro",
    paddingVertical: 5,
    paddingLeft: 20,
    borderRadius: 10,
    width: "100%",
  },
});
