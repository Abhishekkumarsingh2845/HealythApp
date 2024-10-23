import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";

const Main = ({ imageSource, onPressImage }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <View style={styles.main}>
      <Pressable onPress={onPressImage}>
        <ImageBackground source={imageSource} style={styles.image}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              source={require("./../Assets/a1.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            />
            <Text style={{ marginLeft: 5 }}>Nutrition</Text>
            <Image
              source={require("./../Assets/Group 14 (1).png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 75,
              }}
            />
            <Image
              source={require("./../Assets/Group 14 (2).png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 70,
            }}
          >
            <Image
              source={require("./../Assets/Frame (2).png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            />
            <Text style={{ marginLeft: 5, color: "white" }}>20 min Ago</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Best whey protein for</Text>
        <Text style={styles.text}>beginners: 10 top choices....</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textss}>
          The best whey protein for beginners can help
        </Text>
        <Text style={styles.textsss}>
          support your fitness goals. So, check out the
        </Text>
        <Text style={styles.textsss}>
          top-rated options and optimise your workout.
        </Text>

        <Pressable onPress={toggleShowMore}>
          <Text style={styles.textqqq}>
            {showMore ? "Read Less" : "Read More"}
          </Text>
        </Pressable>

        {showMore && (
          <View style={styles.extraContent}>
            <Text style={styles.extraText}>
              Here are some additional details about the best whey protein for
              beginners. It can help with muscle recovery, promote muscle gain,
              and is essential for maintaining a balanced diet. Always consult
              with a nutritionist for personalized advice.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F5FFFD",
    alignItems: "flex-start",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 30,
    marginTop: 10,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  text: {
    fontSize: 19,
    color: "black",
    fontWeight: "600",
    textAlign: "left",
  },
  textqqq: {
    marginTop: 10,
    fontSize: 14,
    color: "#085A46",
    textAlign: "left",
  },
  textss: {
    marginTop: 7,
    fontSize: 14,
    color: "black",
    textAlign: "left",
  },
  textsss: {
    fontSize: 14,
    color: "black",
    textAlign: "left",
  },
  extraContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#E0F7FA",
  },
  extraText: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
  },
});
