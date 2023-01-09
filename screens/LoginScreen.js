import { Alert, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icon from '../componants/Icon'
import ListItem from '../componants/ListItem'
import AppInput from '../componants/AppInput'
import AppPicker from '../componants/AppPicker'
import Margin12 from '../componants/Margin12'
import Button from '../componants/ Button'
import {Formik} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../componants/ErrorMessage'
import AppFormField from '../componants/AppFormField';
import AppForm from '../componants/AppForm';
import auth from '../api/auth';
import jwt_decode from "jwt-decode";
import AuthContext from '../AuthContext';
import react from 'react'
import authstorage from '../app/auth/authStorage'
export default function LoginScreen() {
const validateSchema=Yup.object().shape({
Email:Yup.string().required().email().label('Email'),
Password:Yup.string().required().min(5).label("Password")

});


const context=react.useContext(AuthContext);

const onSubmit=async (values)=>{

  const result=await auth.login(values.Email,values.Password);

 if(result.ok) 
 console.log("jwt",jwt_decode(result.data)); 
 context.setUser(jwt_decode(result.data)); 
 authstorage.storeToken(result.data); 
 alert(result.data); 

 if(!result.ok) alert("login failed");

}
  return (


    

    <View style={{justifyContent:'center', alignItems:'center'}}>
<Margin12></Margin12>
<Margin12></Margin12>

<Image source={require('../assets/logo-red.png')} style={{width:180,height:180}} ></Image>

<Margin12></Margin12>


<Formik    
initialValues={{Password:'',Email:''}}  
validationSchema={validateSchema}  
onSubmit={onSubmit} 
> 

{({handleChange,handleSubmit,errors, setFieldTouched,touched})=>(<>




<AppFormField 
name={"Email"} 
textContentType={"emailAddress"} 
keyBoardType={'email-address'} 
autoCorrect={false} 
iconName='email' 
placeholder={"Email"} 

></AppFormField>

<Margin12></Margin12>
<AppFormField 
name={"Password"} 
textContentType={"emailAddress"} 
keyBoardType={'email-address'} 
autoCorrect={false} 
iconName='lock' 
placeholder={"Password"} 
secureTextEntry={true}

></AppFormField>
<Margin12/>

<Margin12/>

<Margin12></Margin12>

<Button  title={"LOGIN"}  onPress={handleSubmit} ></Button>

</>)}

   </Formik>

 
    </View>

  )

}

const styles = StyleSheet.create({});