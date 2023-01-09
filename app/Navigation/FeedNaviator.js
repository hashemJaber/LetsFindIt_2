import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '/Users/hashemjaber/Desktop/SELLIT/screens/ListingsScreen'
import ListingsDetailsScreen from '/Users/hashemjaber/Desktop/SELLIT/screens/ListingDetailsScreen'
const Stack=createStackNavigator();

const FeedNavigator=()=>(
    
<Stack.Navigator screenOptions={{headerShown:false, title:""}} initialRouteName="ListingsScreen" mode="modal" >


<Stack.Screen name={"ListingsScreen"} component={ListingsScreen} />

<Stack.Screen name={"ListingDetails"} component={ListingsDetailsScreen} />



</Stack.Navigator>)

export default FeedNavigator;
