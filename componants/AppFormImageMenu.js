import { StyleSheet, Text, View,SafeAreaView, Platform, StatusBar, Alert, Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import colors from '../colors';
import Icon from './Icon';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import AppImagePicker from './AppImagePicker';
import Margin12 from './Margin12';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';


export default function AppImageMenu({action=()=>{},name}) {

    const scrollView= React.useRef();

    const {setFieldTouched,handleChange,errors, touched, setFieldValue  } =useFormikContext()

const [images,setImages]= React.useState([]);


const handleDelete=(uri)=>{

let image2=[];

images.forEach((item)=>{

        if(item.imageUri===uri){
            
        }else image2.push(item);
    })
setImages(image2);
action(image2);

setFieldValue(name,image2,false);


}

const selectImage=async(uri)=>{

    let image2=images;

     
      
     image2.push({imageUri:uri}); 
     
     setImages(image2);  
     action(uri); 
    
     setFieldValue(name,image2,true);
 

    }

return (
<>
<ScrollView ref={scrollView}  horizontal onContentSizeChange={()=> scrollView.current.scrollToEnd({animated:true})} >
{images.map((item)=>(
<>
<AppImagePicker key={item.imageUri} 
Uri={item.imageUri} action={selectImage}  action2={handleDelete} >
   
</AppImagePicker>

<Margin12></Margin12>

</>

))}

<AppImagePicker  
Uri={undefined} action={selectImage}  action2={handleDelete} >
   
</AppImagePicker>


</ScrollView>
{  touched[name] &&  <ErrorMessage visible={touched[name]} error={errors[name]} ></ErrorMessage>}
</>
 

);

}

const styles = StyleSheet.create({});