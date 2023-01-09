import React from 'react'
import { SafeAreaView } from 'react-native';
import AppPicker from '../componants/AppPicker';
import MyWeb from '../Map/map';
export default function MapScreen() {
  
  return (
 <SafeAreaView>
 <AppPicker></AppPicker>
 <MyWeb></MyWeb>
 </SafeAreaView>
  )

}