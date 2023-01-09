import { DeviceEventEmitter,Touchable,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity ,StyleSheet, Text, View,SafeAreaView,Image, Alert, Platform, StatusBar, Dimensions, ImageBackground,ScrollView } from 'react-native';
import { Button, FlatList, Systrace } from 'react-native-web';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import { useRoute } from '@react-navigation/native';
import colors from '../colors';
import MyWeb from '../Map/map';
import strore from '../strore';
import Factory from '../componants/factory';
const url=[require('../assets/cat.png'),require('../assets/elephant.png'),require('../assets/toucan.png'),require('../assets/cow.png'),require('../assets/sloth.png')];

export  default function CardScreen(props){

  const url=[require('../assets/cat.png'),require('../assets/elephant.png'),require('../assets/toucan.png'),require('../assets/cow.png'),require('../assets/sloth.png')];
const e =()=>{<></>};
const route=useRoute();

const post={
  categoryId:route?.params?.categoryId,
  title:route?.params?.title,
  price:route?.params?.price,
  image:route?.params?.image,
  listerName:route?.params?.listerName,
  numberOfListings:route?.params?.numberOfListings,
  lister:route?.params?.lister,
  url:route.params.url,
  description:route?.params?.description,
  location:route?.params?.location
}

const k=[
<Text   style={{marginTop:12,marginLeft:10, fontSize:20, fontWeight:'600'}}  > {props.title ? props.title:post.title? post.title:"No Title Was provided" }</Text>,
<Text   style={{fontSize:20,marginTop:12,marginLeft:10,color:'#34ebab'}} > {post.description?post.description: props.price? props.price: post.price?post.price : " No price exists " }</Text>,
<Text   style={{fontSize:20,marginTop:12,marginLeft:10,color:'#C0C0C0'}} > {post.price?post.price: props.price? props.price: post.price?post.price : "" }   </Text>];
const f=[
{key:"image"},
{key:"text1"},
{key:"text2"},
{key:"text3"}
]
  return (
    
    <SafeAreaView style={{flex:2, backgroundColor:colors.light}}>

<View style={{flex:1, backgroundColor:'white'}}>

<View style={{flexDirection:'column', justifyContent:'center',alignItems:'center',flex:1, backgroundColor:'rgba(250,231,218,0.6)'}}>

<View style={{flexDirection:'column',borderRadius:20,backgroundColor:'white',width:'100%',height:'100%'}}>
<Image  style={{width:'100%', height:'65%', borderBottomLeftRadius:0,borderBottomRightRadius:0,borderRadius:25}} source={post.categoryId? strore.appAssets[post.categoryId-1] : post.url? {uri:post.url}: props.image ?props.image:post.image?post.image:require('../assets/chair.jpg') }></Image>
<ScrollView showsVerticalScrollIndicator={true} style={{ alignContent:'space-between',height:"100%",flex:1}}>

{k.map((item)=>item)}

<View style={{marginTop:12,marginLeft:23,flexDirection:'row', marginLeft:10}}>

<Image style={{borderRadius:360,width:'12%', height:'100%'}} 
source={url[Math.floor(Math.random()*(url.length))]
}></Image>


<View style={{marginLeft:20}}>

    <Text style={{fontSize:23}}>{props.lister?.Name ? props.lister.Name: post.listerName ?post.listerName :"No name was provided" }</Text>

    <Text style={{color:'silver', fontWeight:'800' }}>{props.lister?.numOfListings ? props.lister.numOfListings :post.numberOfListings? post.numberOfListings: "No " } listings</Text>
</View>
</View>
</ScrollView>
    </View>

    </View>
    

{ <MyWeb 

listings={{name:post.title,

  Image:{URL:"erfgtegetg"},

  description:post.description,
  
  location:post.location

}} style={{ height:"30%",wedth:'40%' }} ></MyWeb>}

    </View>
  
  </SafeAreaView>

    )}