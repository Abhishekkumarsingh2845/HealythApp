import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Search from "../Component/Search";
import Select from "../Component/Select";
import ViewAll from "../Component/Viewall";
import Main from "../Component/Main";
import CustomModal from "../Component/modal";

const Explore = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  const toggleCheckbox = (index) => {
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = !updatedCheckboxStates[index];
    setCheckboxStates(updatedCheckboxStates);
  };
  const navv = () => {
    navigation.navigate("Latestscreen");
  };
  const navvvv = () => {
    navigation.navigate("Trending");
  };
  const ww = () => {
    navigation.navigate("Full");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
      <View style={styles.subcontainer1}>
        <Image
          source={require("./../Assets/Group 7104 (1).png")}
          style={styles.img1}
        />
        <Image source={require("./../Assets/bell.png")} style={styles.img2} />
      </View>
      <View style={styles.con2}>
        <Search />
        <TouchableOpacity
          style={{
            backgroundColor: "#085A46",
            borderRadius: 10,
            marginRight: 10,
            alignItems: "center",
          }}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={require("./../Assets/Frame (1).png")}
            style={{
              width: 40,
              height: 30,
              resizeMode: "contain",
              marginTop: 4,
            }}
          />
        </TouchableOpacity>
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
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <ViewAll
            imageSource={require("./../Assets/bbb.png")}
            firstViewText={"Latest News"}
            secondViewText={"View All"}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 15 }}
        >
          <Main
            imageSource={require("./../Assets/image.png")}
            onPressImage={navv}
          />
          <Main
            imageSource={require("./../Assets/image.png")}
            onPressImage={navv}
          />
          <Main
            imageSource={require("./../Assets/image.png")}
            onPressImage={navv}
          />
        </ScrollView>
        <View>
          <ViewAll
            imageSource={require("./../Assets/bbb.png")}
            firstViewText={"Trending Action"}
            secondViewText={"View All"}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 15 }}
        >
          <Main
            imageSource={require("./../Assets/qq.png")}
            onPressImage={navvvv}
          />
          <Main
            imageSource={require("./../Assets/qq.png")}
            onPressImage={navvvv}
          />
          <Main
            imageSource={require("./../Assets/qq.png")}
            onPressImage={navvvv}
          />
        </ScrollView>
        <View>
          <ViewAll
            imageSource={require("./../Assets/bbb.png")}
            firstViewText={"Favourite"}
            secondViewText={"View All"}
            pp={ww}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 15 }}
        >
          <Main imageSource={require("./../Assets/qqq.png")} />
          <Main imageSource={require("./../Assets/qqq.png")} />
          <Main imageSource={require("./../Assets/qqq.png")} />
        </ScrollView>
      </ScrollView>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        checkboxStates={checkboxStates}
        toggleCheckbox={toggleCheckbox}
      />
      <View style={{ marginVertical: 10 }}></View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // marginTop: 10,
    backgroundColor: "#FFFFFF",
  },
  subcontainer1: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: "space-between",
  },
  img1: {
    width: 90,
    height: 40,
    resizeMode: "contain",
  },
  img2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  con2: {
    marginTop: 10,
    flexDirection: "row",
    // paddingHorizontal: 15,
    // backgroundColor:"blue"
  },
  openModalText: {
    color: "#007BFF",
    fontSize: 16,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 450,
    width: "100%",
  },
  modalContent: {
    flexDirection: "row",
    height: "80%",
  },
  leftSection: {
    flex: 0.3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  rightSection: {
    flex: 0.7,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 0.3,
    backgroundColor: "#ccc",
  },
  button: {
    width: "80%",
    padding: 10,
    backgroundColor: "#085A46",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  applyButton: {
    flex: 0.5,
    padding: 10,
    backgroundColor: "#085A46",
    borderRadius: 5,
    alignItems: "center",
  },
  filterButton: {
    flex: 0.5,
    padding: 10,
    marginLeft: 15,
    backgroundColor: "#085A46",
    borderRadius: 5,
    alignItems: "center",
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#085A46",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#085A46",
  },
});

// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import React, { useState } from "react";

// const Explore = () => {
//   const [isPressed, setIsPressed] = useState(false);

//   const handlePress = () => {
//     setIsPressed(!isPressed);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[
//           styles.subcontainer,
//           { backgroundColor: isPressed ? "lightgreen" : "white" },
//         ]}
//         onPress={handlePress}
//       >
//         <Text style={{ color: isPressed ? "black" : "blue" }}>PRESS ME</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Explore;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   subcontainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
