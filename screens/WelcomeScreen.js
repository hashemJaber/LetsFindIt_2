import { DeviceEventEmitter,Touchable,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity ,StyleSheet, Text, View,SafeAreaView,Image, Alert, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { Button, Systrace } from 'react-native-web';

import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
//import img from '';
export default function WelcomePage({navigation}){
/**
 * <Image style={{width:300,height:300}}  source={require('../assets/logo-red.png')}>

</Image>
 */
return(

<ImageBackground imageStyle={{alignContent:'center',backgroundColor:"rgba(1,1,1,0)",opacity:0.2}} source={require('../assets/LetsFindIt-1.jpg')} style={{ flex:1}} >



<View   style={{flex:1, justifyContent:'flex-end', marginBottom:18, alignItems:'center'}}>
<View onTouchStart={()=>{if(navigation){navigation.navigate("RegisterScreen")}}} style={{width:'90%',marginBottom:18,height:40, backgroundColor:'#fc5c65', flexDirection:'row',justifyContent:'center',alignItems:'center', borderRadius:'65'}} >
<Text style={{color:'white', fontSize:16}}>SIGN IN</Text>
</View>


<View  onTouchStart={()=>{if(navigation){navigation.navigate("LoginScreen")}}} style={{width:'90%', height:40, backgroundColor:'#4ECDC4', flexDirection:'row',justifyContent:'center',alignItems:'center', borderRadius:'65'}} >

    <Text style={{color:'black', fontSize:16}}>SIGN UP</Text>
</View>
</View>

</ImageBackground>




    


)

}