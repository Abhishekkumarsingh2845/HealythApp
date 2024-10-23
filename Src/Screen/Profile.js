import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Profilecom from '../Component/Profile'

const Profile = ({navigation}) => {

  const aa=()=>
  {
 navigation.navigate("About")
  }
  const aaa=()=>
    {
   navigation.navigate("Privacy")
    }
    const aaaa=()=>
      {
     navigation.navigate("Terms")
      }
  return (
    <View style={{flex:1,justifyContent:"flex-start",alignItems:"center",marginTop:20}}>
     <Image source={require("./../Assets/Group 7104 (1).png")} style={{width:90,height:40,resizeMode:"contain"}}/>
     <Profilecom txt={"Push Notifications"}/>
     <Profilecom txt={"About Us"} onPress={aa} />
     <Profilecom txt={"Privacy Policy"}
     onPress={aaa}/>
     <Profilecom txt={"Term & Conditions"}
     onPress={aaaa} />
     
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})