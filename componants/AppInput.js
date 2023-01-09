import { StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native'
import React, { cloneElement } from 'react'
import Icon from './Icon';
import colors from '../colors';


export default function AppInput({numberOfLines=1,width="90%",iconName, placeholder="Email",...otherProps}) {


    const [firstName,setFirstName]=React.useState('');

  return (
   


<View   style={{ flexDirection:'row',  borderRadius:16, backgroundColor:colors.light, width:width, alignItems:'center'}} >

   { iconName && <Icon name={iconName} backgroundColor={colors.light} iconColor={colors.medium} ></Icon>}
 
     <TextInput    
     placeholder={placeholder} 
     style={{borderBottomColor:'#ccc', height:50*numberOfLines, marginLeft:12, color:colors.black, fontFamily:Platform.OS=="android" ? 'Roboto':"Avenir"  }}    
     keyboardType="ascii-capable"   
     fontSize={18}  
     numberOfLines={numberOfLines}
     {...otherProps}  />
     
     </View>
   
   

  )

}

const styles = StyleSheet.create({})