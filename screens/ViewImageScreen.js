import { DeviceEventEmitter,Touchable,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity ,StyleSheet, Text, View,SafeAreaView,Image, Alert, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { Button, Systrace } from 'react-native-web';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';


export  default function ViewImageScreen(props){
alert('alert works before componant');


    return (<ImageBackground source={require('../assets/chair.jpg')} style={{flex:1, backgroundColor:'red', flexDirection:'row', justifyContent:'space-between'}}>

<SafeAreaView style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>

<View   onTouchStart={()=>{alert('alert works after componant');}} style={{margin:10,width:60,height:60, backgroundColor:'#fc5c65'}}>


</View>

<View onTouchStart={()=>{alert('alert works after componant')}} style={{margin:10,width:60,height:60, backgroundColor:'#4ECDC4'}}></View>

</SafeAreaView></ImageBackground>)

}