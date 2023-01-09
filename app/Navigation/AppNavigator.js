import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
const Tab=createBottomTabNavigator();
import Account from '../../screens/AccountScreen'
import Listings from '../../screens/ListingsScreen';
import ListingsEditeScreen from '../../screens/ListingEditScreen';
import FeedNavigator from '../Navigation/FeedNaviator'
import AuthNavigator from './AuthNavigation';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyWeb from '../../Map/map';
import MapScreen from '../../screens/MapScreen';
import react from 'react';
import AuthContext from '../../AuthContext';
import colors from '../../colors';
function AppNavigator(){
  const context=  react.useContext(AuthContext);
return(
    
<Tab.Navigator  screenOptions={{}}   initialRouteName={"Feed"}>

<Tab.Screen 

name="AccountScreen" 

component={AuthNavigator} 
listeners={""}
options={{
    tabBarIcon:({color,size})=> 
     <MaterialCommunityIcons name="account" 
     color={colors.primary} size={size} 
     ></MaterialCommunityIcons>
}}

/>


<Tab.Screen 

name="Feed" 
component={FeedNavigator}
options={{
    tabBarIcon:({color,size})=>  <MaterialCommunityIcons name="home" color={colors.primary} size={size} ></MaterialCommunityIcons>
}}

/>

<Tab.Screen  
name="Map" 
component={MapScreen} 
options={{
    tabBarIcon:({color,size})=>  <MaterialCommunityIcons name="map" color={colors.primary} size={size} ></MaterialCommunityIcons>

}} />

<Tab.Screen  
name="ListingsEditeScreen" 
component={ListingsEditeScreen} 
options={{
    tabBarIcon:({color,size})=>  <MaterialCommunityIcons name="bookmark-plus" color={colors.primary} size={size} ></MaterialCommunityIcons>
}} />




</Tab.Navigator>
)
}

export default AppNavigator;