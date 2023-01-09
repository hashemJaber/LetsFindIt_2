import { DeviceEventEmitter,Touchable,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity ,StyleSheet, Text, View,SafeAreaView,Image, Alert, Platform, StatusBar, Dimensions, ImageBackground, FlatList} from 'react-native';
import Icon from '../componants/Icon';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import ListItem from '../componants/ListItem';
import colors from '../colors';
import CardScreen from '../componants/card';
import { useEffect, useState } from 'react';
import listings from '../api/listings';
import ErrorMessage from '../componants/ErrorMessage';
import AppPicker from '../componants/AppPicker';
import apiClient from "../api/client";
import endPoints from "../api/endPoints";
import react from 'react';
import strore from '../strore';
import AuthContext from '../AuthContext';
import FilteringScreen from './FilteringScreen';
import handleTime from '../handleTime';
 
const listingsMenu=[{id:1,
  categoryId:2,
title:'NO ITEMS ON DISPLAY',
price:'NO DATES ON DISPLAY',
image:require('../assets/jacket.png'),
images:[{url:undefined}],
"location":{
    "latitude": 37.7749,
    "longitude": -122.4194
  }


}

]

const flags=["lost-items.png","surprise.png","camera.png","airpods.png","car.png","jacket.png","electric-scooter","longboard.png","study.png","school-bag.png","key-chain.png","alien.png"];

    export  default function ListingsScreen({navigation}){

   
        const [error,setError]= useState(false);

        const [items,setItems]= useState(listingsMenu);
    
        const [loading,setLoading]= useState(false);

        const [reshresh,setRefresh]= useState(false);
      
        
function filter(argument,items){
let newItems=[]
  items.forEach((item)=>{
    if(argument(item)){
      newItems.push(item)};
  

    })
  
setItems(newItems);

}
    async function getListings(){
      setLoading(true);
      const res= await  listings.getListings();
setLoading(false);
      console.log(res.data[0]);


      if(res.ok){setItems(res.data); setError(false);   items.forEach((item,index)=>{
        strore.items.push(item);
      }) }

      else setError(true);
     
    }
    
    useEffect(()=>{

        getListings();
        
    },[]);
    
  
 
        return (

<SafeAreaView style={{width:'100%',height:'100%', backgroundColor:colors.light, justifyContent:'center', alignItems:'center'}}>

<FilteringScreen action={(value)=>{alert('chose '+value)}}></FilteringScreen>

    {error && <>

    <ErrorMessage error={" ! Failed to load listings"} visible={error} ></ErrorMessage>
   
    </>}
     <FlatList
              data={items}

              keyExtractor={(listingMenu) => listingMenu.images[0].url ?listingMenu.images[0].url  :listingMenu.id.toString() }

              renderItem={({ item }) => (
             
<CardScreen 
categoryId={item.categoryId}
title={item.title} 
subTitle={item.subTitle?item.subTitle:undefined} 
price={item.date_of_posting ?handleTime(item.date_of_posting):"few moments ago "}
image={item.image?item.image:undefined} 
imageUrl={item.images[0].url?item.images[0].url:undefined}
action={function handlePress(){if(navigation){
    const e=item.images[0].url;
    navigation.navigate("ListingDetails",
{title:item.title,id:item.id,image:item.image,url:e,subTitle:item.subTitle,price:item.date_of_posting ?handleTime(item.date_of_posting):"few moments ago ", lister:require("../assets/jacket.jpg"),numberOfListings:24,listerName:'Hashem', location:item.location, description:item.description,categoryId:item.categoryId})} }}  ></CardScreen>

              )}     
              
              refreshing={false}  onRefresh={()=>{

              getListings();

}}/>
 
    
    </SafeAreaView>
      )
    
    }