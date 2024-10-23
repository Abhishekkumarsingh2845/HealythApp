import React, { useState } from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

const CustomModal = ({ visible, onClose }) => {
  const [activeSection, setActiveSection] = useState("Categories");

  const renderContent = () => {
    switch (activeSection) {
      case "Categories":
        return (
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Catergories</Text>
            <Text style={{ marginTop: 5 }}>
              Select the Catergories which you want to see
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
                Education
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
                Health New
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
              <Text style={{ marginLeft: 10, fontWeight: "600" }}>Sports</Text>
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
              <Text style={{ marginLeft: 10, fontWeight: "600" }}>Mission</Text>
            </View>
          </View>
        );
      case "Sort":
        return (
          <View>
            <Text style={styles.sectionTitle}>Date Wise</Text>
            <Text style={{ marginTop: 5 }}>
              Select the Date which you want to see
            </Text>
           
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>Latest</Text>
             
            </View>
            {/* <View style={styles.divider} /> */}
          </View>
        );
      case "Dates":
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalView} onTouchEnd={(e) => e.stopPropagation()}>
          <View style={styles.header}>
            <Text>Filter (3)</Text>
            <Text>Clear All</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sidebar}>
              {["Categories", "Sort", "Dates"].map((section) => (
                <Pressable
                  key={section}
                  style={[
                    styles.sidebarButton,
                    activeSection === section && styles.activeButton,
                  ]}
                  onPress={() => setActiveSection(section)}
                >
                  <Text style={styles.sidebarText}>{section}</Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.mainContent}>{renderContent()}</View>
          </View>

          <View style={styles.footer}>
            <Pressable style={styles.actionButton1}>
              <Text style={styles.buttonText1}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Text style={styles.buttonText}>Apply</Text>
            </Pressable>
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
    backgroundColor: "#FFFFFF99",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  contentContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  sidebar: {
    marginRight: 15,
  },
  sidebarButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
    borderWidth:1,
    alignItems: "center",
    marginBottom: 10,
  },
  activeButton: {
    backgroundColor: "#053726",
  },
  sidebarText: {
    color: "white",
    fontWeight: "600",
  },
  verticalDivider: {
    height: 330,
    width: 1,
    backgroundColor: "#EDF1F3",
  },
  mainContent: {
    flex: 1,
    paddingLeft: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 0.2,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  checkbox: {
    flexDirection: "row",
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderRadius: 15,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#EDF1F3",
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: "#085A46",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  actionButton1: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  buttonText: {
    color: "white",
  },
  buttonText1: {
    color: "black",
  },
});
