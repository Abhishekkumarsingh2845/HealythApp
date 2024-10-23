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

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={"#FFFFFF"} hidden={false}/> */}
      <View style={styles.subcontainer1}>
        <Image
          source={require("./../Assets/Group 7104 (1).png")}
          style={styles.img1}
        />
        <Image source={require("./../Assets/bell.png")} style={styles.img2} />
      </View>
      <View style={styles.con2}>
        <Search />
        
      </View>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Select text={"All"} />
        <Select
          text={"Nutrition"}
          imageSource={require("./../Assets/Mask group.png")}
        />
        <Select
          text={"Nutrition"}
          imageSource={require("./../Assets/Mask group.png")}
        />
        <Select
          text={"Nutrition"}
          imageSource={require("./../Assets/Mask group.png")}
        />
      </View>
      <View>
        <ViewAll
          imageSource={require("./../Assets/1zIGDP9sBT.png")}
          firstViewText={"Latest News"}
          secondViewText={"View All"}
        />
      </View>
<ScrollView>
<Main />
      <View>
        <ViewAll
          imageSource={require("./../Assets/1zIGDP9sBT.png")}
          firstViewText={"Latest News"}
          secondViewText={"View All"}
        />
      </View>
      <Main />
      <View>
        <ViewAll
          imageSource={require("./../Assets/1zIGDP9sBT.png")}
          firstViewText={"Latest News"}
          secondViewText={"View All"}
        />
      </View>
      <Main />
</ScrollView>
      
     
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems:"flex-start",
    marginTop: 30,
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
});
