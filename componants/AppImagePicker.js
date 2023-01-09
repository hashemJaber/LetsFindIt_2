import { StyleSheet, Text, View,SafeAreaView, Platform, StatusBar, Alert, Image,TouchableOpacity} from 'react-native';
import colors from '../colors';
import Icon from './Icon';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';



export default function AppImagePicker(
  {action=()=>{},Uri="none", action2=()=>{} }) 
  {

    const [imageUri,setImageUri] =React.useState(Uri==="none" ? undefined:Uri);


const selectImage=async()=>{
//  file/asset/ 

//Leave the validation for the server, send the image/media as a BLOB
  const result=await ImagePicker.launchImageLibraryAsync();
 alert(result);
  
 if(result.type==="image"){ 
   
  
   action(result.uri);};

 

}

    return (


       < TouchableOpacity onPress={()=>{
         if(!imageUri){
          selectImage(imageUri);
          }else  Alert.alert("Delete image ?","Are you sure you want to remove this image ?",[{text:'Yes',onPress:()=>{action2(imageUri)}},{text:'No',onPress:()=>{}}]);
         
         
         }} style={{width:150,height:150, backgroundColor:colors.light, justifyContent:'center',alignItems:'center',borderRadius:'40%'}} >
        { !imageUri && <Icon name={'camera'}></Icon>}

        {imageUri && <Image  style={{borderRadius:'40%',height:150,width:150 }}   source={{uri:imageUri}} ></Image>}   

        </TouchableOpacity>
        
        
          
        
          );
}

const styles = StyleSheet.create({});