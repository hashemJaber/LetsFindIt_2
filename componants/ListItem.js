import React from "react";
import { View, Text, Image, StyleSheet,  TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import colors from "../colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "../componants/Icon";

/**
 * @typedef {object} profile
 * @property {String} title
 * @property {String} subTitle
 * @property {(String|Image| URL)} media
 */

/**
 * 
 * @param {profile} param
 */
 export default function ListItem({ action,  title, subTitle, image, renderRightActions, ImageComponent:IconComponent, imageStyle={
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight:1
  }, navigation }) {
  
  return (


<Swipeable  renderRightActions={renderRightActions} >
    <TouchableOpacity onPress={()=>{ action ? action() : ()=>{} }} >
    <View style={styles.container}>

 {/** , alignItems:'center', justifyContent: 'center' */}
    {    IconComponent  || image && <Image style={styles.image} source={image} />}
      <View style={{marginLeft:12, justifyContent: subTitle ? 'default' :'center'  }}  >
        <Text  numberOfLines={1} style={styles.title}>{title}</Text>
       { subTitle && <Text numberOfLines={2}  style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
    </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight:1
  },
  subTitle: {
    marginTop:12,
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
  
});