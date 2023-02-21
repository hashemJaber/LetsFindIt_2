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

   
  },[strore.items.length]);
  
/*
{
  title: 'Lala',
  price: 2,
  categoryId: 4,
  description: 'E32ere3r',
  date_of_posting: 1677015050,
  images: [
    {
      imageUri: 'file:///Users/hashemjaber/Library/Developer/CoreSimulator/Devices/6E51698F-A8BF-49BF-BF41-24146BA1B149/data/Containers/Data/Application/A19DB979-9062-4091-940F-02BADE2CA8C8/Library/Caches/ExponentExperienceData/%2540anonymous%252FSELLIT-a98a92d5-d231-4fe1-a190-c679bb6a4e42/ImagePicker/F2F239DB-111A-470B-B0B4-8DAA55E1C60B.jpg'
    }
  ],
  location: { latitude: 38.57873, longitude: -121.466786 }
}
*/

const [filter,setFilter]=React.useState({title:null,price:null,categoryId:null,description:null,date_of_posting:null,location:{latitude:null,longitude:null}});

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