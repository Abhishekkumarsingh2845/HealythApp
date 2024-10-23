import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,Pressable
} from "react-native";
import React from "react";
import imageSource from "./../Assets/qqq.png";
import Main from "../Component/Main";

const Full = () => {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20, alignItems: "center" }}>
        <ImageBackground source={imageSource} style={styles.image}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 110,
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
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <Image
            source={require("./../Assets/a1.png")}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              marginRight: 70,
            }}
          />
          <Text style={{  marginRight: 70,fontWeight:"700",fontSize:13}}>Nutrition</Text>
          <Image
            source={require("./../Assets/like.png")}
            style={{ width: 30, height: 30, resizeMode: "contain",  marginRight: 10, }}
          />
          <Text style={{fontWeight:"700",fontSize:12}}>2</Text>
        </View>
        <View>
          <Text style={{ marginTop: 20 }}>
            Can this fish exercise reshape your waist? Fitness expert shares his
            two cents
          </Text>
          <Text style={{ marginTop: 20 }}>
            Attention, fitness and yoga enthusiasts! There’s an exciting new
            exercise that promises to accelerate your weight loss journey,
            strengthen your joints, and improve your gut health. Intrigued? So
            were we.
          </Text>
          <Text style={{ marginTop: 20 }}>
            According to therapeutic exercise and Qigong expert Bama Kim, this
            “fish exercise” or the fish pose helps improve intestinal health,
            spine alignment, and offers joint relief. Kim claims that this
            exercise not only supports weight loss but also helps reshape your
            waistline.
          </Text>
          <Text style={{ marginTop: 20 }}>
            Indianexpress.com spoke to Dr Dharmesh Shah, fitness expert, founder
            and director of Holistica World, Surat, to understand whether this
            exercise truly does what it is being claimed. “Yes, the fish
            exercise does offer benefits, but since it doesn’t involve heavy
            weights, its impact on the waistline might be limited,” he said.
          </Text>
          <Text style={{ marginTop: 20 }}>
            Allow the crown of your head to lightly touch the floor, but ensure
            that most of your weight is supported by your forearms rather than
            your head. Keep your legs straight and together, with your feet
            pointing outward Attention, fitness and yoga enthusiasts! There’s an
            exciting new exercise that promises to accelerate your weight loss
            journey, strengthen your joints, and improve your gut health.
          </Text>
        </View>
        <View style={styles.main}>
      
        {/* <ImageBackground source={imageSource} style={styles.image}>
         <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
          <Image source={require("./../Assets/a1.png")} style={{width:30,height:30,resizeMode:"contain",marginLeft:5}}/>
          <Text style={{marginLeft:5}}>Nutrition</Text>
          <Image source={require("./../Assets/Group 14 (1).png")} style={{width:30,height:30,resizeMode:"contain",marginLeft:75}}/>
          <Image source={require("./../Assets/Group 14 (2).png")} style={{width:30,height:30,resizeMode:"contain",marginLeft:15}}/>
         </View>
         <View style={{flexDirection:"row",alignItems:"center",marginTop:70}}>
          <Image source={require("./../Assets/Frame (2).png")} style={{width:30,height:30,resizeMode:"contain",marginLeft:5}}/>
          <Text style={{marginLeft:5,color:"white"}}>20 min Ago</Text>
          
         </View>
        </ImageBackground> */}
      
      {/* <View style={styles.textContainer}>
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
       

      
      </View> */}
      <View style={{marginTop:10}}></View>
    </View>
      </View>
    </ScrollView>
  );
};

export default Full;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 30,
    // marginTop: 10,
    resizeMode: "contain",
  },
  main: {
    backgroundColor: "#F5FFFD",
    alignItems: "flex-start",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius:10,
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
    borderRadius:30,
    marginTop:10,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "flex-start",
    marginTop:10,
  },
  text: {
    fontSize: 19,
    color: "black",
    fontWeight:"600",
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
    fontWeight:"600",
  },
});
