import { StyleSheet, Text, View, TextInput, Platform,TouchableOpacity, Modal,SafeAreaView, FlatList, Image, Alert } from 'react-native'
import React, { cloneElement } from 'react'
import Icon from '../componants/Icon';
import colors from '../colors';
import Button from '../componants/ Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppPicker from '../componants/AppPicker';
import listings from '../api/listings';


/**
 * 
 * @param {Object} param0
 * 
 * @returns 
 */


export default function FilteringScreen(
  {filter=[

  ],width="90%",
  action=()=>{},
  iconName='apps', 
  iconColor=colors.medium, 
  placeholder="FILTER", 
  data=[{id:1, tag:'Smartphone', iconName:'phone' },{id:2,tag:'Laptop', iconName:'laptop'},{id:3,tag:'Camera',iconName:'camera' }, {id:4,tag:'Airpods/Headphones',iconName:'headphones' }, {id:5,tag:'Car Keys',iconName:'car-key' },{id:6,tag:'Jacket',iconName:'lock' },{id:7,tag:'Scooter',iconName:'scooter-electric' }, {id:8,tag:'Skateboard',iconName:'skateboard' },  {id:9,tag:'Books',iconName:'book-open' },{id:10,tag:'Bag',iconName:'bag-personal' },{id:11,tag:'Keys',iconName:'key' },{id:12,tag:'Other',iconName:'zoom' }] }) {

    const [modal,setModal]=React.useState(false);
    const [placeholder2,setPlaceholder]=React.useState(placeholder);
    const [argument,setArgument]=React.useState(null);

  return (
    
    <>

 <TouchableOpacity  onPress={()=>{setModal(true)}} >

<View   style={{ flexDirection:'row',  borderRadius:16, backgroundColor:colors.light, width:width, alignItems:'center', marginBottom:12}} >

    <Icon name={iconName} backgroundColor={colors.light} iconColor={iconColor} ></Icon>
 
     <Text style={{marginRight:'60%', marginLeft:12, color:colors.black, fontFamily:Platform.OS== "android" ? 'Roboto': "Avenir"  }}   keyboardType="ascii-capable" secureTextEntry={false} fontSize={18}  >{placeholder2}</Text>
    
     <Icon name={"chevron-down"} backgroundColor={colors.light} iconColor={iconColor} ></Icon>

     </View>
   

     </TouchableOpacity>
     

<Modal visible={modal} animationType={'slide'} >
<SafeAreaView style={{ alignContent:'center', justifyContent:'center', alignItems:'center'}} >

<Button title="Close" onPress={()=>{setModal(false)}}   ></Button>


<FlatList 
style={{width:'100%',height:'100%'}}
contentContainerStyle={{justifyContent:'space-between'}}
data={data} 
keyExtractor={(item)=>{item.tag.toString()}} 

renderItem={({item})=> ( 
  
<AppPicker placeholder={"filter"} ></AppPicker>

)} refresh={true} />

<Button  title="Apply" onPress={
  ()=>{
  // Filterd_listings=[];
  for(i=0;i<2;i++){

    //if(filter[i]){



   // }
  }
  action();
  setModal(false);
  
  }}   ></Button>


</SafeAreaView>

</Modal>

    </>
 )

}

const styles = StyleSheet.create({});