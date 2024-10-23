import React from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

const Checkbox = ({ label, checked, onChange }) => (
  <Pressable style={styles.checkboxContainer} onPress={onChange}>
    <View style={[styles.checkbox, checked && styles.checked]} />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </Pressable>
);

const CustomModal = ({ visible, onClose, checkboxStates, toggleCheckbox }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalView} onTouchEnd={(e) => e.stopPropagation()}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>Filter(3)</Text>
            <Text>Clear All</Text>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  backgroundColor: "#085A46",
                  padding: 8,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "600" }}>
                  Categories
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#085A46",
                  padding: 8,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white", fontWeight: "600" }}>Sort</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#085A46",
                  padding: 8,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white", fontWeight: "600" }}>Dates</Text>
              </View>
            </View>
            <View
              style={{
                height: 330,
                width: 1,
                backgroundColor: "#EDF1F3",
                marginLeft: 15,
              }}
            ></View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Sort By</Text>
              <Text style={{ marginTop: 5 }}>
                Select the sorting which you want {"\n"}to see
              </Text>
              <TextInput
                placeholder="Serch By Interset"
                style={{
                  borderWidth: 0.2,
                  backgroundColor: "white",
                  borderRadius: 5,
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}
              />
              <View style={{ marginTop: 15, flexDirection: "row" }}>
                <View
                  style={{
                    width: 20,
                    height: 20,

                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Select All(200)
                </Text>
              </View>
              <View
                style={{
                  marginTop: 15,
                  height: 1,
                  width: 190,
                  backgroundColor: "#EDF1F3",
                }}
              ></View>
              <View style={{ flexDirection: "row", marginTop: 22 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,

                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Select All(200)
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 22 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,

                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Select All(200)
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 22 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,

                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Select All(200)
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 22 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,

                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Select All(200)
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop:20,
            }}
          >
            <View
              style={{
                backgroundColor: "#085A46",
                borderRadius: 10,
                paddingHorizontal: 45,
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "white" }}>Apply</Text>
            </View>
            <View
              style={{
                backgroundColor: "#085A46",
                borderRadius: 10,
                padding: 5,
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 45,
              }}
            >
              <Text style={{ color: "white" }}>Filter</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFFFF",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 450,
    width: "100%",
  },
  modalContent: {
    flexDirection: "row",
    height: "90%",
  },
  leftSection: {
    flex: 0.3,
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