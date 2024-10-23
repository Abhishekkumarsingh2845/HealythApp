import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Search from "../Component/Search";
import Select from "../Component/Select";
import ViewAll from "../Component/Viewall";
import Main from "../Component/Main";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <Pressable style={styles.checkboxContainer} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checked]} />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </Pressable>
  );
};

const Latestscreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  const toggleCheckbox = (index) => {
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = !updatedCheckboxStates[index];
    setCheckboxStates(updatedCheckboxStates);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor:"#FFFFFF",marginTop:10}}>
        <Main imageSource={require("./../Assets/image.png")} />
        <View style={{ marginTop: 20 }}></View>
        <Main imageSource={require("./../Assets/qq.png")} />
        <View style={{ marginTop: 20 }}></View>
        <Main imageSource={require("./../Assets/qqq.png")} />
        <View style={{marginVertical:20}}></View>
      </ScrollView>

      
    </SafeAreaView>
  );
};

export default Latestscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

    backgroundColor: "white",
  },
  subcontainer1: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  img1: {
    width: 80,
    height: 30,
    resizeMode: "contain",
  },
  img2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  con2: {
    alignSelf: "flex-start",
    width: "100%",
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
