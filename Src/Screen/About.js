import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Image
        source={require("./../Assets/Group 7104 (1).png")}
        style={{ width: 90, height: 70, resizeMode: "contain" }}
      />
      <Text style={{ color: "#9EA0A7" }}>Last update: 05/02/2023</Text>
      <Text style={{marginTop:20}}>
        Please read these privacy policy, carefully before using our app
        operated by us.
      </Text>
      <Text style={{ color: "#085A46",marginTop:10 }}>About Wholesome</Text>
      <Text style={{marginTop:20}}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. 
      </Text>
      <Text style={{marginTop:20}}>If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.</Text>
        <Text style={{marginTop:20}}>All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. .</Text>
        <Text style={{marginTop:20}}>The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
