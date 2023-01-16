import { Alert, StyleSheet, Text, View,Image,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Icon from '../componants/Icon'
import ListItem from '../componants/ListItem'
import AppInput from '../componants/AppInput'
import AppPicker from '../componants/AppPicker'
import Margin12 from '../componants/Margin12'
import Button from '../componants/ Button'
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppFormField from '../componants/AppFormField';
import AppFormPicker from '../componants/AppFormPicker';
import AppFormImagePicker from '../componants/AppImagePicker';
import AppFormImageMenu from '../componants/AppFormImageMenu';
import AppImagePicker from '../componants/AppImagePicker';
import * as Location from "expo-location";
import useLocation from '../hooks/useLocation';
import colors from '../colors';
import apiClient from '../api/client';
import listings from '../api/listings';
import react from 'react'
import AuthContext from '../AuthContext'
import endPoints from '../api/endPoints';
import auth from '../Auth';
export default function LoginScreen({navigation}) {
const validateSchema=Yup.object().shape({
Title:Yup.string().required("Please add a title for your post").min(0).label("Title").max(18),    
Price:Yup.number().min(0).max(10000, "Sorry but thats simply too much to offer").required().label("Price") ,
Catagory:Yup.string().required().label("Catagory").notOneOf(["Catagory","AppPicker"],"Please select a catagory"),
Description:Yup.string().required().min(0).label("Description")
,Images:Yup.array().min(1,"Please Select At least 1 image").required("You need to choose an Image").label("Images").required()
,
DescriptionOfLocation:Yup.string().required().min(2).label("Description Of Location")

});


const location=useLocation();

const [refresh,setRef]=React.useState(true);

const handleSubmit=(listing)=>{
  return new Promise(async(resolve,reject)=>{
   

function handleCatagory(catagory){
const e=[{id:1, tag:'Smartphone', iconName:'phone' },{id:2,tag:'Laptop', iconName:'laptop'},{id:3,tag:'Camera',iconName:'camera' }, {id:4,tag:'Airpods/Headphones',iconName:'headphones' }, {id:5,tag:'Car Keys',iconName:'car-key' },{id:6,tag:'Jacket',iconName:'lock' },{id:7,tag:'Scooter',iconName:'scooter-electric' }, {id:8,tag:'Skateboard',iconName:'skateboard' },  {id:9,tag:'Books',iconName:'book-open' },{id:10,tag:'Bag',iconName:'bag-personal' },{id:11,tag:'Keys',iconName:'key' },{id:12,tag:'Other',iconName:'zoom' }] 


}
let secondsSinceEpoch = new Date().getTime() / 1000;
const data= {
  "categoryId":listing.Catagory,
  "description": listing.Description,
  "images":listing.Images
  ,"price": listing.Price,
  "title": listing.Title,
  "uri":listing.Uri,
  "date_of_posting": Math.floor(secondsSinceEpoch)
};

data.location=await new Promise(async(resolve,reject)=>{
  let location=listing.DescriptionOfLocation;
  let lct='';
  let target="";
  let skip=0;
  for(i=0;i<location.length;i++){
    
   if(location[i]==" " && !skip){
    target+="+"
    skip=1;
   } else{  
    target+=location[i];
    skip=0;
   }
   

  }



fetch("https://api.radar.io/v1/search/autocomplete?query="+target+"&limit=1",{method:"GET",headers:{"Authorization":auth.Auth}}).then(async(result)=>{
lct=await result.json()
console.log("result is : ",lct);

console.log(lct.addresses[0].latitude);

console.log(lct.addresses[0].longitude);

console.log(lct.addresses.length);
if(lct.addresses[0].longitude || lct.addresses[0].longitude===0){
  resolve({"latitude":lct.addresses[0].latitude,"longitude":lct.addresses[0].longitude})
}
}).catch(e=>{
  alert("an error occured");
  console.log("an error occured");
})





})
 
  try{
  /*  {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    } 
    {
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      body: {listing.Images[0]}
  }*/
  {
  
}

    
    const result=await fetch("http://localhost:9000/api/listings/NoImage",{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    } 
     ) 
    if(result.ok){
     alert("SUCCESS")
     resolve("SUCCESS");
     console.log(result.body)
    }else  resolve("FAILED");
  }catch(e){
    alert("FAILED TO POST",e)
  
  }

  console.log('lisiting232: ',data);
  })


}

const context = react.useContext(AuthContext);

const [refresh2,setRefresh2]=react.useState(false);

react.useEffect(()=>{

  setTimeout(()=>{

    if(!context.user){Alert.alert(
      "You need an account to post a missing item or declare that you found one","Do you have an account ?",
      [{text:"I have an account",
     onPress:()=>{
      setRefresh2(!refresh);
      context.setRefresh(!context.refresh);
       navigation.navigate("AccountScreen",
       
       
       {Account:"LoginScreen"})}},
       {text:"ow yeah...I dont",
       onPress:()=>{setRefresh2(!refresh);
       context.setRefresh(!context.refresh);
       navigation.navigate("AccountScreen",
       {Account:"RegisterScreen"})}}])}else{
       alert(context.user.userId);
      }
  },1000)

},[refresh2]);



function checkUser(){

return new Promise((resolve,reject)=>{

  if(!context.user){Alert.alert("You need an account to post a missing item or declare that you found one","Do you have an account ?",[{text:"I have an account",onPress:()=>{
    setRefresh2(!refresh); 
    context.setRefresh(!context.refresh);
    navigation.navigate("AccountScreen",{Account:"LoginScreen"})
    resolve();
  
  }},
    {text:"ow yeah...I dont",onPress:()=>{setRefresh2(!refresh);
       navigation.navigate("AccountScreen",{Account:"RegisterScreen"})
       resolve();
      
      }}])  
      
      }else console.log("the  n");

})

  


}

  return (

<SafeAreaView style={{backgroundColor:colors.white, flex:1}} >
    
<View style={{justifyContent:'center'}}>

<Margin12></Margin12>

<Margin12></Margin12>  

<Formik    
initialValues={{Title:'',Price: 0,Catagory:'',Description:'', Uri:[]}}  
validationSchema={validateSchema}  
onSubmit={async(values)=>{console.log(await handleSubmit(values))}} 
> 

{({handleChange,handleSubmit,errors, setFieldTouched,touched})=>(<>
  <ScrollView>
<AppFormImageMenu 
  action={()=>{ setRef(!refresh) }} 

  name={"Images"} >  </AppFormImageMenu>



<Margin12/>

    <AppFormField 
name={"Title"} 
keyBoardType={'ascii'} 
autoCorrect={false} 
placeholder={"Title"} 

></AppFormField>

<Margin12></Margin12>

<AppFormField 
name={"Price"} 
keyBoardType={'number-pad'} 
autoCorrect={false} 
placeholder={"Price"} 
width={120}
></AppFormField>

<Margin12></Margin12>


<AppFormPicker name={"Catagory"} ></AppFormPicker>

<AppFormField 
name={"Description"} 
textContentType={"emailAddress"} 
keyboardType='ascii-capable'
autoCorrect={false} 
placeholder={"Description"} 
numberOfLines={3} 

></AppFormField>
<Margin12/>

<Margin12/>
<AppFormField 
name={"DescriptionOfLocation"} 
textContentType={"emailAddress"} 
keyboardType='ascii-capable'
autoCorrect={false} 
placeholder={"Description of location"} 
numberOfLines={1} 

></AppFormField>
<Margin12></Margin12>

<Button  title={"Post"}  onPress={async()=>{await handleSubmit()}} ></Button>
</ScrollView>
</>)}


   </Formik>
   

    </View>

    </SafeAreaView>

  )

}

const styles = StyleSheet.create({});