import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '/Users/hashemjaber/Desktop/SELLIT/screens/WelcomeScreen'
import LoginScreen from '/Users/hashemjaber/Desktop/SELLIT/screens/LoginScreen'
import RegisterScreen from '/Users/hashemjaber/Desktop/SELLIT/screens/RegisterScreen'
import Account from '../../screens/AccountScreen'
import MessagesScreen from '../../screens/MessagesScreen';
import AuthContext from '../../AuthContext';
import react from 'react';
import { useRoute } from '@react-navigation/native';
const Stack=createStackNavigator();

function AuthNavigator(){

    const route=useRoute();
    const [refresh,setRefresh]=react.useState(false);
    const context=react.useContext(AuthContext);
    react.useEffect(()=>{
        context.setRefresh(context.refresh);
    },[context.refresh])
    
    return (

<Stack.Navigator screenOptions={{headerShown:false, title:""}} initialRouteName={route?.params?.Account?  route.params.Account :context.user ?"Account":"WelcomeScreen"} mode="modal" >

<Stack.Screen name={"Account"} component={Account} />

<Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />

<Stack.Screen name={"LoginScreen"} component={LoginScreen} />

<Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />

<Stack.Screen name={"MessageScreen"} component={MessagesScreen} />

</Stack.Navigator> )}

export default AuthNavigator;