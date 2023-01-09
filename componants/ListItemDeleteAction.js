import React from "react";
import { View, Text, Image, StyleSheet,  TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import colors from "../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ListItemDeleteAction(props) {
  return (


    <View  style={{backgroundColor:colors.danger, with:80, justifyContent:'center', alignContent:'center'  }} >
    <MaterialCommunityIcons   name="trash-can" size={40}  color={colors.white} ></MaterialCommunityIcons >
    
       </View>
       
  );

}