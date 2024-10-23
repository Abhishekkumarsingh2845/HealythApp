import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Search from "../Component/Search";
import Select from "../Component/Select";
import ViewAll from "../Component/Viewall";
import Main from "../Component/Main";

const Favourite = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={"#FFFFFF"} hidden={false}/> */}

      <View style={styles.ww}>
        <Image
          source={require("./../Assets/love-always-wins.png")}
          style={styles.immm}
        />
        <Text style={styles.tttt}>Favourite</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", paddingVertical: 15 }}
      >
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Select text={"All"} />
          <Select
            text={"Nutrition"}
            imageSource={require("./../Assets/Mask group.png")}
          />
          <Select
            text={"Fitness"}
            imageSource={require("./../Assets/Mask group.png")}
          />
          <Select
            text={"Mental"}
            imageSource={require("./../Assets/Mask group.png")}
          />
          <Select
            text={"Mental"}
            imageSource={require("./../Assets/Mask group.png")}
          />
          <Select
            text={"Mental"}
            imageSource={require("./../Assets/Mask group.png")}
          />
        </View>
      </ScrollView>
      <View>
       
      </View>
      <ScrollView>
      <View style={{marginVertical:10}}>
         
          
         </View>
        <Main imageSource={require("./../Assets/qqq.png")} />
        <View style={{marginTop:20}}>
         
        </View>
        <Main imageSource={require("./../Assets/image.png")} />
        <View style={{marginVertical:10}}>
         
          
        </View>
        <Main imageSource={require("./../Assets/qq.png")} />
        <View style={{marginVertical:10}}>
         
          
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems:"flex-start",

    backgroundColor: "#FFFFFF",
  },
  subcontainer1: {
    flexDirection: "row",
    alignItems: "center",
    // width: "100%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  img1: {
    width: 80,
    height: 30,
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  img2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    //    backgroundColor: "red",
  },
  con2: {
    alignSelf: "flex-start",
    width: "100%",
  },
  ww: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 100,
  },
  immm: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  tttt: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
  },
});
