import { DeviceEventEmitter,Touchable,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity ,StyleSheet, Text, View,SafeAreaView,Image, Alert, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { Button, Systrace } from 'react-native-web';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import { useRoute } from '@react-navigation/native';
import Margin12 from './Margin12';
import strore from '../strore';
import colors from '../colors';



//props.title
//props.price
//props.image
/**
 *
 * @typedef {Object} props
 * @property {String} title
 * @property {(Number)} price
 * * @property {(String)} subTitle
 * @property {(String|PictureInPictureWindow)} image 
 *  @property {(Number)} categoryId
 */
/**
 * 
 * @param {props} props 
 * 
 */

export  default function CardScreen(props){

const action = props.action ? props.action :undefined;

const route=useRoute();

const post={
  title:route?.params?.title,
  subTitle:route?.params?.subTitle,
  image:route?.params?.image,
  price:route?.params?.price,
  description:route?.params?.description,
  location:route?.params?.location,
  categoryId:route?.params?.categoryId
  
}


const img=strore.appAssets[post.categoryId];

//require("../assets/electric-scooter.png");
//isTHere ? img :props.image? props.image:post.image?post.image : props.imageUrl ? {uri:props.imageUrl}:undefined
//back ground used to be dark light   

return (
      <>
<TouchableOpacity   onPress={ action ? ()=>action():console.log('No defined action') }>

<View style={{width:400, height:250}}>


<View style={{flexDirection:'column', justifyContent:'center',alignItems:'center',flex:1.5}}>


<View style={{flexDirection:'column', justifyContent:'space-around', marginTop:23,borderRadius:20,backgroundColor:"white",width:'90%',height:'100%'}}>
<View style={{justifyContent:'center', alignContent:"center",alignItems:'center',flex:0.9}}>

<Image   style={{marginTop:-16,width:"100%", height:"100%",aspectRatio:1, borderBottomLeftRadius:0,borderBottomRightRadius:0,borderRadius:25}} source={ props.categoryId?strore.appAssets[props.categoryId-1] :  post.categoryId? strore.appAssets[post.categoryId-1]:img ? img :props.image? props.image:post.image?post.image : props.imageUrl ? {uri:props.imageUrl}:undefined }></Image>

</View>

<Text   style={{marginLeft:10, fontSize:"16%"}}  > {props.title ? props.title : post.title ? post.title :undefined}</Text>

<Text   style={{marginBottom:12,marginLeft:10,color:'black', fontSize:"16%"}} > {props.price ? props.price: props.subTitle ? props.subTitle: post.price ? post.price : post.subTitle ? post.subTitle :undefined }</Text>

</View>

</View>



    </View>
    
    </TouchableOpacity>
    <Margin12></Margin12>
   </>

  )

}