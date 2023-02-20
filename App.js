import { StyleSheet, Text, View,SafeAreaView, Platform, StatusBar, Alert, Image,TouchableOpacity} from 'react-native';
import React ,{useEffect, useState}from 'react';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppNavigator from './app/Navigation/AppNavigator';
import {NavigationContainer } from '@react-navigation/native';
import AuthContext from './AuthContext';
import strore from './strore';
import authStorage from './app/auth/authStorage';
export default function App() {

  const [ref,setRef]=React.useState(false);
   React.useEffect(()=>{
   setRef(!ref);
   
  },[strore.items.length])
  const [filter,setFilter]=React.useState({item});
  
  const [globalRef,setGloabalRef]=React.useState(false);
const [user,setUser]=React.useState(authStorage.getToken());
const [refresh,setRefresh]=React.useState(false);
setTimeout(()=>{
setRefresh(!refresh);

},2000);
return (
<AuthContext.Provider value={{user,setUser,refresh,setRefresh,globalRef,setGloabalRef}}>
<NavigationContainer >
{ <AppNavigator/> }
</NavigationContainer>
</AuthContext.Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'orange',justifyContent:'center',alignContent:'center',
    width:'100%',
    height:'100%',flex:1
    
 
  
    
  },

});