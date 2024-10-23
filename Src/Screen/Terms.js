import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Terms = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Image
        source={require("./../Assets/Group 7104 (1).png")}
        style={{ width: 90, height: 70, resizeMode: "contain" }}
      />
      <Text style={{ color: "#9EA0A7" }}>Last update: 05/02/2023</Text>
      <Text style={{ marginTop: 20 }}>
        Please read these privacy policy, carefully before using our app
        operated by us.
      </Text>
      <Text
        style={{
          color: "#085A46",
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Terms of Condition
      </Text>
      <Text style={{ marginTop: 20 }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Text>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({});
